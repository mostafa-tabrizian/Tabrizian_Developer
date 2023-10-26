import Detail from './components/detail'
import MobilePreview from './components/mobilePreview'
import PreviewControl from './components/previewControl'
import Spotlight from './components/spotlight'
import DesktopPreview from './components/desktopPreview'

export const generateMetadata = async ({ params: { name } }: { params: { name: string } }) => {
   return {
      title: '#',
      description: '#',
      alternates: {
         canonical: '#',
      },
   }
}

const ProjectDetail = () => {
   return (
      <>
         <Spotlight />
         <div className='lg:mx-10 lg:pt-20 xl:pt-0 grid items-center justify-center lg:h-screen'>
            <div className='grid lg:grid-cols-2 lg:gap-20 xl:gap-0'>
               <Detail />

               <div className='order-1 mt-20 grid items-center justify-center lg:order-2 lg:mt-0'>
                  <MobilePreview />
                  {/* <DesktopPreview /> */}

                  <PreviewControl />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProjectDetail
