import langDecider from '@/lib/langDecider'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLinksforDesktop = ({ lang, path }: { lang: string; path: string }) => {
   return (
      <>
         <div className='fixed right-0 top-0 mr-10 flex gap-3'>
            <Link href={path.replace('en', 'fa')} className='h-8 w-8'>
               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/iran.png'
                  alt='Farsi language'
                  width={32}
                  height={32}
               />
            </Link>
            <Link href={path.replace('fa', 'en')} className='h-8 w-8'>
               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/uk.png'
                  alt='English language'
                  width={32}
                  height={32}
               />
            </Link>
         </div>

         <ul
            className={`${langDecider(
               lang,
               '',
               'rtl',
            )} hidden items-center justify-center space-x-10 text-gray-700 lg:flex`}
         >
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
                  {langDecider(
                     lang,
                     <Link href='/en/#about'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-1/2 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              About
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#about'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-1/2 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              درباره
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  {langDecider(
                     lang,
                     <Link href='/en/#projects'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              Work Samples & Projects
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#projects'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              نمونه کار و پروژه ها
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  {langDecider(
                     lang,
                     <Link href='/en/#technologies'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              Technologies
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#technologies'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              تکنولوژی ها
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  {langDecider(
                     lang,
                     <Link href='/en/#packages'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              Packages
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#packages'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              پکیج ها
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  {langDecider(
                     lang,
                     <Link href='/en/#faq'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              FAQ
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#faq'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              سوالات متداول
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>

            <li className='block'>
               <div className='text-gray-700'>
                  {langDecider(
                     lang,
                     <Link href='/en/#contact'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='verdana cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              Contact
                           </span>
                        </div>
                     </Link>,
                     <Link href='/fa/#contact'>
                        <div className='relative flex'>
                           <span
                              style={{ textShadow: '0 0 5px black' }}
                              className='yekanBold cursor-pointer py-1 text-sm tracking-widest text-indigo-100 after:absolute after:-bottom-1 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'
                           >
                              تماس
                           </span>
                        </div>
                     </Link>,
                  )}
               </div>
            </li>
         </ul>
      </>
   )
}

export default HeaderLinksforDesktop
