import dynamic from 'next/dynamic'
import Detail from './components/detail'
import MobilePreview from './components/mobilePreview'
const desktopPreview = dynamic(() => import('./components/desktopPreview'), { ssr: false })
import PreviewControl from './components/previewControl'
import Spotlight from './components/spotlight'
import Project, { IProject } from '@/models/project'
import dbConnect from '@/lib/dbConnect'

export const generateMetadata = async ({ params: { title } }: { params: { title: string } }) => {
   return {
      title: '#',
      description: '#',
      alternates: {
         canonical: '#',
      },
   }
}

const fetchData = async (title: string) => {
   await dbConnect()
   return await Project.findOne({
      titleEn: title,
   }).exec()
}

const ProjectDetail = async ({
   params: { title, lang },
}: {
   params: { title: string; lang: string }
}) => {
   const data: IProject = await fetchData(title)

   return (
      <>
         <Spotlight />
         <div className='grid items-center justify-center lg:mx-10 lg:h-screen lg:pt-20 xl:pt-0'>
            <div className='grid lg:grid-cols-2 lg:gap-20 xl:gap-8'>
               <Detail
                  data={{
                     title: data.titleEn,
                     live: data.live,
                     client: data.clientEn,
                     description: data.descriptionEn,
                     technologies: data.technologies,
                     mobile1stImage: data.mobile1stImage,
                     mobile2ndImage: data.mobile2ndImage,
                     desktopImage: data.desktopImage,
                     gallery: data.gallery,
                  }}
               />

               <div className='order-1 mt-20 grid items-center justify-center lg:order-2 lg:mt-0'>
                  <MobilePreview
                     data={{
                        mobile1stImage: data.mobile1stImage,
                        mobile2ndImage: data.mobile2ndImage,
                     }}
                  />
                  {/* <desktopPreview /> */}

                  <PreviewControl />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProjectDetail
