import Image from 'next/image'

const DesktopPreview = () => {
   return (
      <div className='relative mx-5 lg:my-24'>
         <div className=''>
            <Image
               src='/resume1.jpg'
               alt='#'
               width={779}
               height={438}
               className='rounded-xl'
               style={{
                  boxShadow:
                     '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 21px 11px 42px 0px #0C0F16',
               }}
            />
         </div>
         <span className='absolute left-0 top-0 -z-10 h-[93%] w-[93%] -translate-x-2 -translate-y-2 rounded-xl border-2 border-violet-300 md:-translate-x-4 md:-translate-y-4 md:border-4'></span>
      </div>
   )
}

export default DesktopPreview
