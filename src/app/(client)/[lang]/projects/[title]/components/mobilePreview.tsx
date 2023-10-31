import Image from 'next/image'

const MobileBorderSVG = () => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox='0 0 304 559'
         className='absolute left-0 top-0 -z-10 h-[302px] w-[147.43px] -translate-y-6 translate-x-1 rotate-[1.6deg] animate-pulse lg:h-[352.41px] lg:w-[192px] lg:-translate-y-3 lg:translate-x-0 xl:h-[559px] xl:w-[304px] xl:-translate-x-2 xl:-translate-y-4'
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
      <>
         <span className='absolute z-0 h-[280px] w-[280px] translate-x-8 translate-y-10 rounded-full border-2 border-violet-300 lg:h-[361px] lg:w-[361px] xl:h-[561px] xl:w-[561px]'>
            <div className='animate-spin-slow absolute -z-10 flex h-[280px] w-[280px] justify-center rounded-full lg:h-[361px] lg:w-[361px] xl:h-[561px] xl:w-[561px]'>
               <span
                  className='h-10 w-10 translate-x-16 -translate-y-2 rounded-full bg-indigo-400'
                  style={{
                     boxShadow: '3px -3px 10px black, inset 3px -3px 5px #2b054799',
                     background:
                        'radial-gradient(circle at 100px 100px, rgb(183 92 255), rgb(112 141 255))',
                  }}
               ></span>
            </div>
         </span>
      </>
   )
}

const MobilePreview = ({
   data: { mobile1stImage, mobile2ndImage },
}: {
   data: {
      mobile1stImage: string
      mobile2ndImage: string
   }
}) => {
   return (
      <div className='flex justify-center gap-7'>
         <div className='relative z-10'>
            <div className='relative aspect-[1/2] h-full w-[136.33px] lg:w-[182.46px] xl:w-[280.5px]'>
               <Image
                  src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile1stImage}`}
                  alt={mobile1stImage}
                  fill
                  className='z-10 translate-x-6 -rotate-3 rounded-3xl  object-cover object-top'
                  style={{
                     boxShadow:
                        '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 21px 11px 42px 0px #0C0F16',
                  }}
               />
               <MobileBorderSVG />
            </div>
         </div>
         <CircleSVG />
         <div className='relative aspect-[1/2] h-full w-[136.33px] lg:w-[182.46px] xl:w-[280.5px]'>
            <Image
               src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile2ndImage}`}
               alt={mobile1stImage}
               fill
               className='translate-y-10 rotate-6 rounded-3xl object-cover object-top lg:translate-y-20'
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
