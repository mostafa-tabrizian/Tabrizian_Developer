'use client'

import { memo } from 'react'
import { Formik, Form } from 'formik'
import { useRouter } from 'next/navigation'
import { IPayment } from '@/models/payment'
import DescriptionInput from './descriptionInput'
import ClientInput from './clientInput'
import AmountInput from './amountInput'
import { IClient } from '@/models/client'

const DetailForm = memo(
   ({
      addingNewPayment,
      payment,
      clients,
   }: {
      addingNewPayment: boolean
      payment: IPayment
      clients: IClient[]
   }) => {
      const router = useRouter()

      const paymentClient = () => {
         if (addingNewPayment) null

         const client = clients.find((client) => client._id == payment.client)
         return client?._id
      }

      const handleSubmit = async (values: {
         client: string
         description: string
         amount: number
      }) => {
         const toast = await import('react-toastify').then((mod) => mod.toast)

         if (!values.client.length || !values.description.length || values.amount == 0)
            return toast.warning('fill the form first')

         try {
            toast.info('Submitting Data...')

            const payload = { ...values }

            const res = await fetch('/api/--admin--/payment', {
               method: 'POST',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Data Submitted Successfully.')

            router.push(`/--admin--/payments/${resData._id}`)
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      const copyPaymentLink = async () => {
         const textarea = document.createElement('textarea')
         textarea.value = `https://mostafatabrizian.ir/fa/payment/${payment._id}`
         document.body.appendChild(textarea)
         textarea.select()
         document.execCommand('copy')
         document.body.removeChild(textarea)

         const toast = await import('react-toastify').then((mod) => mod.toast)
         toast.info('Link copied to clipboard!')
      }

      return (
         <Formik
            initialValues={{
               client: addingNewPayment ? '' : (paymentClient() as string),
               description: addingNewPayment ? '' : payment.description,
               amount: addingNewPayment ? 0 : payment.amount,
            }}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
               <Form className='mt-6 grid grid-cols-3 gap-5 '>
                  <div className='col-span-2 space-y-5'>
                     <ClientInput
                        clients={JSON.parse(JSON.stringify(clients))}
                        addingNewPayment={addingNewPayment}
                        value={values.client}
                        setFieldValue={setFieldValue}
                        error={errors.client}
                        touch={touched.client}
                     />

                     <DescriptionInput
                        addingNewPayment={addingNewPayment}
                        value={values.description}
                        setFieldValue={setFieldValue}
                        error={errors.description}
                        touch={touched.description}
                     />

                     <AmountInput
                        addingNewPayment={addingNewPayment}
                        value={values.amount}
                        setFieldValue={setFieldValue}
                        error={errors.amount}
                        touch={touched.amount}
                     />

                     {addingNewPayment ? (
                        ''
                     ) : (
                        <>
                           <div className='space-y-1'>
                              <label htmlFor='cardNumber'>
                                 <span className='text-slate-400'>Card Number</span>
                              </label>
                              <input
                                 name='cardNumber'
                                 readOnly
                                 disabled
                                 value={payment.cardNumber || 'Card number is not available yet'}
                                 className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'
                                 type='text'
                              />
                           </div>

                           <div className='space-y-1'>
                              <label htmlFor='cardNumber'>
                                 <span className='text-slate-400'>Reference Id (شماره رهگیری)</span>
                              </label>
                              <input
                                 name='cardNumber'
                                 readOnly
                                 disabled
                                 value={payment.refId || 'Refrence id is not available yet'}
                                 className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'
                                 type='text'
                              />
                           </div>

                           <div className='space-y-1'>
                              <label htmlFor='cardNumber'>
                                 <span className='text-slate-400'>Payment Date</span>
                              </label>
                              <input
                                 name='cardNumber'
                                 readOnly
                                 disabled
                                 value={
                                    String(payment.updatedAt) || 'Pay date is not available yet'
                                 }
                                 className='mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'
                                 type='text'
                              />
                           </div>

                           <div className='flex items-center gap-10'>
                              <label>
                                 <span className=' text-slate-400'>Paid</span>
                              </label>

                              {payment.paid ? (
                                 <svg
                                    className='h-10 w-10 text-green-700'
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
                                    <circle cx='12' cy='12' r='9' /> <path d='M9 12l2 2l4 -4' />
                                 </svg>
                              ) : (
                                 <svg
                                    className='h-10 w-10 text-rose-500'
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
                                    <circle cx='12' cy='12' r='9' />{' '}
                                    <path d='M10 10l4 4m0 -4l-4 4' />
                                 </svg>
                              )}
                           </div>
                        </>
                     )}

                     {addingNewPayment ? (
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
                     ) : (
                        <button
                           type='button'
                           onClick={copyPaymentLink}
                           className='w-full rounded-lg border-2 border-blue-400 py-2 text-base hover:shadow-md hover:shadow-blue-400/40'
                        >
                           Copy Link
                        </button>
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
