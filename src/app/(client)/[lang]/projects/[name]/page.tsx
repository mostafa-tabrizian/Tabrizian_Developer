import dynamic from 'next/dynamic'
import Detail from './components/detail'
import MobilePreview from './components/mobilePreview'
const desktopImage = dynamic(() => import('./components/desktopImage'), { ssr: false })
import PreviewControl from './components/previewControl'
import Spotlight from './components/spotlight'

export const generateMetadata = async ({ params: { name } }: { params: { name: string } }) => {
   return {
      title: '#',
      description: '#',
      alternates: {
         canonical: '#',
      },
   }
}

const ProjectDetail = ({ params: { name, lang } }: { params: { name: string; lang: string } }) => {
   return (
      <>
         <Spotlight />
         <div className='grid items-center justify-center lg:mx-10 lg:h-screen lg:pt-20 xl:pt-0'>
            <div className='grid lg:grid-cols-2 lg:gap-20 xl:gap-8'>
               <Detail />

               <div className='order-1 mt-20 grid items-center justify-center lg:order-2 lg:mt-0'>
                  <MobilePreview />
                  {/* <desktopImage /> */}

                  <PreviewControl />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProjectDetail
