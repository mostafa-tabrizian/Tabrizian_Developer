'use client'

import { IClient } from '@/models/client'
import { toast } from 'react-toastify'

const PushNotification = ({ client }: { client: IClient }) => {
   const sendSMS = async () => {
      console.log('send sms')

      console.log('client', client)

      if (!client.mobileNumber) {
         toast.error('هیج شماره تماسی ثبت نشده است')
         throw new Error('no mobile number registered')
      }

      try {
         const payload = {
            name: client.name,
            mobileNumber: client.mobileNumber,
         }

         const res = await fetch('/api/--admin--/payment/sms', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         console.log('res', res)

         if (!res.ok) throw new Error()

         const resData = await res.json()

         console.log('resData', resData)

         if (resData.message === 'smsError')
            return toast.error('در ارسال کد فعال سازی خطایی رخ داد. لطفا به پشتیبانی اطلاع دهید.')
         else if (resData.status === 500) throw new Error('405')

         toast.success('پیامک با موفقیت ارسال شد')
      } catch (err) {
         toast.error('در ثبت نام شما خطایی رخ داد')
         console.error('api/admin/payment/sms err', err)
      }
   }

   return (
      <div className='mt-5'>
         <button type='button' onClick={sendSMS}>
            SMS
         </button>
      </div>
   )
}

export default PushNotification
