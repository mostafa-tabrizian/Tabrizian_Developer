import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

import Lightbox, {
   SlideImage,
   isImageFitCover,
   isImageSlide,
   useLightboxProps,
} from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const UseLightbox = ({
   projectData,
   openLightbox,
   setOpenLightbox,
}: {
   projectData: string[]
   openLightbox: boolean
   setOpenLightbox: Dispatch<SetStateAction<boolean>>
}) => {
   const baseURL = 'https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/'

   const slides = projectData
      .map((image) => {
         return {
            src: baseURL + image,
         }
      })
      .filter((slide) => slide !== undefined)

   return (
      <>
         {openLightbox ? (
            <Lightbox
               slides={slides}
               styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .93)' } }}
               open={openLightbox}
               close={() => setOpenLightbox(false)}
               render={{ slide: NextJsImage, thumbnail: NextJsImage }}
               plugins={[Thumbnails]}
            />
         ) : (
            ''
         )}
      </>
   )
}

function isNextJsImage(slide: SlideImage) {
   return isImageSlide(slide) && typeof slide.width === 'number' && typeof slide.height === 'number'
}

const NextJsImage = ({ slide }: { slide: SlideImage; rect: { width: number; height: number } }) => {
   const { imageFit } = useLightboxProps().carousel
   const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

   if (!isNextJsImage(slide)) return undefined

   return (
      <div className='h-screen w-screen' style={{ position: 'relative' }}>
         <Image
            fill
            alt=''
            src={slide as unknown as string}
            loading='eager'
            draggable={false}
            style={{ objectFit: cover ? 'cover' : 'contain' }}
         />
      </div>
   )
}

export default UseLightbox
