import Spotlight from '../../projects/[_id]/components/spotlight'

export const metadata = {
   title: 'مصطفی تبریزیان | نتیجه پرداخت ',
   description: 'صفحه نتیجه پرداخت به مصطفی تبریزیان',
}

async function Payment() {
   return (
      <div>
         <Spotlight />

         <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
            <h1 className='yekanBold text-center'>پرداخت ناموفق</h1>
            <p className='yekan mt-5 text-lg'>لطفا مجددا تلاش کنید</p>
            <p className='yekan mt-5 text-lg'>
               اگر مبلغی از حساب شما کسر شد، در کمتر از ۲۴ ساعت آینده خودکار توسط بانک برگشت میخورد
            </p>
         </div>
      </div>
   )
}

export default Payment
