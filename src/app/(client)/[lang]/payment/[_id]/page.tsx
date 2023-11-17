/* eslint-disable camelcase */
import { toast } from 'react-toastify'
import Spotlight from '../../projects/[_id]/components/spotlight'
import Payment from '@/models/payment'

export const metadata = {
   title: 'مصطفی تبریزیان | پرداخت ',
   description: 'صفحه پرداخت به مصطفی تبریزیان',
}

const paypingCodeRequest = async (payerIdentity: string, payerName: string, amount: string) => {
   try {
      const res = await fetch('https://api.payping.ir/v2/pay', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.PAYPING_TOKEN}`,
         },
         body: JSON.stringify({
            amount,
            payerIdentity,
            payerName,
            returnUrl: `${process.env.API_URL}/api/client/payment`,
            clientRefId: payerIdentity,
         }),
      })

      const resData = await res.json()

      return resData.code
   } catch (err) {
      toast.error('در ایجاد درگاه پرداخت پی‌پینگ خطایی رخ داد. لطفا مجدد تلاش کنید.')
      return console.error('PayPing Error: ', err)
   }
}

const zarinpalAuthorityRequest = async (paymentId: string, description: string, amount: string) => {
   try {
      const res = await fetch('https://api.zarinpal.com/pg/v4/payment/request.json', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            merchant_id: process.env.ZARINPAL_MERCHANT_ID,
            amount,
            currency: 'IRT',
            callback_url: `${process.env.API_URL}/api/client/payment?Amount=${amount}&PaymentId=${paymentId}`,
            description,
            metadata: {
               order_id: String(paymentId),
            },
         }),
      })

      const resData = await res.json()

      return resData.data.authority
   } catch (err) {
      toast.error('در ایجاد درگاه پرداخت زرین‌پال خطایی رخ داد. لطفا مجدد تلاش کنید.')
      return console.error('Zarinpal Error: ', err)
   }
}

const getPaymentData = async (_id: string) => {
   try {
      return await Payment.findById(_id)
   } catch (err) {
      toast.error('در دریافت اطلاعات پرداخت خطایی رخ داد')
      console.error('Error fetching data:', err)
      return
   }
}

async function PaymentPage({ params: { _id } }: { params: { _id: string } }) {
   const paymentData = await getPaymentData(_id)

   const paypingCode = await paypingCodeRequest(
      paymentData._id,
      paymentData.payerName,
      paymentData.amount,
   )

   const zarinpalAuthority = await zarinpalAuthorityRequest(
      paymentData._id,
      paymentData.description,
      paymentData.amount,
   )

   return (
      <div>
         <Spotlight />

         <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
            <h1 className='yekanBold text-center'>صفحه پرداخت</h1>

            {paymentData.paid ? (
               <p className='yekanBold rtl mt-5 text-lg'>
                  {paymentData.payerName} صورت حساب شما به مبلغ{' '}
                  {parseInt(paymentData.amount).toLocaleString('fa')} پرداخت شده می‌باشد. ✔️
               </p>
            ) : (
               <>
                  <p className='yekan mt-5 text-lg'>
                     {paymentData.payerName}، مبلغ پرداختی شما{' '}
                     {parseInt(paymentData.amount).toLocaleString('fa')} تومان می‌باشد
                  </p>
                  <a
                     href={`https://www.zarinpal.com/pg/StartPay/${zarinpalAuthority}`}
                     className='yekanBold mx-auto mt-10 flex h-[300px] w-[300px] items-center justify-center rounded-2xl border-2 border-indigo-500 bg-white py-2 text-2xl text-indigo-500'
                  >
                     پرداخت با زرین‌پال
                  </a>
                  <a
                     href={`https://api.payping.ir/v2/pay/gotoipg/${paypingCode}`}
                     className='yekanBold mx-auto mt-10 flex h-[300px] w-[300px] items-center justify-center rounded-2xl border-2 border-indigo-500 bg-white py-2 text-2xl text-indigo-500'
                  >
                     پرداخت با پی‌پینگ
                  </a>
               </>
            )}
         </div>
      </div>
   )
}

export default PaymentPage
