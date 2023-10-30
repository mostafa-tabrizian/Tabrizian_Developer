'use client'

import langDecider from '@/lib/langDecider'
import Image from 'next/image'
import Link from 'next/link'

const Landpage = ({ lang }: { lang: string }) => {
   return (
      <div id='landpage' className={`${langDecider(lang, '', 'rtl')} relative h-screen w-screen`}>
         <Image
            src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/landpage.jpg'
            alt='landpage'
            fill
            className='object-cover object-center'
            style={{ transform: `${langDecider(lang, '', 'scaleX(-1)')}` }}
         />
         <div className='mx-auto grid h-full max-w-screen-lg items-center'>
            <div className='space-y-10'>
               {langDecider(
                  lang,
                  <>
                     <h1
                        style={{ fontSize: '4rem' }}
                        className='relative z-0 leading-tight after:absolute after:-left-6 after:top-0 after:-z-10 after:h-full after:w-16 after:bg-sky-950'
                     >
                        Dive Deep For The <br /> Treasure That <br /> You Seek
                     </h1>
                     <h2 className='relative -ml-6 border-l-8 border-sky-900 pl-5'>
                        Explore the World of Web Development with Me
                     </h2>
                  </>,
                  <>
                     <h1
                        style={{ fontSize: '4rem' }}
                        className={`yekanBold relative z-0 leading-tight after:absolute ${langDecider(
                           lang,
                           'after:-left-6',
                           'after:-right-6',
                        )} after:top-0 after:-z-10 after:h-full after:w-16 after:bg-sky-950`}
                     >
                        اگر به دنبال گنجی <br /> به اعماق سفر کن
                     </h1>
                     <h2
                        className={`yekanBold relative ${langDecider(
                           lang,
                           '-ml-6 border-l-8  pl-5',
                           '-mr-6 border-r-8  pr-5',
                        )} border-sky-900`}
                     >
                        دنیای توسعه وب را با من کشف کن
                     </h2>
                  </>,
               )}
               <Link
                  href='/#about'
                  className='animate-wave grid w-full justify-center'
                  style={{ animationDuration: '1s' }}
               >
                  <svg
                     className='h-10 w-10 text-sky-700'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                     />
                  </svg>
               </Link>
            </div>
         </div>

         <div
            className={`absolute ${langDecider(
               lang,
               'left-20',
               'right-20',
            )} top-0 grid h-full items-center`}
         >
            <div className='grid w-10 space-y-2 border-t-8 border-sky-900 pt-2'>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
            </div>
         </div>
      </div>
   )
}

export default Landpage
