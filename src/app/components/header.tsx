import Link from 'next/link'
import Sidebar from './sidebar'
// import Image from 'next/image'
import LinksForDesktop from './headerLinksforDesktop'

const Header = () => {
   return (
      <header className='z-20 absolute top-0 left-0 mt-5 w-screen'>
         <div className='mx-auto flex items-center justify-between lg:grid lg:max-w-screen-xl lg:grid-cols-8'>
            <LinksForDesktop />

            <Link aria-label='صفحه اصلی' href='/' className='col-span-1 flex justify-end'>
               {/* <Image
                  className='object-contain'
                  src={'#'}
                  alt='لوگو مصطفی تبریزیان'
                  width={77}
                  height={52}
                  quality={100}
                  loading='lazy'
               /> */}
            </Link>

            <Sidebar />
         </div>

         {/* <a
            aria-label='ایتا'
            id='eitaa'
            href='https://eitaa.com/aliasadi_graphics'
            className='bg-gradient-to-t from-indigo-400 to-indigo-200 pr-1 lg:pr-2 py-1 lg:py-2 flex items-center gap-2 border-2 border-black rounded-lg lg:rounded-xl pl-9 lg:pl-12 fixed bottom-16 lg:bottom-[4.3rem] shadow-lg shadow-indigo-300 left-5 z-10'
            title='ایتا با پشتیبانی'
            target='_blank'
            rel='noreferrer'
         >
            <svg
               className='h-6 w-6 lg:h-8 lg:w-8 text-black absolute left-1 top-.5'
               viewBox='0 0 24 24'
               fill='none'
               stroke='currentColor'
               strokeWidth='1.8'
               strokeLinecap='round'
               strokeLinejoin='round'
            >
               <path d='m5.968 23.942a6.624 6.624 0 0 1 -2.332-.83c-1.62-.929-2.829-2.593-3.217-4.426-.151-.717-.17-1.623-.15-7.207.019-6.009.005-5.699.291-6.689.142-.493.537-1.34.823-1.767 1.055-1.57 2.607-2.578 4.53-2.943.384-.073.94-.08 6.056-.08 6.251 0 6.045-.009 7.066.314a6.807 6.807 0 0 1 4.314 4.184c.33.937.346 1.087.369 3.555l.02 2.23-.391.268c-.558.381-1.29 1.06-2.316 2.15-1.182 1.256-2.376 2.42-2.982 2.907-1.309 1.051-2.508 1.651-3.726 1.864-.634.11-1.682.067-2.302-.095-.553-.144-.517-.168-.726.464a6.355 6.355 0 0 0 -.318 1.546l-.031.407-.146-.03c-1.215-.241-2.419-1.285-2.884-2.5a3.583 3.583 0 0 1 -.26-1.219l-.016-.34-.309-.284c-.644-.59-1.063-1.312-1.195-2.061-.212-1.193.34-2.542 1.538-3.756 1.264-1.283 3.127-2.29 4.953-2.68.658-.14 1.818-.177 2.403-.075 1.138.198 2.067.773 2.645 1.639.182.271.195.31.177.555a.812.812 0 0 1 -.183.493c-.465.651-1.848 1.348-3.336 1.68-2.625.585-4.294-.142-4.033-1.759.026-.163.04-.304.031-.313-.032-.032-.293.104-.575.3-.479.334-.903.984-1.05 1.607-.036.156-.05.406-.034.65.02.331.053.454.192.736.092.186.275.45.408.589l.24.251-.096.122a4.845 4.845 0 0 0 -.677 1.217 3.635 3.635 0 0 0 -.105 1.815c.103.461.421 1.095.739 1.468.242.285.797.764.886.764.024 0 .044-.048.044-.106.001-.23.184-.973.326-1.327.423-1.058 1.351-1.96 2.82-2.74.245-.13.952-.47 1.572-.757 1.36-.63 2.103-1.015 2.511-1.305 1.176-.833 1.903-2.065 2.14-3.625.086-.57.086-1.634 0-2.207-.368-2.438-2.195-4.096-4.818-4.37-2.925-.307-6.648 1.953-8.942 5.427-1.116 1.69-1.87 3.565-2.187 5.443-.123.728-.169 2.08-.093 2.75.193 1.704.822 3.078 1.903 4.156a6.531 6.531 0 0 0 1.87 1.313c2.368 1.13 4.99 1.155 7.295.071.996-.469 1.974-1.196 3.023-2.25 1.02-1.025 1.71-1.88 3.592-4.458 1.04-1.423 1.864-2.368 2.272-2.605l.15-.086-.019 3.091c-.018 2.993-.022 3.107-.123 3.561-.6 2.678-2.54 4.636-5.195 5.242l-.468.107-5.775.01c-4.734.008-5.85-.002-6.19-.056z' />
            </svg>

            <span className='yekanBold text-sm'>ثبت سفارش</span>
         </a>

         <a
            aria-label='تلگرام'
            id='telegram'
            href='https://t.me/aliasadi_graphics'
            className='bg-gradient-to-t from-indigo-500 to-indigo-200 pr-1 lg:pr-2 py-1 lg:py-2 flex items-center gap-2 border-2 border-black rounded-lg lg:rounded-xl pl-9 lg:pl-12 fixed bottom-5 shadow-lg shadow-indigo-300 left-5 z-10'
            title='تلگرام با پشتیبانی'
            target='_blank'
            rel='noreferrer'
         >
            <svg
               className='h-8 w-8 lg:h-10 lg:w-10 absolute left-0 -top-1'
               viewBox='0 0 45 45'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
            >
               <rect width='45' height='45' fill='url(#pattern0)' />
               <defs>
                  <pattern
                     id='pattern0'
                     patternContentUnits='objectBoundingBox'
                     width='1'
                     height='1'
                  >
                     <use xlinkHref='#image0_134_2' transform='scale(0.01)' />
                  </pattern>
                  <image
                     id='image0_134_2'
                     width='100'
                     height='100'
                     xlinkHref='data:image/png;base64,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'
                  />
               </defs>
            </svg>

            <span className='yekanBold text-sm'>ثبت سفارش</span>
         </a> */}
      </header>
   )
}

export default Header
