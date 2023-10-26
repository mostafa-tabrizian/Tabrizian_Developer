import Image from 'next/image'

const MobileBorderSVG = () => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 304 559'
         className='absolute left-0 top-0 -z-10 h-[302px] w-[147.43px] -translate-y-6 translate-x-1 rotate-[1.6deg] lg:translate-x-1 lg:-translate-y-7 lg:h-[352.41px] lg:w-[172px] xl:h-[559px] xl:w-[304px] xl:-translate-x-2 xl:-translate-y-4'
         fill='none'
      >
         <path
            d='M303.028 510.187C304.463 525.18 293.354 538.448 278.343 539.671M25.1333 18.8015L226.376 2.41022C240.138 1.28934 252.203 11.5366 253.323 25.2982L292.452 505.699C293.573 519.461 283.326 531.525 269.564 532.646L68.3211 549.037C54.5595 550.158 42.4949 539.911 41.3741 526.149L2.24535 45.7485C1.12447 31.9869 11.3718 19.9224 25.1333 18.8015Z'
            stroke='#CAB0FF'
            strokeWidth='4'
         />
      </svg>
   )
}

const CircleSVG = () => {
   return (
      <span className='absolute -z-10 h-[280px] w-[280px] translate-x-10 translate-y-10 rounded-full border-2 border-violet-300 lg:h-[361px] lg:w-[361px] xl:h-[561px] xl:w-[561px]'></span>
   )
}

const MobilePreview = () => {
   return (
      <div className='flex gap-7 xl:gap-0'>
         <div className='relative z-10'>
            <div className='relative h-[301.57px] w-[136.33px] lg:h-[375.31px] lg:w-[182.46px] xl:h-[576.9px] xl:w-[280.5px]'>
               <Image
                  src='/resume.png'
                  alt='#'
                  fill
                  className='z-10 translate-x-6 -rotate-3 rounded-3xl'
                  style={{
                     boxShadow:
                        '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 21px 11px 42px 0px #0C0F16',
                  }}
               />
            </div>
            <MobileBorderSVG />
         </div>
         <CircleSVG />
         <div className='relative h-[301.57px] w-[136.33px] lg:h-[375.31px] lg:w-[182.46px] xl:h-[576.9px] xl:w-[280.5px]'>
            <Image
               src='/resume2.png'
               alt='#'
               fill
               className='translate-y-10 rotate-6 rounded-3xl lg:translate-y-20'
               style={{
                  boxShadow:
                     '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
               }}
            />
         </div>
      </div>
   )
}

export default MobilePreview
