import Link from 'next/link'

const HeaderLinksforDesktop = () => {
   return (
      <ul className='hidden items-center justify-center space-x-10 text-gray-700 lg:flex'>
         <li className='block'>
            <div className='text-gray-700'>
               <Link aria-label='logo' href='/'>
                  <div className='relative flex'>
                     {/* <Image
                  className='object-contain'
                  src={'#'}
                  alt='لوگو مصطفی تبریزیان'
                  width={77}
                  height={52}
                  quality={100}
                  loading='lazy'
               /> */}
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/#about'>
                  <div className='relative flex'>
                     <span
                        style={{ textShadow: '0 0 5px black' }}
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-1/2 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        About
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/#projects'>
                  <div className='relative flex'>
                     <span
                        style={{ textShadow: '0 0 5px black' }}
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        Work Samples & Projects
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/#technologies'>
                  <div className='relative flex'>
                     <span
                        style={{ textShadow: '0 0 5px black' }}
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        Technologies
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
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        Packages
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/#faq'>
                  <div className='relative flex'>
                     <span
                        style={{ textShadow: '0 0 5px black' }}
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        FAQ
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/#contact'>
                  <div className='relative flex'>
                     <span
                        style={{ textShadow: '0 0 5px black' }}
                        className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                     >
                        Contact
                     </span>
                  </div>
               </Link>
            </div>
         </li>
      </ul>
   )
}

export default HeaderLinksforDesktop
