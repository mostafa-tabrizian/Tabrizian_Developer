import dbConnect from '@/lib/dbConnect'
import Spotlight from '../../projects/[_id]/components/spotlight'
import Client from '@/models/client'
import MonthInput from './comonents/monthInput'

export const metadata = {
   title: 'مصطفی تبریزیان | تمدید سایت ',
   description: 'صفحه پرداخت به مصطفی تبریزیان',
}

const getClientData = async (_id: string) => {
   await dbConnect()
   return await Client.findById(_id)
}

const PaymentCalcPage = async ({ params: { _id } }: { params: { _id: string } }) => {
   const clientData = await getClientData(_id)

   return (
      <div>
         <Spotlight />

         <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
            <h1 className='yekanBold text-center'>تمدید سایت</h1>
            <p className='yekan rtl'>
               سلام {clientData.name} عزیز. لطفا برای تمدید هاست، دیتابیس و فضای ابری سایت{' '}
               {clientData.domain} تعداد ماه های تمدید را وارد کرده و هزینه را از طریق درگاه، پرداخت
               کنید.
            </p>
            <MonthInput clientName={clientData.name} clientPrice={clientData.price} />
         </div>
      </div>
   )
}

export default PaymentCalcPage
