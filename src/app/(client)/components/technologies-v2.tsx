'use client'

import Image from 'next/image'
import { FaCode } from 'react-icons/fa6'
import { useInView } from 'react-intersection-observer'

const TechnologiesV2 = () => {
   const { ref: hit1st, inView: hit1stInView } = useInView()
   const { ref: hit2nd, inView: hit2ndInView } = useInView()
   const { ref: hit3rd, inView: hit3rdInView } = useInView()

   return (
      <div id='technologies' className='relative mx-auto mt-20 grid items-center '>
         <div className=''>
            <div
               className={`
                  ${hit1stInView ? 'after:max-h-full' : 'after:max-h-0'}
                  pr-7 after:absolute after:right-0 after:top-14 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-blue-500 after:to-transparent
                  after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
               `}
            >
               <span className='absolute -right-4 top-0 h-8 w-8 bg-blue-400 blur-xl' />
               <FaCode className='absolute -right-3 top-0 h-8 w-8 text-slate-200' />

               <h2 className='yekan relative text-lg md:text-2xl'>تکنولوژی و فریم ورک ها</h2>
               <h3 ref={hit1st} className='yekanBold relative mt-5 text-2xl md:text-4xl'>
                  <span className='mb-4 block text-blue-500'>به وب مدرن خوش آمدید</span> تجربه ای
                  سریع و قدرتمند با تکنولوژی های نوین
               </h3>
            </div>
         </div>
         <div className='my-10 flex space-x-5 space-x-reverse md:space-x-10 md:space-x-reverse'>
            <div
               className={`
                  ${hit2ndInView ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}
                  h-20 w-20 text-center transition-all delay-100 duration-300 ease-in-out md:h-24 md:w-24
               `}
            >
               <Image
                  className='mb-1 rounded-3xl p-2 shadow-lg shadow-blue-400/30'
                  style={{
                     border: '2px solid #5FDAFB',
                  }}
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/react.jpg'
                  alt='React'
                  width={105}
                  height={105}
               />
               <span className='yekan text-sm'>ری‌اکت</span>
            </div>
            <div
               className={`
                  ${hit2ndInView ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}
                  h-20 w-20 text-center transition-all delay-150 duration-300 ease-in-out md:h-24 md:w-24
               `}
            >
               <Image
                  className='mb-1 rounded-[1.75rem] shadow-lg shadow-violet-500/30'
                  style={{
                     border: '2px solid violet',
                  }}
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/next2.jpg'
                  alt='Next.js'
                  width={105}
                  height={105}
               />
               <span className='yekan text-sm'>نکست</span>
            </div>
            <div
               className={`
                  ${hit2ndInView ? ' translate-x-0 opacity-100' : ' translate-x-10 opacity-0'}
                  h-20 w-20 text-center transition-all delay-200 duration-300 ease-in-out md:h-24 md:w-24
               `}
            >
               <Image
                  className='mb-1 rounded-3xl border-2 border-blue-500 shadow-lg shadow-yellow-400/30'
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/python.jpg'
                  alt='Python'
                  width={105}
                  height={105}
               />
               <span className='yekan text-sm'>پایتون</span>
            </div>
         </div>
         <div ref={hit2nd} className=''>
            <div
               className={`
                  ${hit3rdInView ? 'after:max-h-full' : 'after:max-h-0'}
                  pr-7 after:absolute after:right-0 after:top-0 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-transparent after:to-blue-500
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
                  با تکنولوژی های مورد استفاده شده در کمپانی های بسیار بزرگ داخلی و خارجی مانند:{' '}
                  <span className='text-white'>
                     دیجیکالا، دیوار، اسنپ، اینستاگرام، متا، نت فلیکس، پی‌پال، BBC و Airbnb
                  </span>{' '}
                  که نشان دهنده بر قدرت و رضایت از این تکنولوژی ها است.
               </h2>
               <div
                  ref={hit3rd}
                  className={`
                  ${hit3rdInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}
                  mt-10 space-y-5 transition-all delay-700 duration-300 ease-in-out md:mt-20 md:space-y-10
               `}
               >
                  <span className='yekan inline-block rounded-full border border-blue-500 px-2 py-1 text-xs text-blue-500'>
                     آیا می‌دانستید؟
                  </span>
                  <h3 className='yekan text-4xl text-blue-500'>۳۳٪ سرعت بیشتر</h3>
                  <p className='yekan md:w-1/2'>
                     با ترکیب تکنولوژی های CSR و SSR، سرعت نمایش و عملکرد سایت افزایش بسیاری میکند
                     که باعث تجربه فوق العاده برای خریدار در کسب و کار شما و SEO تکنیکال قدرتمند
                     می‌شود.
                  </p>
               </div>
            </div>
         </div>
         <span
            className='absolute -right-2/4 -top-0 -z-10 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #002c7461 0%, transparent)',
            }}
         />
      </div>
   )
}

export default TechnologiesV2
