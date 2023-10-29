import Link from 'next/link'

const ProjectNotFound = () => {
   return (
      <div className='mx-5 h-[50rem] px-3 text-center md:mx-auto md:max-w-screen-lg'>
         <div className='grid h-[50rem] items-center'>
            <div className='relative'>
               <h2 className='text-center text-[3rem] font-bold md:text-[6rem]'>
                  Error{' '}
                  <span className='text-[4rem] font-bold text-violet-500 md:text-[7rem]'>404</span>
               </h2>
               <span className='absolute -top-[14rem] right-0 -z-10 h-[40rem] w-[40rem] bg-gradient-radial from-indigo-800 via-transparent to-transparent'></span>
               <p className='text-[1.4rem] font-semibold md:text-[2rem]'>Project Not Found!</p>
               <div>
                  <p className='text-lg'>
                     It seems like the page you&apos;re looking for doesn&apos;t exist or the URL
                     might have been changed.
                  </p>
               </div>

               <div className='mt-10'>
                  <Link
                     href='/'
                     className='rounded-2xl bg-violet-500 px-4 py-2 text-lg text-white shadow-md shadow-indigo-800'
                  >
                     Back to the home page
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectNotFound
