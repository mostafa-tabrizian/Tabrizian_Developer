import Link from 'next/link'
import Image from 'next/image'
import MobilePreview from './components/mobilePreview'
// import DesktopPreview from './components/desktopPreview'

const ProjectDetail = () => {
   return (
      <>
         <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1289'
            height='703'
            viewBox='0 0 1289 703'
            fill='none'
            className='absolute right-0 -z-10'
         >
            <g filter='url(#filter0_f_140_159)'>
               <path
                  d='M1128.62 478.098C1021.45 660.69 630.453 498.721 441.121 387.598C251.789 276.475 66.4546 84.1903 173.622 -98.402C424.122 -115.902 553.29 -277.025 742.621 -165.902C931.953 -54.7788 1235.79 295.506 1128.62 478.098Z'
                  fill='url(#paint0_linear_140_159)'
               />
            </g>
            <defs>
               <filter
                  id='filter0_f_140_159'
                  x='0.104736'
                  y='-346.701'
                  width='1292.81'
                  height='1049.22'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
               >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feBlend
                     mode='normal'
                     in='SourceGraphic'
                     in2='BackgroundImageFix'
                     result='shape'
                  />
                  <feGaussianBlur stdDeviation='71' result='effect1_foregroundBlur_140_159' />
               </filter>
               <linearGradient
                  id='paint0_linear_140_159'
                  x1='861.447'
                  y1='71.1467'
                  x2='573.622'
                  y2='432.035'
                  gradientUnits='userSpaceOnUse'
               >
                  <stop stopColor='#24296F' />
                  <stop offset='1' stopColor='#5A348A' />
               </linearGradient>
            </defs>
         </svg>
         <div className='mx-auto grid h-screen items-center justify-center'>
            <div className='grid grid-cols-2 gap-20'>
               <div className='space-y-5'>
                  <div>
                     <h1>Personal Design Gallery Website</h1>
                     <Link href='#' target='_blank'>
                        <span className='text-sm'>AsadiGraphics.ir</span>
                     </Link>
                  </div>
                  <div className='space-y-3 flex gap-32'>
                     <h2>Client:</h2>
                     <p className='text-base'>Ali Asadi</p>
                  </div>
                  <div className='space-y-3 flex gap-32'>
                     <h2>Date:</h2>
                     <p className='text-base'>12 Dec 2021</p>
                  </div>

                  <div className='space-y-3 max-w-lg'>
                     <h2>Description:</h2>
                     <p className='text-sm'>
                        Figma ipsum component variant main layer. Rotate export layer effect select
                        clip flatten bold strikethrough slice. Figjam effect hand project duplicate
                        outline pencil move. Group rectangle export team prototype. Layer pen
                        flatten shadow bold component. Bold fill prototype pencil component
                        horizontal. Boolean auto variant figma group move auto. Group image draft
                        strikethrough.
                     </p>
                  </div>
                  <div className='space-y-3 '>
                     <h2>Technologies:</h2>
                     <p className='text-base'>Next.js 13, React, TypeScript</p>
                  </div>
                  <div className='space-y-3 '>
                     <h2>Screenshorts:</h2>
                     <div className='flex gap-5'>
                        <Image
                           src='/resume1.jpg'
                           alt='#'
                           width={357}
                           height={201}
                           className='rounded-lg'
                        />
                        <Image
                           src='/resume.png'
                           alt='#'
                           width={96}
                           height={201}
                           className='rounded-lg'
                        />
                     </div>
                  </div>
               </div>
               <div className='grid items-center justify-center'>
                  <MobilePreview />
                  {/* <DesktopPreview /> */}

                  <div className='absolute bottom-0 right-0 mx-auto my-5 flex w-full items-center justify-center gap-12'>
                     <button>
                        <svg
                           className='h-10 w-10 text-white'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           strokeWidth='2'
                           stroke='currentColor'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           {' '}
                           <path stroke='none' d='M0 0h24v24H0z' />{' '}
                           <rect x='7' y='4' width='10' height='16' rx='1' />{' '}
                           <line x1='11' y1='5' x2='13' y2='5' />{' '}
                           <line x1='12' y1='17' x2='12' y2='17.01' />
                        </svg>
                     </button>
                     <button>
                        <svg
                           className='h-10 w-10 text-white'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           strokeWidth='2'
                           stroke='currentColor'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           {' '}
                           <path stroke='none' d='M0 0h24v24H0z' />{' '}
                           <rect x='3' y='4' width='18' height='12' rx='1' />{' '}
                           <line x1='7' y1='20' x2='17' y2='20' />{' '}
                           <line x1='9' y1='16' x2='9' y2='20' />{' '}
                           <line x1='15' y1='16' x2='15' y2='20' />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ProjectDetail
