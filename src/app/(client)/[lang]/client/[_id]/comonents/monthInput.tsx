'use client'

import { useState } from 'react'

const MonthInput = ({ clientName, clientPrice }: { clientName: string; clientPrice: number }) => {
   const [monthRenewal, setMonthRenewal] = useState(1)

   const monthlyRenewalChangeHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      if (1 <= value) {
         setMonthRenewal(parseInt(e.target.value))
      }
   }

   const handlePayment = async () => {
      try {
         const res = await fetch('/api/client/payment', {
            method: 'POST',
            body: JSON.stringify({
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
         const toast = await import('react-toastify').then((mod) => mod.toast)
         toast.error('در ایجاد درگاه پرداخت خطایی رخ داد. لطفا مجدد تلاش کنید.')
         return console.error('Zarinpal Error: ', err)
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
               <button onClick={handlePayment} className='yekan flex items-center text-base'>
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
               </button>
            </div>
         </div>
      </div>
   )
}

export default MonthInput
