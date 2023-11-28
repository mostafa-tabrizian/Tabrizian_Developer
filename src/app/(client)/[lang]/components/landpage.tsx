'use client'

import langDecider from '@/lib/langDecider'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Landpage = ({ lang }: { lang: string }) => {
   const [enterEffect, setEnterEffect] = useState(0)

   useEffect(() => {
      setEnterEffect(1)
   }, [])

   return (
      <div
         id='landpage'
         className={`${langDecider(lang, '', 'rtl')} relative h-screen w-screen duration-1000`}
         style={{ opacity: enterEffect }}
      >
         <div
            style={{
               transform: `${langDecider(lang, '', 'scaleX(-1)')}`,
            }}
            className='absolute h-screen w-full'
         >
            <Image
               src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/landpage.jpg'
               alt='landpage'
               fill
               priority
               loading='eager'
               sizes='(max-width: 768px) 200vw,
            100vw'
               quality={100}
               className='-translate-x-1/2 overflow-visible object-cover object-center duration-1000 md:translate-x-0'
            />
            <span className='absolute right-0 top-0 h-2/4 w-1/3 animate-pulse bg-gradient-to-bl from-sky-200 to-transparent blur-3xl'></span>
         </div>
         <div className='mx-auto grid h-full max-w-screen-xl items-center '>
            <div>
               <div
                  style={{
                     transitionDuration: '1.5s',
                     transform: enterEffect
                        ? 'translateX(0px)'
                        : (langDecider(lang, 'translateX(-70px)', 'translateX(70px)') as string),
                     opacity: enterEffect,
                  }}
               >
                  {langDecider(
                     lang,
                     <div className='ml-10 mr-5 lg:mx-0'>
                        <h1 className='relative z-0 mx-auto w-fit text-3xl leading-tight after:absolute after:-left-6 after:top-0 after:-z-10 after:h-full after:w-16 after:bg-sky-950 lg:text-[4rem] xl:ml-40'>
                           Mostafa Tabrizian <br /> Fullstack Developer
                        </h1>
                        <h2 className='relative -ml-4 mt-5 w-fit border-l-8 border-sky-900 pl-5 text-base md:mx-auto lg:ml-40 lg:mt-10 lg:pl-5 lg:text-xl'>
                           Fullstack React/Next.js Developer
                        </h2>
                     </div>,
                     <div className='ml-5 mr-10 lg:mx-0'>
                        <h1 className='yekanBold relative z-0 mx-auto w-fit text-3xl leading-tight after:absolute after:-right-6 after:top-0 after:-z-10 after:h-full after:w-16 after:bg-sky-950 lg:text-[4rem] xl:mr-40'>
                           مصطفی تبریزیان <br /> فول استک دِولوپر
                        </h1>
                        <h2 className='verdana relative mx-auto mt-5 w-fit border-r-8 border-sky-900 pr-2 text-base lg:mt-10 lg:pr-5 lg:text-xl xl:mr-36'>
                           Fullstack React/Next.js Developer
                        </h2>
                     </div>,
                  )}
               </div>
               <Link
                  href={langDecider(lang, '/en/#about', '/fa/#about') as string}
                  className='animate-wave relative top-32 grid w-full justify-center'
                  style={{
                     animationDuration: '1s',
                     transitionDelay: '4.5s',
                     transitionDuration: '1.5s',
                     transform: enterEffect ? 'translateY(0px)' : 'translateY(50px)',
                     opacity: enterEffect,
                  }}
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
            )} top-0 hidden h-full items-center lg:grid`}
            style={{
               transitionDelay: '1.5s',
               transitionDuration: '1.5s',
               transform: enterEffect ? 'translateY(0px)' : 'translateY(-50px)',
            }}
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
