'use client'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import Link from 'next/link'
import { PiPackage } from 'react-icons/pi'
// import { useState, useEffect } from 'react'
import VIPServices from './vip-services'
import ProfessionServices from './profession-services'
import StartUpServices from './startup-services'
import { useInView } from 'react-intersection-observer'

const Packages = () => {
   const { ref: hit1st, inView: hit1stInView } = useInView()

   const [sliderRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slides: {
         perView: 1.07,
         spacing: 10,
      },
      breakpoints: {
         '(min-width: 768px)': {
            slides: {
               perView: 3,
               spacing: 30,
            },
         },
      },
      rtl: true,
      loop: false,
   })

   return (
      <div id='packages' className='relative z-10 mt-20 duration-1000'>
         <div className='mx-auto grid h-full items-center '>
            <div className='relative'>
               <div
                  className={`
                  ${hit1stInView ? 'after:max-h-full' : 'after:max-h-0'}
                  pr-7 after:absolute after:right-0 after:top-14 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-orange-500 after:to-red-500
                  after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
               `}
               >
                  <span className='absolute -right-4 top-0 h-8 w-8 bg-orange-400 blur-xl' />
                  <PiPackage className='absolute -right-4 top-0 h-8 w-8 text-slate-200' />

                  <h2 className='yekan relative text-lg md:text-2xl'>پکیج های فروشگاهی</h2>
                  <h3 ref={hit1st} className='yekanBold relative mt-5 text-2xl md:text-4xl'>
                     <span className='mb-4 block text-orange-500'>استارت‌آپ، حرفه ای و VIP</span>
                     فروشگاهی مناسب کسب و کار شما
                  </h3>
               </div>
            </div>
            <div
               ref={sliderRef}
               className={`
                  keen-slider my-10 h-full py-12
               `}
            >
               <div className='keen-slider__slide relative block rounded-3xl border border-slate-700 bg-slate-900 px-4 pb-3 pt-10'>
                  <div className='space-y-5'>
                     <Image
                        src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/green_gem.png'
                        width={46}
                        height={94}
                        alt='diamond'
                        loading='eager'
                        className={'animate-wave absolute left-10 top-5 h-auto w-auto'}
                        style={{
                           filter: 'drop-shadow(0px 5px 10px #255123)',
                           animationDuration: '3s',
                        }}
                     />
                     <div className='relative z-10'>
                        <h3 className='yekanBold'>پلن استارآپ</h3>
                     </div>
                     <StartUpServices />
                     <div>
                        <div className='mt-8 text-center'>
                           <Link
                              href='/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین رو میخوام
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='keen-slider__slide relative block rounded-3xl border border-slate-700 bg-gradient-to-b from-indigo-950 to-[#0C0F16] px-4 pb-3 pt-10'>
                  {' '}
                  <div className='space-y-5'>
                     <Image
                        src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/blue_gem.png'
                        width={46}
                        height={94}
                        alt='blue gem'
                        loading='eager'
                        className={'animate-wave absolute left-10 top-5 h-auto w-auto'}
                        style={{
                           filter: 'drop-shadow(0px 5px 6px #527feb)',
                           animationDuration: '3s',
                        }}
                     />
                     <div>
                        <h3 className='yekanBold'>پنل حرفه ای</h3>
                     </div>
                     <ProfessionServices />
                     <div>
                        <div className='mt-8 text-center'>
                           <Link
                              href='/#contact'
                              className='-mb-10 flex justify-center rounded-full border-2 border-white bg-violet-500 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین رو میخوام
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='keen-slider__slide relative block rounded-3xl border border-slate-700 bg-slate-900 px-4 pt-10'>
                  <div className='space-y-5'>
                     <Image
                        src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/packages/purple_gem.png'
                        width={56}
                        height={104}
                        alt='purple gem'
                        loading='eager'
                        className={'animate-wave absolute left-10 top-5 h-auto w-auto'}
                        style={{
                           filter: 'drop-shadow(0px 5px 10px #9b3aad)',
                           animationDuration: '3s',
                        }}
                     />
                     <div>
                        <h3 className='verdana'>VIP</h3>
                     </div>

                     <VIPServices />
                     <div>
                        <div className='mt-8 text-center'>
                           <Link
                              href='/#contact'
                              className='relative z-10 -mb-10 flex justify-center rounded-full bg-gray-800 px-6 py-2'
                           >
                              <span className='yekan flex items-center justify-center text-base'>
                                 همین رو میخوام
                              </span>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <span
            className='absolute -bottom-1/3 left-3/4 -z-10 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #6d3e0342 0%, transparent)',
            }}
         ></span>
         <span
            className='absolute -top-1/3 right-full -z-10 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background:
                  'radial-gradient(45.87% 46.18% at 55.13% 52.17%, #624a2e 0%, transparent)',
            }}
         ></span>
      </div>
   )
}

export default Packages
