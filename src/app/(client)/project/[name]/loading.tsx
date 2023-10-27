const LoadingHome = () => {
   return (
      <div className='max-w-screen-lg animate-pulse gap-7 space-y-4 py-32 md:mx-auto xl:gap-0'>
         <div className='grid lg:grid-cols-2 lg:gap-20 xl:gap-8'>
            <div className='order-2 mx-5 mt-20 space-y-5 lg:order-1 lg:mx-0 lg:mt-0'>
               <div className='h-10 w-3/4 rounded bg-gray-200'></div>
               <div className='h-10 w-20 rounded bg-gray-200'></div>
               <div className='h-10 w-28 rounded bg-gray-200'></div>
               <div className='h-28 w-3/4 rounded bg-gray-200'></div>
               <div className='h-10 w-28 rounded bg-gray-200'></div>
               <div className='hidden gap-3 lg:flex'>
                  <div className='h-28 w-40 rounded bg-gray-200'></div>
                  <div className='h-28 w-20 rounded bg-gray-200'></div>
                  <div className='h-28 w-20 rounded bg-gray-200'></div>
               </div>
            </div>
            <div className='order-1 flex items-center justify-center lg:order-2 lg:grid'>
               <div className='flex gap-7 xl:gap-0'>
                  <div
                     style={{
                        boxShadow: '0px 0px 26px 0px rgba(0, 0, 0, 0.78)',
                     }}
                     className='relative z-10 h-[301.57px] w-[136.33px] translate-x-6 -rotate-3 rounded-lg bg-gray-200 lg:h-[375.31px] lg:w-[182.46px] xl:h-[576.9px] xl:w-[280.5px]'
                  />
                  <div
                     style={{
                        boxShadow: '0px 0px 26px 0px rgba(0, 0, 0, 0.78)',
                     }}
                     className='relative h-[301.57px] w-[136.33px] translate-y-10 rotate-6 rounded-lg bg-gray-200 lg:h-[375.31px] lg:w-[182.46px] lg:translate-y-20 xl:h-[576.9px] xl:w-[280.5px]'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoadingHome
