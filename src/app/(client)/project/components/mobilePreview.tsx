import Image from 'next/image'

const MobilePreview = () => {
   return (
      <div className='flex'>
         <div className='relative z-10'>
            <Image
               src='/resume.png'
               alt='#'
               width={280.5}
               height={576.9}
               className='z-10 translate-x-6 -rotate-3 rounded-3xl'
               style={{
                  boxShadow:
                     '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 21px 11px 42px 0px #0C0F16',
               }}
            />
            <svg
               xmlns='http://www.w3.org/2000/svg'
               width='304'
               height='559'
               viewBox='0 0 304 559'
               className='absolute left-0 top-0 -z-10 -translate-x-2 -translate-y-4 rotate-[1.6deg]'
               fill='none'
            >
               <path
                  d='M303.028 510.187C304.463 525.18 293.354 538.448 278.343 539.671M25.1333 18.8015L226.376 2.41022C240.138 1.28934 252.203 11.5366 253.323 25.2982L292.452 505.699C293.573 519.461 283.326 531.525 269.564 532.646L68.3211 549.037C54.5595 550.158 42.4949 539.911 41.3741 526.149L2.24535 45.7485C1.12447 31.9869 11.3718 19.9224 25.1333 18.8015Z'
                  stroke='#CAB0FF'
                  strokeWidth='4'
               />
            </svg>
         </div>
         <span
            className='absolute -z-10 translate-x-10 translate-y-10 rounded-full border-2 border-violet-300'
            style={{ width: '561px', height: '561px' }}
         ></span>
         <Image
            src='/resume.png'
            alt='#'
            width={280.5}
            height={576.9}
            className='translate-y-20 rotate-6 rounded-3xl'
            style={{
               boxShadow:
                  '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
         />
      </div>
   )
}

export default MobilePreview
