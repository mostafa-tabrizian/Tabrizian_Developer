'use client'

import Image from 'next/image'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
import { MdAutoGraph } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'

const AboutProduct = () => {
   const { ref: linerRef, inView: linerInView } = useInView()
   const { ref: liner2ndRef, inView: liner2ndInView } = useInView()

   const { ref: imageRef, inView: imageInView } = useInView()

   return (
      <div id='about' className='relative mx-auto mt-12 grid h-full items-center duration-1000 '>
         <div className='relative'>
            <div
               className={`
                     ${linerInView ? 'after:max-h-full' : 'after:max-h-0'}
                     pr-7 after:absolute after:right-0 after:top-14
                     after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-violet-500 
                     after:to-green-500 after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
                  `}
            >
               <span className='absolute -right-4 top-0 h-8 w-8 bg-violet-400 blur-xl' />
               <MdAutoGraph className='absolute -right-4 top-0 h-8 w-8 text-slate-200' />

               <h2 className='yekan relative text-lg md:text-2xl'>فروش بیشتر</h2>
               <h3 ref={linerRef} className='yekanBold relative mt-5 text-2xl md:text-4xl'>
                  <span className='mb-4 block text-green-600'>با اتوماسیون، آمار و هوش‌مصنوعی</span>{' '}
                  فروش و پیشرفت خودتون رو موشکی کنید
               </h3>
            </div>
         </div>
         <div
            className={`
                  relative my-5 -mr-3 aspect-video w-full mix-blend-lighten transition-all delay-100 duration-300 ease-in-out md:my-10 md:w-3/4
                  ${imageInView ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}
               `}
         >
            <Image
               className='rounded-lg'
               src={
                  'https://tabrizian.storage.iran.liara.space/tabrizian_codes/dashboard-example.jpg'
               }
               alt={'dashboard example'}
               fill
               sizes='(max-width: 768px) 100vw'
               loading='eager'
            />
         </div>
         <div ref={imageRef} className='relative md:w-1/2'>
            <div
               className={`
                  ${liner2ndInView ? 'after:max-h-full' : 'after:max-h-0'}
                     pr-7 after:absolute after:right-0 after:top-0
                     after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-green-500 after:to-transparent
                     after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
                  `}
            >
               <h2
                  className={`
                        ${liner2ndInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}
                        yekan relative mt-5 text-lg text-gray-400
                        transition-all delay-300 duration-300 ease-in-out
                     `}
               >
                  با سیستم مدیریت محصولات، صدور فاکتور و دریافت سفارشات به صورت خودکار{' '}
                  <span className='text-white'>۸۸٪ زمان خود را آزاد</span> می‌کنید و میتوانید به
                  توسعه استارت‌آپ خود فکر کنید
               </h2>
               <div
                  ref={liner2ndRef}
                  className={`
                        ${liner2ndInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}
                        mt-10 space-y-5 transition-all delay-700 duration-300 ease-in-out md:mt-20 md:space-y-10
                     `}
               >
                  <span className='yekan inline-block rounded-full border border-green-500 px-2 py-1 text-xs text-green-500'>
                     آیا می‌دانستید؟
                  </span>
                  <h3 className='yekan text-4xl text-green-500'>۷۱٪ فروش بیشتر</h3>
                  <p className='yekan'>
                     در کسب و کار های دارای سیستم خودکار ثبت سفارش و پیشنهاد محصولات با قدرت هوش
                     مصنوعی
                  </p>
               </div>
            </div>
         </div>
      <span
         className='absolute -left-2/4 -top-0 -z-10 rounded-full'
         style={{
            width: '1092px',
            height: '1092px',
            background: 'radial-gradient(48% 53% at 46% 48%, #00800038 0%, transparent)',
         }}
      />
      </div>
   )
}

export default AboutProduct
