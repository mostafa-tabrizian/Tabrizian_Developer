'use client'

import Image from 'next/image'
import { IoLockClosedOutline } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer'

const SafePayment = () => {
   const { ref: hit1st, inView: hit1stInView } = useInView()
   const { ref: hit2nd, inView: hit2ndInView } = useInView()
   const { ref: hit3rd, inView: hit3rdInView } = useInView()

   return (
      <div id='about' className='relative mx-auto mt-20 grid h-full items-center duration-1000 '>
         <div className='relative'>
            <div
               className={`
                  ${hit1stInView ? 'after:max-h-full' : 'after:max-h-0'}
                  pr-7 after:absolute after:right-0 after:top-14 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-teal-500 after:to-transparent
                  after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
               `}
            >
               <span className='absolute -right-4 top-0 h-8 w-8 bg-teal-400 blur-xl' />
               <IoLockClosedOutline className='absolute -right-3 top-0 h-7 w-7 text-slate-200' />

               <h2 className='yekan relative text-lg md:text-2xl'>پرداخت امن</h2>
               <h3 ref={hit1st} className='yekanBold relative mt-5 text-2xl md:text-4xl'>
                  <span className='mb-4 block text-teal-400'>با درگاه رسمی شاپرک</span> با خیال راحت
                  هزینه‌ی سفارشات را دریافت کنید.
               </h3>
            </div>
         </div>
         <div
            className={`
                  ${hit2ndInView ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}
                  relative my-5 h-[300px] w-full transition-all delay-100
                  duration-300 ease-in-out md:h-[600px] md:w-3/4
               `}
         >
            <Image
               className='h-auto w-auto rounded-lg object-contain object-right p-1'
               src={
                  'https://tabrizian.storage.iran.liara.space/tabrizian_codes/gateway-example.jpg'
               }
               alt={'gateway example'}
               fill
               loading='eager'
               sizes='(max-width: 768px) 100vw'
            />
         </div>
         <div ref={hit2nd} className='relative'>
            <div
               className={`
               ${hit3rdInView ? 'after:max-h-full' : 'after:max-h-0'}
               pr-7 after:absolute after:right-0 after:top-0 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-transparent after:to-teal-500
               after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
            `}
            >
               <h2
                  className={`
                     ${hit3rdInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}
                     yekan relative mt-5 text-lg text-gray-400
                     transition-all delay-300 duration-300 ease-in-out md:w-1/2
                  `}
               >
                  با درگاه پرداخت شاپرک، دیگر نگران{' '}
                  <span className='text-white'>فیش جعلی و مذاکره مجدد قیمت</span> نباشید و تا{' '}
                  <span ref={hit3rd} className='text-white'>
                     ۱۱ درگاه پرداخت
                  </span>{' '}
                  دریافت کنید
               </h2>
            </div>
         </div>

         <span
            className='absolute -right-2/4 -top-0 -z-10 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #006e744a 0%, transparent)',
            }}
         />
      </div>
   )
}

export default SafePayment
