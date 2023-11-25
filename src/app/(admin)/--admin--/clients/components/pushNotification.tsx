'use client'

import { IClient } from '@/models/client'
import { toast } from 'react-toastify'

const PushNotification = ({ client }: { client: IClient }) => {
   const sendSMS = async () => {
      if (!client.mobileNumber) {
         toast.error('هیج شماره تماسی ثبت نشده است')
         throw new Error('no mobile number registered')
      }

      try {
         const payload = {
            name: client.name,
            mobile: client.mobileNumber,
            domain: client.domain,
            clientId: client._id
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
      }
   }

   const sendTelegram = async () => {
      if (!client.telegramId) {
         toast.error('هیج آیدی تلگرامی ثبت نشده است')
         throw new Error('no telegram id registered')
      }

      try {
         const payload = {
            telegramId: client.telegramId,
            name: client.name,
            domain: client.domain,
            clientId: client._id,
         }

         const res = await fetch('/api/--admin--/client/notification/telegram', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         if (!res.ok) throw new Error()

         const resData = await res.json()

         if (resData.message === 'telegramError')
            return toast.error('در ارسال خطایی رخ داد. لطفا به پشتیبانی اطلاع دهید.')
         else if (resData.status === 500) throw new Error('resData.status.500', resData)

         toast.success('پیام تلگرام با موفقیت ارسال شد')
      } catch (err) {
         toast.error('در ارسال پیام تلگرام خطایی رخ داد')
         console.error('api/admin/client/notification/telegram err', err)
      }
   }

   const sendEmail = async () => {
      if (!client.email) {
         toast.error('هیج ایمیلی ثبت نشده است')
         throw new Error('no email id registered')
      }

      try {
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
      }
   }

   return (
      <div className='mt-5 space-x-10'>
         <button type='button' onClick={sendSMS}>
            SMS
         </button>
         <button type='button' onClick={sendTelegram}>
            Telegram
         </button>
         <button type='button' onClick={sendEmail}>
            Email
         </button>
      </div>
   )
}

export default PushNotification
