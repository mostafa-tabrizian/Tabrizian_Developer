import dynamic from 'next/dynamic'
import Detail from './components/detail'
import MobilePreview from './components/mobilePreview'
const DesktopPreview = dynamic(() => import('./components/desktopPreview'), { ssr: false })
import PreviewControl from './components/previewControl'
import Spotlight from './components/spotlight'
import Project, { IProject } from '@/models/project'
import dbConnect from '@/lib/dbConnect'
import Script from 'next/script'
const ProjectNotFound = dynamic(() => import('./components/projectNotFound'))

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

   let creativeWorkJsonLd, breadcrumbJsonLd

   const langDecider = (en: string, fa: string) => {
      return lang == 'en' ? en : fa
   }

   if (data) {
      creativeWorkJsonLd = {
         '@context': 'http://schema.org',
         '@type': 'CreativeWork',
         name: langDecider(data.titleEn, data.titleFa),
         description: langDecider(data.descriptionEn, data.descriptionFa),
         image: `https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${data.mobile1stImage}`,
         creator: {
            '@type': 'Person',
            name: langDecider('Mostafa Tabrizian', 'مصطفی تبریزیان'),
         },
         url: '#', // /projects/${data.titleEn}
         dateCreated: data.createdAt,
         dateModified: data.updatedAt,
         license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
         mainEntity: {
            '@type': 'ImageGallery',
            name: langDecider(
               `${data.titleEn} project gallery`,
               `${data.titleFa} گالری تصاویر پروژه`,
            ),
            description: data.descriptionEn,
            image: [
               data.mobile1stImage,
               data.mobile2ndImage,
               data.desktopImage,
               ...data.gallery,
            ].map(
               (src) =>
                  `https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${src}`,
            ),
         },
      }

      breadcrumbJsonLd = {
         '@context': 'https://schema.org',
         '@type': 'BreadcrumbList',
         itemListElement: [
            {
               '@type': 'ListItem',
               position: 1,
               name: langDecider('#', '#'),
               item: {
                  '@type': 'Corporation',
                  '@id': '#', // https://asadigraphics.ir/#corporation
               },
            },
            { '@type': 'ListItem', position: 2, name: langDecider(data.titleEn, data.titleFa) },
         ],
      }
   }

   return (
      <>
         {data ? (
            <>
               <Script
                  id='breadcrumb-jsonld'
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
               />

               <Script
                  id='creativeWork-jsonld'
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
               />
            </>
         ) : (
            ''
         )}

         {data ? (
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
                        {/* <DesktopPreview /> */}

                        <PreviewControl />
                     </div>
                  </div>
               </div>
            </>
         ) : (
            <ProjectNotFound />
         )}
      </>
   )
}

export default ProjectDetail
