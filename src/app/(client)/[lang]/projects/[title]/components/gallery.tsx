'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'

const UseLightbox = dynamic(() => import('@/app/components/useLightbox'), { ssr: false })

export interface IPhoto {
   src: string
   backSrc: string
   gallery: [string]
   alt: string
}

const Gallery = ({ detail, images }: { detail: { title: string }; images: string[] }) => {
   const [openLightbox, setOpenLightbox] = useState(false)

   return (
      <>
         {openLightbox ? (
            <UseLightbox
               projectData={images}
               openLightbox={openLightbox}
               setOpenLightbox={setOpenLightbox}
            />
         ) : (
            ''
         )}

         <div className='styled-scrollbars flex items-center gap-2 overflow-x-scroll pb-2'>
            {images?.map((image, idx) => {
               // const photo = {
               //    src: `https://tabrizian.storage.iran.liara.space/asadi_designs/designs/${image}`,
               //    backSrc: detail.backSrc,
               //    gallery: detail.gallery,
               //    width: detail.width,
               //    height: detail.height,
               //    alt: detail.name,
               // }

               return (
                  <div key={idx} className='h-20 w-auto'>
                     <Image
                        onClick={() => setOpenLightbox(true)}
                        src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${image}`}
                        alt={detail.title}
                        width={200}
                        height={100}
                        className='h-full w-auto max-w-full rounded-lg hover:cursor-pointer'
                     />
                  </div>
               )
            })}
         </div>
      </>
   )
}

export default Gallery
