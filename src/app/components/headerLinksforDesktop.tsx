import Link from 'next/link'

const HeaderLinksforDesktop = () => {
   return (
      <>
         <ul
            className={`rtl hidden
             items-center justify-center space-x-10 space-x-reverse text-gray-700 lg:flex`}
         >
            <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-1/2 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           صفحه اصلی
                        </span>
                     </div>
                  </Link>
               </div>
            </li>

            {/* <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#about'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-1/2 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           درباره
                        </span>
                     </div>
                  </Link>
               </div>
            </li> */}

            <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#projects'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           نمونه کار و پروژه ها
                        </span>
                     </div>
                  </Link>
               </div>
            </li>

            {/* <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#blogs'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           بلاگ ها
                        </span>
                     </div>
                  </Link>
               </div>
            </li> */}

            <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#technologies'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           تکنولوژی ها
                        </span>
                     </div>
                  </Link>
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#packages'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           پکیج ها
                        </span>
                     </div>
                  </Link>
               </div>
            </li>

            {/* <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#faq'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           سوالات متداول
                        </span>
                     </div>
                  </Link>
               </div>
            </li> */}

            {/* <li className='block'>
               <div className='text-gray-700'>
                  <Link href='/#contact'>
                     <div className='relative flex'>
                        <span
                           style={{ textShadow: '0 0 5px black' }}
                           className='yekan cursor-pointer py-1 text-sm text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-violet-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                        >
                           تماس
                        </span>
                     </div>
                  </Link>
               </div>
            </li> */}
         </ul>
      </>
   )
}

export default HeaderLinksforDesktop
