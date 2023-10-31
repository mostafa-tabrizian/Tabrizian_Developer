import langDecider from '@/lib/langDecider'
import Image from 'next/image'
import Link from 'next/link'

const Contact = ({ lang }: { lang: string }) => {
   return (
      <div
         id='contact'
         className='max-w-sreen-lg mx-auto grid h-screen items-center justify-center'
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
                  <h2 className='yekanBold mt-5 text-2xl md:text-4xl font-bold'>
                     یک اسکن تا{' '}
                     <span className='yekanBold bg-gradient-to-br font-bold from-violet-200 to-indigo-600 bg-clip-text text-transparent'>
                        بهترین شدن
                     </span>
                  </h2>
                  <span className='yekanBold'>یا</span>
               </>,
            )}
            <div className='mx-auto flex'>
               <Link href='#' className='p-3 mx-5 text-white transition-colors hover:text-violet-300 bg-slate-900 rounded-full'>
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
               </Link>
               <Link href='#' className='p-3 mx-5 text-white transition-colors hover:text-violet-300 bg-slate-900 rounded-full'>
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
               </Link>
               <Link href='#' className='p-3 mx-5 text-white transition-colors hover:text-violet-300 bg-slate-900 rounded-full'>
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
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Contact
