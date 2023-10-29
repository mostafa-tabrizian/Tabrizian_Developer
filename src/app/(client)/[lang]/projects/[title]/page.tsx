import dynamic from 'next/dynamic'
import Detail from './components/detail'
import PreviewControl from './components/previewControl'
import Spotlight from './components/spotlight'
import Project, { IProject } from '@/models/project'
import dbConnect from '@/lib/dbConnect'
import limiter from '@/lib/limiter'
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

export const revalidate = 7 * 24 * 60 * 60

const ProjectDetail = async ({
   params: { title, lang },
}: {
   params: { title: string; lang: string }
}) => {
   const remaining = await limiter.removeTokens(1)

   if (remaining < 0) {
      return (
         <h1 className='mx-10 my-20 max-w-screen-sm text-center md:mx-auto'>
            Sorry, you have reached the request limit. Please wait one minute and try again.
            {/* 
            متاسفانه تعداد درخواست‌های شما به حداکثر مجاز رسیده است. لطفاً کمی صبر کنید و سپس دوباره
            امتحان کنید
 */}
         </h1>
      )
   }

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
                           lighthouse: data.lighthouse,
                        }}
                     />

                     <div className='order-1 mt-20 items-center justify-center md:mx-auto md:w-[30rem] lg:order-2 lg:mt-0 xl:grid xl:w-[40rem]'>
                        <PreviewControl
                           mobile1stImage={data.mobile1stImage}
                           mobile2ndImage={data.mobile2ndImage}
                        />
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
