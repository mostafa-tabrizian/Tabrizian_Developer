'use client'

import { memo } from 'react'
import { IPayment } from '@/models/payment'
import { IClient } from '@/models/client'

const DetailForm = memo(({ payment, client }: { payment: IPayment; client: IClient }) => {
   return (
      <div className='mt-6 grid grid-cols-3 gap-5 '>
         <div className='col-span-2 space-y-5'>
            <div className='space-y-1'>
               <span className='text-slate-400'>Client</span>
               <p className='yekan mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'>
                  {client.name}
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Months</span>
               <p className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'>
                  {payment.months}
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Price</span>
               <p className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'>
                  {payment.price.toLocaleString()}
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Amount</span>
               <p className='yekan mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'>
                  {(payment.price * payment.months).toLocaleString()} Toman
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Card Number</span>
               <p className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'>
                  {payment.cardNumber}
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Reference Id (شماره رهگیری)</span>
               <p className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'>
                  {payment.refId}
               </p>
            </div>

            <div className='space-y-1'>
               <span className='text-slate-400'>Payment Date</span>
               <p className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'>
                  {String(payment.updatedAt)}
               </p>
            </div>
         </div>
      </div>
   )
})

DetailForm.displayName = 'DetailForm'

export default DetailForm
