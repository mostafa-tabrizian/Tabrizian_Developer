import Image from 'next/image'

const Resume = () => {
   return (
      <div id='resume' className='mx-auto grid h-screen max-w-screen-lg  items-center justify-center'>
         <div>
            <h2 className='bg-gradient-to-br from-violet-200 to-indigo-600 Audiowide bg-clip-text text-transparent w-fit mx-auto mb-10 text-center'>Resume</h2>
            <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
               <div className=''>
                  <Image
                     className='mb-5 rounded-lg'
                     src='/resume1.jpg'
                     alt='resume'
                     width={360}
                     height={194}
                  />
                  <span>Lakers Shop / NFT</span>
               </div>
               <div className=''>
                  <Image
                     className='mb-5 rounded-lg'
                     src='/resume2.jpg'
                     alt='resume'
                     width={360}
                     height={194}
                  />
                  <span>Danny Jones / 3D Designer</span>
               </div>
               <div className=''>
                  <Image
                     className='mb-5 rounded-lg'
                     src='/resume1.jpg'
                     alt='resume'
                     width={360}
                     height={194}
                  />
                  <span>Lakers Shop / NFT</span>
               </div>
               <div className=''>
                  <Image
                     className='mb-5 rounded-lg'
                     src='/resume2.jpg'
                     alt='resume'
                     width={360}
                     height={194}
                  />
                  <span>Danny Jones / 3D Designer</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume
