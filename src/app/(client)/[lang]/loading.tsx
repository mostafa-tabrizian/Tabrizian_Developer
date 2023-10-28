const LoadingHome = () => {
   return (
      <div className='mx-5 my-16 flex h-screen max-w-screen-xl animate-pulse items-center justify-center md:mx-auto'>
         <div className='animate-spin'>
            <svg
               className='h-14 w-14 text-white'
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
               <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
            </svg>
         </div>
      </div>
   )
}

export default LoadingHome
