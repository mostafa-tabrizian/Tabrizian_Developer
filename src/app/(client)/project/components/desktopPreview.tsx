import Image from 'next/image'

const MobilePreview = () => {
   return (
      <div className='relative'>
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
         <span
            className='absolute top-0 left-0 -z-10 -translate-x-4 -translate-y-4 rounded-xl border-4 border-violet-300'
            style={{ width: '734px', height: '426px' }}
         ></span>
      </div>
   )
}

export default MobilePreview
