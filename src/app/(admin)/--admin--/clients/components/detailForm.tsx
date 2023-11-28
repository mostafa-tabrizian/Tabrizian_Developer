'use client'

import { memo } from 'react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/navigation'
import { IClient } from '@/models/client'
import NameInput from './nameInput'
import MobileNumberInput from './mobileNumberInput'
import EmailInput from './emailInput'
import TelegramIdInput from './telegramId'
import ActiveInput from './activeInput'
import PaymentDateInput from './paymentDateInput'
import PriceInput from './priceInput'
import DomainInput from './domainInput'
import PushNotification from './pushNotification'

const DetailForm = memo(
   ({ addingNewClient, client }: { addingNewClient: boolean; client: IClient }) => {
      const router = useRouter()

      const handleSubmit = async (values: {
         name: string
         price: number
         domain: string
         mobileNumber: string
         email: string
         telegramId: string
         active: boolean
         paymentDay: number
         paymentMonth: number
      }) => {
         const toast = await import('react-toastify').then((mod) => mod.toast)

         try {
            toast.info('Submitting Data...')

            const payload = { _id: client?._id, ...values }

            const res = await fetch('/api/--admin--/client', {
               method: addingNewClient ? 'POST' : 'PATCH',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Data Submitted Successfully.')

            router.push(`/--admin--/clients/${resData._id}`)
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      return (
         <Formik
            initialValues={{
               name: addingNewClient ? '' : client.name,
               price: addingNewClient ? 0 : client.price,
               domain: addingNewClient ? '' : client.domain,
               mobileNumber: addingNewClient ? '' : client.mobileNumber,
               email: addingNewClient ? '' : client.email,
               telegramId: addingNewClient ? '' : client.telegramId,
               active: addingNewClient ? false : client.active,
               paymentDay: addingNewClient ? 1 : client.paymentDate.day,
               paymentMonth: addingNewClient ? 0 : client.paymentDate.month,
            }}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
               <Form className='mt-6 grid grid-cols-3 gap-5 '>
                  <div className='col-span-2 space-y-5'>
                     <NameInput
                        value={values.name}
                        setFieldValue={setFieldValue}
                        error={errors.name}
                        touch={touched.name}
                     />
                     <PriceInput
                        value={values.price}
                        setFieldValue={setFieldValue}
                        error={errors.price}
                        touch={touched.price}
                     />
                     <DomainInput
                        value={values.domain}
                        setFieldValue={setFieldValue}
                        error={errors.domain}
                        touch={touched.domain}
                     />
                     <MobileNumberInput
                        value={values.mobileNumber}
                        setFieldValue={setFieldValue}
                        error={errors.mobileNumber}
                        touch={touched.mobileNumber}
                     />
                     <EmailInput
                        value={values.email}
                        setFieldValue={setFieldValue}
                        error={errors.email}
                        touch={touched.email}
                     />
                     <TelegramIdInput
                        value={values.telegramId}
                        setFieldValue={setFieldValue}
                        error={errors.telegramId}
                        touch={touched.telegramId}
                     />

                     <ActiveInput
                        value={values.active}
                        setFieldValue={setFieldValue}
                        error={errors.active}
                        touch={touched.active}
                     />

                     <PaymentDateInput
                        monthValue={values.paymentMonth}
                        dayValue={values.paymentDay}
                        setFieldValue={setFieldValue}
                     />

                     <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full rounded-lg border-2 border-green-600 py-2 text-base hover:shadow-md hover:shadow-green-600/40'
                     >
                        {isSubmitting ? (
                           <svg
                              className='mx-auto h-6 w-6 animate-spin text-green-600'
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
                           'Submit'
                        )}
                     </button>

                     {client ? (
                        <PushNotification client={JSON.parse(JSON.stringify(client))} />
                     ) : (
                        ''
                     )}
                  </div>
               </Form>
            )}
         </Formik>
      )
   },
)

DetailForm.displayName = 'DetailForm'

export default DetailForm
