'use client'

import { IClient } from '@/models/client'
import { useState } from 'react'
import { toast } from 'react-toastify'

const PushNotification = ({ client }: { client: IClient }) => {
   const [loadingSMS, setLoadingSMS] = useState(false)
   const [loadingEmail, setLoadingEmail] = useState(false)

   const sendSMS = async () => {
      setLoadingSMS(true)

      try {
         if (!client.mobileNumber) {
            return toast.error('هیج شماره تماسی ثبت نشده است')
         }

         const payload = {
            name: client.name,
            mobile: client.mobileNumber,
            domain: client.domain,
            clientId: client._id,
         }

         const res = await fetch('/api/--admin--/client/notification/sms', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         if (!res.ok) throw new Error()

         const resData = await res.json()

         if (resData.message === 'smsError')
            return toast.error('در ارسال خطایی رخ داد. لطفا به پشتیبانی اطلاع دهید.')
         else if (resData.status === 500) throw new Error('405')

         toast.success('پیامک با موفقیت ارسال شد')
      } catch (err) {
         toast.error('در ارسال پیامک خطایی رخ داد')
         console.error('api/admin/client/notification/sms err', err)
      } finally {
         setLoadingSMS(false)
      }
   }

   const sendTelegram = async () => {
      if (!client.telegramId) {
         return toast.error('هیج آیدی تلگرامی ثبت نشده است')
      }

      const textarea = document.createElement('textarea')
      textarea.value = `سلام ${client.name} عزیز. امیدوارم که حالتون خوب باشه.
         اعتبار سایت ${client.domain} رو به اتمام هستش. 
         لطفا جهت تمدید بر لینک زیر کلیک کنید:
         https://mostafatabrizian.ir/fa/payment/client/${client._id}`
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)

      toast.success('پیام تلگرام با موفقیت کپی شد')
   }

   const sendEmail = async () => {
      setLoadingEmail(true)

      try {
         if (!client.email) {
            return toast.error('هیج ایمیلی ثبت نشده است')
         }

         const payload = {
            email: client.email,
            name: client.name,
            domain: client.domain,
            clientId: client._id,
         }

         const res = await fetch('/api/--admin--/client/notification/email', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         if (!res.ok) throw new Error()

         const resData = await res.json()

         if (resData.message === 'emailError')
            return toast.error('در ارسال خطایی رخ داد. لطفا به پشتیبانی اطلاع دهید.')
         else if (resData.status === 500) throw new Error('resData.status.500', resData)

         toast.success('ایمیل با موفقیت ارسال شد')
      } catch (err) {
         toast.error('در ارسال ایمیل خطایی رخ داد')
         console.error('api/admin/client/notification/email err', err)
      } finally {
         setLoadingEmail(false)
      }
   }

   return (
      <div className='items-top mt-5 flex space-x-10'>
         <div>
            {loadingSMS ? (
               <svg
                  className='mx-auto mb-3 h-6 w-6 animate-spin text-slate-200'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
               >
                  <circle
                     className='opacity-25'
                     cx='12'
                     cy='12'
                     r='10'
                     stroke='currentColor'
                     strokeWidth='4'
                  ></circle>
                  <path
                     className='opacity-75'
                     fill='currentColor'
                     d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
               </svg>
            ) : (
               <button className='contents' type='button' onClick={sendSMS}>
                  <svg
                     className='mx-auto h-8 w-8 text-slate-200'
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
                     <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />{' '}
                     <line x1='12' y1='12' x2='12' y2='12.01' />{' '}
                     <line x1='8' y1='12' x2='8' y2='12.01' />{' '}
                     <line x1='16' y1='12' x2='16' y2='12.01' />
                  </svg>
               </button>
            )}
            <span className='text-sm'>sms</span>
         </div>

         <div>
            <button className='contents' type='button' onClick={sendTelegram}>
               <svg
                  className='mx-auto h-8 w-8 text-slate-200'
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
                  <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
               </svg>
            </button>
            <span className='text-sm'>telegram</span>
         </div>

         <div>
            {loadingEmail ? (
               <svg
                  className='mx-auto mb-3 h-6 w-6 animate-spin text-slate-200'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
               >
                  <circle
                     className='opacity-25'
                     cx='12'
                     cy='12'
                     r='10'
                     stroke='currentColor'
                     strokeWidth='4'
                  ></circle>
                  <path
                     className='opacity-75'
                     fill='currentColor'
                     d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
               </svg>
            ) : (
               <button className='contents' type='button' onClick={sendEmail}>
                  <svg
                     className='mx-auto h-8 w-8 text-slate-200'
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
                     <rect x='3' y='5' width='18' height='14' rx='2' />{' '}
                     <polyline points='3 7 12 13 21 7' />
                  </svg>
               </button>
            )}
            <span className='text-sm'>email</span>
         </div>
      </div>
   )
}

export default PushNotification
