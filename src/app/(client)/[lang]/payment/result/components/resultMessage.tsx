'use client'

import { useSearchParams } from 'next/navigation'

const ResultMessage = () => {
   const searchParams = useSearchParams()
   const status = searchParams.get('Status')
   const id = searchParams.get('ID')
   const refId = searchParams.get('RefId')
   const renewalEnd = searchParams.get('RenewalEnd')

   return (
      <>
         {status == 'OK' ? (
            <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
               <h1 className='yekanBold rtl text-center'>پرداخت با موفقیت انجام شد ✔️</h1>
               <p className='yekan mt-5 text-lg'>
                  دامنه ی شما تا تاریخ{' '}
                  {new Date(parseInt(renewalEnd as string)).toLocaleDateString('fa', {
                     day: 'numeric',
                     month: 'long',
                     year: 'numeric',
                  })}{' '}
                  تمدید شد
               </p>
               <p className='yekan mt-5 select-text text-lg'>کد رهگیری بانکی: {refId} </p>
               <p className='yekan mt-5 select-text text-lg'>آی دی پرداخت: {id} </p>
            </div>
         ) : (
            <div className='relative z-10 mx-5 min-h-screen max-w-screen-sm pt-32 text-center lg:mx-auto'>
               <h1 className='yekanBold rtl text-center'>پرداخت ناموفق ❌</h1>
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
