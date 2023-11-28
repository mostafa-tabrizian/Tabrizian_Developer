'use client'

import { useState } from 'react'
import { Form, Formik } from 'formik'
import { toast } from 'react-toastify'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { IBlog } from '@/models/blog'
import Drawer from '@mui/material/Drawer'
import DateFormat from '@/lib/dateFormat'
import { useRouter } from 'next/navigation'
import { comment } from '@/formik/schema/validation'
import FormikTextarea from '@/formik/textarea'
import FormikInput from '@/formik/input'

const DrawerComments = ({
   panel,
   setPanel,
   blogId,
   userIP,
   comments,
}: {
   panel: boolean
   setPanel: React.Dispatch<React.SetStateAction<boolean>>
   blogId: string
   userIP: string
   comments: IBlog['comments']
}) => {
   const router = useRouter()

   const [reply, setReply] = useState<IBlog['comments'][0] | null>(null)

   const { executeRecaptcha } = useGoogleReCaptcha()

   const handleSubmit = async (
      values: {
         username: string
         body: string
      },
      // @ts-ignore
      { resetForm },
   ) => {
      try {
         if (!executeRecaptcha) return console.error('!executeRecaptcha')

         const gReCaptchaToken = await executeRecaptcha('commentFormSubmit').then(
            (gReCaptchaToken: string) => gReCaptchaToken,
         )

         const payload = {
            type: reply ? 'reply' : 'comment',
            blogId,
            commentId: reply ? reply._id : null,
            userIP,
            gReCaptchaToken,
            ...values,
         }

         const res = await fetch('/api/client/blog/comment', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         if (!res.ok) throw new Error()

         const resData = await res.json()

         if (resData?.message == 'recaptcha fail')
            return toast.error('فعالیت شما مشکوک به ربات است')
         else if (resData?.status == 403) return toast.error('در ثبت اطلاعات شما خطایی رخ داد!')
         else if (resData?.status == 500) return toast.error('در ثبت دیدگاه خطایی رخ داد')

         setPanel(false)
         resetForm()
         toast.success('💜 ممنونم که کامنت گذاشتید')
         toast.success('بعد از تایید نهایی، کامنت به نمایش گذاشته میشود')
         router.refresh()
      } catch (err) {
         toast.error('در ثبت کامنت خطایی رخ داد!')
         console.error(err)
      }
   }

   const toggleDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
         event.type === 'keydown' &&
         ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
      ) {
         return
      }

      setPanel(false)
   }

   return (
      <Drawer anchor='bottom' open={panel} onClose={toggleDrawer()}>
         <div className='styled-scrollbars z-20 mx-auto max-w-screen-sm overflow-y-scroll bg-[#0c0f16] pb-5 transition-all md:h-[80vh] md:rounded-xl'>
            <div className='rtl m-6'>
               <div className='mb-10 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                     <p className='yekanBold text-sm text-slate-400'>
                        {reply ? `پاسخ شما به ${reply.username}` : 'دیدگاه شما در مورد این بلاگ'}
                     </p>
                     {reply ? (
                        <button
                           onClick={() => setReply(null)}
                           className='flex items-center rounded-full bg-slate-700 px-3 py-0.5'
                        >
                           <span className='yekan text-xs text-slate-200'>لغو پاسخ</span>
                        </button>
                     ) : (
                        ''
                     )}
                  </div>
                  <button type='button' onClick={() => setPanel(false)}>
                     <svg
                        stroke='currentColor'
                        fill='none'
                        strokeWidth='0'
                        viewBox='0 0 24 24'
                        className='text-slate-500'
                        height='20'
                        width='20'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           d='M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z'
                           fill='currentColor'
                        ></path>
                     </svg>
                  </button>
               </div>

               <Formik
                  initialValues={{
                     username: '',
                     body: '',
                  }}
                  onSubmit={handleSubmit}
                  validationSchema={comment}
               >
                  {({ isSubmitting }) => (
                     <Form className='space-y-6'>
                        <FormikInput
                           placeholder='نام و نام خانوادگی'
                           name='username'
                           type='text'
                           label={undefined}
                        />

                        <FormikTextarea
                           placeholder={
                              reply ? 'پاسختون رو اینجا بنویسید' : 'دیدگاهتون رو اینجا بنویسید'
                           }
                           name='body'
                           label={undefined}
                        />

                        <button
                           type='submit'
                           disabled={isSubmitting}
                           className='flex w-full items-center justify-center rounded-lg bg-indigo-500 py-2'
                        >
                           {isSubmitting ? (
                              <svg
                                 className='h-7 w-7 animate-spin py-1 text-white'
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
                              <span className='yekanBold text-base'>
                                 {reply ? 'ثبت پاسخ' : 'ثبت دیدگاه'}
                              </span>
                           )}
                        </button>
                     </Form>
                  )}
               </Formik>
            </div>

            <hr className='mx-10 my-10 border-slate-600' />

            <h2 className='yekanBold my-5 text-center text-slate-200'>دیدگاه دیگران</h2>

            {comments.length ? (
               comments.map((comment) => {
                  return (
                     <div key={comment._id}>
                        <div className='rtl m-5 mx-6 rounded-lg bg-slate-800 p-4'>
                           <div className='mb-3 flex items-center justify-between'>
                              <div className='flex items-center gap-3'>
                                 <div className='aspect-square h-7 w-7 rounded-full bg-slate-200'></div>
                                 <div className='flex w-full flex-wrap items-center gap-x-5'>
                                    <span className='yekanBold text-base font-bold text-slate-200'>
                                       {comment.username}
                                    </span>
                                    <span className='yekan text-sm text-slate-400'>
                                       {DateFormat(comment.createdAt)}
                                    </span>
                                 </div>
                              </div>

                              <button
                                 onClick={() => setReply(comment)}
                                 className='yekan flex items-center gap-x-1 rounded-lg bg-slate-600 px-2 py-1 text-slate-200'
                                 type='button'
                              >
                                 <span className='ml-1'>
                                    <svg
                                       stroke='currentColor'
                                       fill='currentColor'
                                       strokeWidth='0'
                                       viewBox='0 0 20 20'
                                       height='1em'
                                       width='1em'
                                       xmlns='http://www.w3.org/2000/svg'
                                    >
                                       <path
                                          fillRule='evenodd'
                                          d='M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                          clipRule='evenodd'
                                       ></path>
                                    </svg>
                                 </span>
                                 <span className='text-sm font-normal text-inherit'>پاسخ</span>
                              </button>
                           </div>
                           <p className='yekan text-base font-normal leading-loose text-gray-300 lg:text-base lg:leading-8'>
                              {comment.body}
                           </p>
                        </div>
                        {comment.replys.map((reply, idx) => {
                           return (
                              <div key={reply._id}>
                                 <div className='rtl my-2 mr-7 flex'>
                                    <div className=' min-w-[1rem]'>
                                       {idx == 0 ? (
                                          <svg
                                             className='h-5 w-5 text-gray-500'
                                             viewBox='0 0 24 24'
                                             fill='none'
                                             stroke='currentColor'
                                             strokeWidth='2'
                                             strokeLinecap='round'
                                             strokeLinejoin='round'
                                          >
                                             {' '}
                                             <polyline points='9 10 4 15 9 20' />{' '}
                                             <path d='M20 4v7a4 4 0 0 1-4 4H4' />
                                          </svg>
                                       ) : (
                                          ''
                                       )}
                                    </div>
                                    <div className='mx-6 w-full rounded-lg bg-slate-800 p-4'>
                                       <div>
                                          <div className='mb-3 flex  items-center gap-3'>
                                             <div className='aspect-square h-7 w-7 rounded-full bg-slate-200'></div>
                                             <div className='flex w-full items-center gap-5'>
                                                <span className='yekanBold  text-base font-bold text-slate-200'>
                                                   {reply.username}
                                                </span>
                                                <span className='yekan text-sm text-slate-400'>
                                                   {DateFormat(reply.createdAt)}
                                                </span>
                                             </div>
                                          </div>
                                          <p className='yekan text-base font-normal leading-loose text-gray-300 lg:text-base lg:leading-8'>
                                             {reply.body}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        })}
                     </div>
                  )
               })
            ) : (
               <span className='yekan rtl mt-32 block items-center text-center text-base text-slate-200'>
                  هیچ دیدگاهی تا الان ثبت نشده. <br /> تو میتونی اولین باشی!
               </span>
            )}
         </div>
      </Drawer>
   )
}

export default DrawerComments
