import Link from 'next/link'
import Image from 'next/image'

const Detail = () => {
   return (
      <div className='order-2 mx-5 mt-20 space-y-5 lg:order-1 lg:mx-0 lg:mt-0'>
         <div>
            <h1>Personal Design Gallery Website</h1>
            <Link href='#' target='_blank'>
               <span className='text-sm'>AsadiGraphics.ir</span>
            </Link>
         </div>
         <div className='flex gap-32 space-y-3'>
            <h2>Client:</h2>
            <p className='text-base'>Ali Asadi</p>
         </div>
         <div className='flex gap-32 space-y-3'>
            <h2>Date:</h2>
            <p className='text-base'>12 Dec 2021</p>
         </div>

         <div className='max-w-lg space-y-3'>
            <h2>Description:</h2>
            <p className='text-sm'>
               Figma ipsum component variant main layer. Rotate export layer effect select clip
               flatten bold strikethrough slice. Figjam effect hand project duplicate outline pencil
               move. Group rectangle export team prototype. Layer pen flatten shadow bold component.
               Bold fill prototype pencil component horizontal. Boolean auto variant figma group
               move auto. Group image draft strikethrough.
            </p>
         </div>
         <div className='space-y-3 '>
            <h2>Technologies:</h2>
            <p className='text-base'>Next.js 13, React, TypeScript</p>
         </div>
         <div className='space-y-3'>
            <h2>Screenshorts:</h2>
            <div className='flex gap-5'>
               <Image src='/resume1.jpg' alt='#' width={357} height={201} className='rounded-lg' />
               <Image src='/resume.png' alt='#' width={96} height={201} className='rounded-lg' />
            </div>
         </div>
      </div>
   )
}

export default Detail
