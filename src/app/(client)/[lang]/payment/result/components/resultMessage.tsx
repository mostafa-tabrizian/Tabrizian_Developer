'use client'

import { useSearchParams } from 'next/navigation'

const ResultMessage = () => {
   const searchParams = useSearchParams()
   const paymentStatus = searchParams.get('Status')

   return (
      <>
         {paymentStatus == 'OK' ? (
            <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
               <h1 className='yekanBold text-center'>پرداخت با موفقیت انجام شد</h1>
               <p className='yekan rtl mt-5 text-lg'>از خوش حسابی شما متشکرم دوست عزیز 💜</p>
            </div>
         ) : (
            <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
               <h1 className='yekanBold text-center'>پرداخت ناموفق</h1>
               <p className='yekan mt-5 text-lg'>لطفا مجددا تلاش کنید</p>
               <p className='yekan mt-5 text-lg'>
                  اگر مبلغی از حساب شما کسر شد، در کمتر از ۲۴ ساعت آینده خودکار توسط بانک برگشت
                  میخورد
               </p>
            </div>
         )}
      </>
   )
}

export default ResultMessage
