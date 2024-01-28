'use client'

import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import { mobileNumberValidation } from '@/formik/schema/validation'

const ContactForm = ({ cls }: { cls: string }) => {
   const handleSubmit = async (
      values: {
         mobileNumber: string
      },
      resetForm: () => void,
   ) => {
      const res = await axios.post('api/client/interested-client', {
         mobileNumber: values.mobileNumber,
      })

      const resStatus = res.data.status
      const resMessage = res.data.message

      const toast = await import('react-toastify').then((mod) => mod.toast)

      if (resStatus == 1) {
         toast.success(
            'از اعتماد شما سپاس گذاریم 🙏🏻 \n تیم پشتیبان در اولین فرصت با شما تماس خواهد گرفت.',
         )
      } else if (resStatus == 1000) {
         toast.warn('شماره‌ی شما از قبل در سامانه ثبت شده است. به زودی با شما تماس خواهیم گرفت.')
         resetForm()
      } else {
         console.error('post client number: ', resMessage)
         toast.error('در ثبت شماره تماس شما خطایی رخ داد. لطفا مجددا تلاش کنید.')
      }
   }

   return (
      <Formik
         initialValues={{ mobileNumber: '' }}
         validationSchema={mobileNumberValidation}
         onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
         {({ isSubmitting, errors, touched }) => (
            <Form className='yekan mt-5 flex'>
               <div className='relative w-full'>
                  <Field
                     type='text'
                     id='mobileNumber'
                     name='mobileNumber'
                     className={`
                        ${
                           errors.mobileNumber && touched.mobileNumber
                              ? 'border-2 border-red-500'
                              : ''
                        }
                        h-11 w-full rounded-r-lg pr-5 text-base text-black outline-none placeholder:text-sm
                     `}
                     placeholder='لطفا شماره تماس خود را وارد کنید...'
                  />
               </div>

               <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`${cls} yekan w-24 rounded-l-lg bg-slate-900 px-2 text-base shadow-lg transition-all hover:scale-105 md:w-40`}
               >
                  {isSubmitting ? (
                     <svg
                        className='mx-auto h-6 w-6 animate-spin text-white'
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
                     'ثبت'
                  )}
               </button>
            </Form>
         )}
      </Formik>
   )
}

export default ContactForm
