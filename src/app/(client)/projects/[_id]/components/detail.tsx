import Gallery from './gallery'

const Detail = ({
   data: {
      title,
      live,
      client,
      description,
      technologies,
      mobile1stImage,
      mobile2ndImage,
      gallery,
      lighthouse,
   },
}: {
   data: {
      title: string
      live: string
      client: string
      description: string
      technologies: string
      mobile1stImage: string
      mobile2ndImage: string
      gallery: [string]
      lighthouse: string
   }
}) => {
   return (
      <div className='z-10 order-2 mx-5 my-20 space-y-7 lg:order-1 lg:mx-0 lg:mt-0'>
         <div>
            <h1 className='yekanBold'>{title}</h1>
            {live ? (
               <a href={live} target='_blank' rel='noreferrer'>
                  <span className='text-sm underline underline-offset-4 hover:text-indigo-500'>
                     {live}
                  </span>
               </a>
            ) : (
               ''
            )}
         </div>

         {client ? (
            <div className='space-y-3'>
               <h2 className='yekanBold'>سفارش دهنده:</h2>
               <p className='yekan text-base'>{client}</p>
            </div>
         ) : (
            ''
         )}

         {description ? (
            <div className='max-w-lg space-y-3'>
               <h2 className='yekanBold'>توضیحات:</h2>
               <p className='yekan text-sm'>{description}</p>
            </div>
         ) : (
            ''
         )}

         <div className='space-y-3 '>
            <h2 className='yekanBold'>تکنولوژی ها:</h2>
            <p className='yekan text-base'>{technologies}</p>
         </div>
         
         <div className='space-y-3'>
            <h2 className='yekanBold'>اسکرین شات ها:</h2>
            <div className='flex gap-5'>
               <Gallery detail={{ title }} images={[mobile1stImage, mobile2ndImage, ...gallery]} />
            </div>
         </div>

         {lighthouse ? (
            <div className='space-y-3'>
               <h2 className='yekanBold'>تست سئو و عملکرد:</h2>
               <Gallery detail={{ title }} images={[lighthouse]} />
            </div>
         ) : (
            ''
         )}
      </div>
   )
}

export default Detail
