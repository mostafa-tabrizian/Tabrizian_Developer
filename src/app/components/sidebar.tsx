'use client'

import Drawer from '@mui/material/Drawer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const Sidebar = () => {
   const [sidebar, setSidebar] = useState(false)

   const pathname = usePathname()
   const searchParams = useSearchParams()

   useEffect(() => setSidebar(false), [pathname, searchParams])

   return (
      <div className='md:hidden'>
         <button onClick={() => setSidebar(true)} aria-label='open sidebar'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='40'
               height='32'
               viewBox='0 0 37 29'
               fill='none'
            >
               <path
                  d='M2 2H22.625M2 14.5H35M14.375 27H35'
                  stroke='#a098f3'
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
               />
            </svg>
         </button>
         <Drawer
            anchor='top'
            open={sidebar}
            onClose={() => setSidebar(false)}
            transitionDuration={600}
         >
            <div className='h-screen w-screen bg-gradient-to-bl from-slate-900 to-slate-950'>
               <div className='p-5'>
                  <div
                     className={'flex flex-row-reverse items-center justify-between gap-20'}
                  >
                     <button onClick={() => setSidebar(false)} aria-label='close sidebar'>
                        <svg
                           stroke='currentColor'
                           fill='none'
                           strokeWidth='0'
                           viewBox='0 0 24 24'
                           className='h-12 w-12 text-slate-400'
                           height='1em'
                           width='1em'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M6 18L18 6M6 6l12 12'
                           ></path>
                        </svg>
                     </button>

                     
                  </div>

                  <ul className='rtl mt-10 flex flex-col justify-between gap-x-8 gap-y-8 text-indigo-50'>
                     <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link href='/'>
                              <div className=' relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center py-4 font-bold'>
                                    
                                       <span className='yekanBold text-3xl'>صفحه اصلی</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li>

                     {/* <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link href='/#about'>
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer  items-center py-4 text-3xl font-bold'>
                                       <span className='yekanBold'>درباره</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li> */}

                     <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link
                              href='/#projects'
                           >
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center  py-4 text-center text-3xl font-bold'>
                                       <span className='yekanBold'>نمونه کار و پروژه ها</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li>

                     {/* <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link href='/#blogs'>
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center  py-4 text-center text-3xl font-bold'>
                                       <span className='yekanBold'>بلاگ ها</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li> */}

                     <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link
                              href='/#technologies'>
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer  items-center py-4 text-3xl font-bold'>
                                       <span className='yekanBold'>تکنولوژی ها</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li>

                     <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link
                              href='/#packages'
                           >
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center py-4 text-3xl font-bold'>
                                       <span className='yekanBold'>پکیج ها</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li>

                     {/* <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link href='/#faq'>
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center py-4 text-3xl font-bold'>
                                       <span className='yekanBold'>سوالات متداول</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li> */}

                     {/* <li className='block'>
                        <div className='rounded-lg bg-gradient-to-l from-purple-300/10 to-transparent text-indigo-50 shadow-inner'>
                           <Link
                              href='/#contact'
                              onClick={() => setSidebar(false)}
                           >
                              <div className='relative flex items-center justify-center'>
                                 <span className='flex cursor-pointer items-center py-4 text-3xl font-bold'>
                                       <span className='yekanBold'>تماس</span>
                                 </span>
                              </div>
                           </Link>
                        </div>
                     </li> */}
                  </ul>
               </div>
            </div>
         </Drawer>
      </div>
   )
}

export default Sidebar
