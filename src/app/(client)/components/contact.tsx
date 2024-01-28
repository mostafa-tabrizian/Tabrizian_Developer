import langDecider from '@/utils/langDecider'
import Image from 'next/image'

const Contact = ({ lang }: { lang: string }) => {
   return (
      <div
         id='contact'
         className='max-w-sreen-lg mx-auto mt-60 grid min-h-screen items-center justify-center'
      >
         <div className='grid justify-center space-y-5 text-center'>
            <div
               className='mx-auto grid items-center justify-center rounded-3xl bg-violet-200'
               style={{ width: '263px', height: '263px' }}
            >
               <Image
                  className='mix-blend-darken'
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/QRcode.jpg'
                  width={242}
                  height={242}
                  alt='qr code'
               />
            </div>
            {langDecider(
               lang,
               <>
                  <h2 className='verdna mt-5 text-4xl font-bold'>
                     Scan To Become{' '}
                     <span className='Audiowide bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-transparent'>
                        Perfect
                     </span>
                  </h2>
                  <span>or</span>
               </>,
               <>
                  <h2 className='yekanBold mt-5 text-2xl font-bold md:text-4xl'>
                     یک اسکن تا{' '}
                     <span className='yekanBold bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text font-bold text-transparent'>
                        بهترین شدن
                     </span>
                  </h2>
                  <span className='yekanBold'>یا</span>
               </>,
            )}
            <div className='mx-auto flex'>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://t.me/Tabrizian_dev'
                  className='mx-3 rounded-full bg-slate-900 p-3 text-white transition-colors hover:text-violet-300'
               >
                  <svg
                     className='h-8 w-8'
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
               </a>
               <a href='mailto:tabrizian.codes@gmail.com' target='_blank' className='mx-3 rounded-full bg-slate-900 p-3 text-white transition-colors hover:text-violet-300'
                  rel='noreferrer'>
                  <svg
                     className='h-8 w-8'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                     />
                  </svg>
               </a>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/mostafa-tabrizian'
                  className='mx-3 rounded-full bg-slate-900 p-3 text-white transition-colors hover:text-violet-300'
               >
                  <svg
                     className='h-8 w-8'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />{' '}
                     <rect x='2' y='9' width='4' height='12' /> <circle cx='4' cy='4' r='2' />
                  </svg>
               </a>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/mostafa-tabrizian'
                  className='mx-3 rounded-full bg-slate-900 p-3 text-white transition-colors hover:text-violet-300'
               >
                  <svg
                     className='h-8 w-8'
                     viewBox='0 0 24 24'
                     fill='none'
                     stroke='currentColor'
                     strokeWidth='2'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                  </svg>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Contact
