import { toast } from 'react-toastify'
import Spotlight from '../projects/[_id]/components/spotlight'

export const metadata = {
   title: 'مصطفی تبریزیان | پرداخت ',
   description: 'صفحه پرداخت به مصطفی تبریزیان',
}

const paypingCodeRequest = async (payerIdentity: string, amount: string) => {
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
            payerName: payerIdentity,
            returnUrl: `${process.env.API_URL}/api/client/payment`,
            clientRefId: `${payerIdentity}-${amount}`,
         }),
      })

      const resData = await res.json()

      return resData.code
   } catch (err) {
      toast.error('در ایجاد درگاه پرداخت خطایی رخ داد. لطفا مجدد تلاش کنید.')
      return console.error('Payment Error: ', err)
   }
}

async function Payment({ searchParams }: { searchParams: { pid: string; a: string } }) {
   const payerIdentity = searchParams.pid
   const amount = searchParams.a

   const paypingCode = await paypingCodeRequest(payerIdentity, amount)

   return (
      <div>
         <Spotlight />

         <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
            <h1 className='yekanBold text-center'>صفحه پرداخت</h1>

            <p className='yekan mt-5 text-lg'>
               مبلغ پرداختی شما {parseInt(amount).toLocaleString('fa')} تومان می‌باشد
            </p>

            <a
               href={`https://api.payping.ir/v2/pay/gotoipg/${paypingCode}`}
               className='yekanBold mx-auto mt-10 flex h-[300px] w-[300px] items-center justify-center rounded-2xl border-2 border-indigo-500 bg-white py-2 text-2xl text-indigo-500'
            >
               پرداخت
            </a>
         </div>
      </div>
   )
}

export default Payment
