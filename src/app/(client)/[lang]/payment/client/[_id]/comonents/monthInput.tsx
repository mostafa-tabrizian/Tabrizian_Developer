'use client'

import { useState } from 'react'

const MonthInput = ({
   clientId,
   clientName,
   clientPrice,
}: {
   clientId: string
   clientName: string
   clientPrice: number
}) => {
   const [monthRenewal, setMonthRenewal] = useState(1)
   const [loading, setLoading] = useState(false)

   const monthlyRenewalChangeHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      if (1 <= value) {
         setMonthRenewal(parseInt(e.target.value))
      }
   }

   const handlePayment = async () => {
      const toast = await import('react-toastify').then((mod) => mod.toast)
      toast.info('در حال انتقال به درگاه پرداخت...')

      try {
         setLoading(true)

         const res = await fetch('/api/client/payment', {
            method: 'POST',
            body: JSON.stringify({
               clientId,
               clientName,
               monthRenewal,
               clientPrice,
            }),
         })

         const resData = await res.json()
         const zarinpalAuthority = resData.authority

         if (zarinpalAuthority) {
            window.location.href = `https://www.zarinpal.com/pg/StartPay/${zarinpalAuthority}`
         }
      } catch (err) {
         toast.error('در ایجاد درگاه پرداخت خطایی رخ داد. لطفا مجدد تلاش کنید.')
         return console.error('Zarinpal Error: ', err)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className='mt-10 flex justify-center'>
         <div className='space-y-5'>
            <span className='yekan rtl block text-base text-slate-400'>
               {monthRenewal.toLocaleString('fa')} ماه به قیمت{' '}
               {(monthRenewal * clientPrice).toLocaleString('fa')} تومان
            </span>
            <div className='flex gap-5'>
               <input
                  onChange={monthlyRenewalChangeHandle}
                  value={monthRenewal}
                  className='yekan rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'
                  type='number'
                  min={1}
               />
               <button
                  disabled={loading}
                  onClick={handlePayment}
                  className='yekan flex items-center text-base'
               >
                  {loading ? (
                     <svg
                        className='mx-auto h-6 w-14 animate-spin text-green-500'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        {' '}
                        <path stroke='none' d='M0 0h24v24H0z' />{' '}
                        <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
                     </svg>
                  ) : (
                     <>
                        پرداخت{' '}
                        <svg
                           className='h-5 w-5 text-green-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M9 5l7 7-7 7'
                           />
                        </svg>
                     </>
                  )}
               </button>
            </div>
         </div>
      </div>
   )
}

export default MonthInput
