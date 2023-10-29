import Link from 'next/link'
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
      desktopImage,
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
      desktopImage: string
      gallery: [string]
      lighthouse: string
   }
}) => {
   return (
      <div className='order-2 mx-5 mt-20 space-y-7 lg:order-1 lg:mx-0 lg:mt-0'>
         <div>
            <h1>{title}</h1>
            <Link href='#' target='_blank'>
               <span className='text-sm underline underline-offset-4 hover:text-indigo-500'>
                  {live}
               </span>
            </Link>
         </div>
         <div className='space-y-3'>
            <h2>Client:</h2>
            <p className='text-base'>{client}</p>
         </div>
         {/* <div className='flex gap-32 space-y-3'>
            <h2>Date:</h2>
            <p className='text-base'>12 Dec 2021</p>
         </div> */}

         <div className='max-w-lg space-y-3'>
            <h2>Description:</h2>
            <p className='text-sm'>{description}</p>
         </div>
         <div className='space-y-3 '>
            <h2>Technologies:</h2>
            <p className='text-base'>{technologies}</p>
         </div>
         <div className='space-y-3'>
            <h2>Screenshorts:</h2>
            <div className='flex gap-5'>
               <Gallery
                  detail={{ title }}
                  images={[mobile1stImage, mobile2ndImage, desktopImage, ...gallery]}
               />
            </div>
         </div>
         {lighthouse ? (
            <div className='space-y-3'>
               <h2>SEO, Performance</h2>
               <Gallery detail={{ title }} images={[lighthouse]} />
            </div>
         ) : (
            ''
         )}
      </div>
   )
}

export default Detail
