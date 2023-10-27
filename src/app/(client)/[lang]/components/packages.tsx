import Image from 'next/image'

const Packages = () => {
   return (
      <div
         id='packages'
         className='relative mx-auto grid h-screen max-w-screen-lg items-center justify-center'
      >
         <div className='grid grid-cols-3 gap-10'>
            <div className='relative block rounded-3xl bg-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-700 before:p-2'>
               <div className='space-y-5'>
                  <Image
                     src='/tier1.png'
                     width={56}
                     height={114}
                     alt='diamond'
                     className='animate-wave absolute -top-16 right-10 mix-blend-screen'
                     style={{
                        filter: 'drop-shadow(0px 5px 10px #255123)',
                        animationDuration: '3s',
                     }}
                  />
                  <div className='relative z-10'>
                     <h3 className='verdana'>Startup</h3>
                  </div>
                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Basic Customization</span>{' '}
                        {/* سفارشی سازی طراحی پایه */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>2 Month Support</span>{' '}
                        {/* پشتیبانی رایگان ۲ ماه */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Split Payment in 2</span>{' '}
                        {/* پرداخت در ۲ مرحله */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Delivery Time (Business Days)</span>
                        {/* 14 days | زمان تحویل (روز کاری): ۱۴ روز */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Basic SEO</span> {/* سئو پایه */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Basic Content Management System (CMS)</span>
                        {/* پنل مدیریت محتوا CMS پایه */}
                     </div>
                  </div>
               </div>
               <button className='relative z-10 mb-4 mt-20 w-full rounded-full bg-gray-800 px-6 py-2'>
                  <span className='verdana text-base'>Get This Right Now</span>
               </button>
            </div>
            <div className='relative -top-5 block rounded-3xl bg-gradient-to-b from-indigo-950 to-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-400 before:p-2'>
               <div className='space-y-5'>
                  <Image
                     src='/tier3.png'
                     width={56}
                     height={114}
                     alt='diamond'
                     className='animate-wave absolute -top-16 right-10 mix-blend-screen'
                     style={{ filter: 'drop-shadow(0px 5px 6px #527feb)', animationDuration: '3s' }}
                  />
                  <div>
                     <h3 className='verdana'>Advanced</h3>
                  </div>
                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Advanced Customization</span>{' '}
                        {/* سفارشی سازی طراحی پیشرفته */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>6 Months of Free Support</span>{' '}
                        {/* ۶ ماه پشتیبانی رایگان */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Split Payment in 3</span>{' '}
                        {/* پرداخت در ۳ مرحله */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Delivery Time (Business Days): 20 days</span>{' '}
                        {/* زمان تحویل (روز کاری): ۲۰ روز */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Advanced SEO & Google Analytics</span>{' '}
                        {/* سئو پیشرفته و پنل آمار (گوگل) */}
                     </div>

                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Advanced Content Management System (CMS)</span>{' '}
                        {/* پنل مدیریت محتوا CMS پیشرفته */}
                     </div>
                  </div>
               </div>
               <button className='mb-4 mt-20 w-full rounded-full border-2 border-white bg-violet-500 px-6 py-2'>
                  <span className='verdana text-base'>Get This Right Now</span>
               </button>
            </div>
            <div className='relative block rounded-3xl bg-[#0C0F16] px-4 pt-10 before:absolute before:-left-0.5 before:-top-0.5 before:-z-10 before:h-[calc(100%+5px)] before:w-[calc(100%+5px)] before:rounded-3xl before:bg-gradient-to-b before:from-gray-700 before:p-4'>
               <div className='space-y-5'>
                  <Image
                     src='/tier2.png'
                     width={56}
                     height={114}
                     alt='diamond'
                     className='animate-wave absolute -top-16 right-10 mix-blend-screen'
                     style={{
                        filter: 'drop-shadow(0px 5px 15px #9a6023)',
                        animationDuration: '3s',
                     }}
                  />
                  <div>
                     <h3 className='verdana'>VIP</h3>
                  </div>

                  <div className='space-y-3'>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Full Customization</span> {/* طراحی اختصاصی */}
                     </div>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>12 Months of Free Support </span>{' '}
                        {/* ۱۲ ماه پشتیبانی فوری + تماس تلفنی */}
                     </div>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'> Split Payment in 4 </span>{' '}
                        {/* پرداخت در ۴ مرحله */}
                     </div>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>Delivery Time (Business Days): 30 days</span>{' '}
                        {/* زمان تحویل (روز کاری): ۳۰ روز */}
                     </div>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'>
                           Advanced SEO & Google Analytics + SEO Consulting
                        </span>{' '}
                        {/* سئو پیشرفته و پنل آمار و مشاوره سئو (گوگل) */}
                     </div>
                     <div className='flex gap-2'>
                        <svg
                           className='h-5 w-5 text-purple-500'
                           fill='none'
                           viewBox='0 0 24 24'
                           stroke='currentColor'
                        >
                           <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M5 13l4 4L19 7'
                           />
                        </svg>
                        <span className='text-sm z-10'> Custom Content Management System (CMS)</span>{' '}
                        {/* پنل مدیریت محتوا CMS اختصاصی */}
                     </div>
                  </div>
               </div>
               <button className='relative z-10 mb-4 mt-20 w-full rounded-full bg-gray-800 px-6 py-2'>
                  <span className='verdana text-base'>Get This Right Now</span>
               </button>
            </div>
         </div>
         <span
            className='absolute -bottom-1/3 left-3/4 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #2b1e4e 0%, #ffffff00 100%)',
            }}
         ></span>
         <span
            className='absolute -top-1/3 right-full rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background:
                  'radial-gradient(45.87% 46.18% at 55.13% 52.17%, #2E3F62 0%, rgba(12, 15, 22, 0.00) 100%)',
            }}
         ></span>
      </div>
   )
}

export default Packages
