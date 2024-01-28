import dynamic from 'next/dynamic'
import Detail from './components/detail'
import Spotlight from './components/spotlight'
import Project, { IProject } from '@/models/project'
import dbConnect from '@/utils/dbConnect'
import limiter from '@/utils/limiter'
import Script from 'next/script'
import MobilePreview from './components/mobilePreview'
import hyphen from '@/utils/hyphen'
const ProjectNotFound = dynamic(() => import('./components/projectNotFound'))

export const generateMetadata = async ({ params: { _id } }: { params: { _id: string } }) => {
   const data: IProject = await fetchData(_id)

   if (data) {
      return {
         title: `مصطفی تبریزیان | ${data.titleFa}`,

         description: data.descriptionFa,
         alternates: {
            canonical: `/projects/${_id}`,
         },
      }
   }
}

const fetchData = async (_id: string) => {
   await dbConnect()
   return await Project.findOne({
      active: true,
      _id,
   }).exec()
}

export const revalidate = 7 * 24 * 60 * 60

const ProjectDetail = async ({ params: { _id } }: { params: { _id: string } }) => {
   const remaining = await limiter.removeTokens(1)

   if (remaining < 0) {
      return (
         <h1 className='yekanBold mx-10 my-20 max-w-screen-sm text-center md:mx-auto'>
            متاسفانه تعداد درخواست‌های شما به حداکثر مجاز رسیده است. لطفاً کمی صبر کنید و سپس دوباره
            امتحان کنید
         </h1>
      )
   }

   const data: IProject = await fetchData(_id)

   let creativeWorkJsonLd, breadcrumbJsonLd

   if (data) {
      creativeWorkJsonLd = {
         '@context': 'http://schema.org',
         '@type': 'CreativeWork',
         name: data.titleFa,
         description: data.descriptionFa,
         image: `https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${data.mobile1stImage}`,
         creator: {
            '@type': 'Person',
            name: 'مصطفی تبریزیان',
         },
         url: `https://mostafatabrizian.ir/projects/${hyphen(data.titleEn)}`,
         dateCreated: data.createdAt,
         dateModified: data.updatedAt,
         license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
         mainEntity: {
            '@type': 'ImageGallery',
            name: `${data.titleFa} گالری تصاویر پروژه`,

            description: data.descriptionFa,
            image: [data.mobile1stImage, data.mobile2ndImage, ...data.gallery].map(
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
               name: 'صفحه اصلی',
               item: {
                  '@type': 'Corporation',
                  '@id': 'https://mostafatabrizian.ir/#projects',
               },
            },
            {
               '@type': 'ListItem',
               position: 2,
               name: data.titleFa,
            },
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
               <div className='-scale-x-100'>
                  <Spotlight />
               </div>
               <div className='grid items-center justify-center lg:mx-10 lg:min-h-screen lg:pt-20 xl:pt-0'>
                  <div className={'rtl grid lg:grid-cols-2 lg:gap-20 xl:gap-8'}>
                     <Detail
                        data={{
                           title: data.titleFa,
                           live: data.live,
                           client: data.clientFa,
                           description: data.descriptionFa,
                           technologies: data.technologies,
                           mobile1stImage: data.mobile1stImage,
                           mobile2ndImage: data.mobile2ndImage,
                           gallery: data.gallery,
                           lighthouse: data.lighthouse,
                        }}
                     />

                     <div className='ltr order-1 mt-20 items-center justify-center md:mx-auto md:w-[30rem] lg:order-2 lg:mt-0 xl:grid xl:w-[40rem]'>
                        <MobilePreview
                           data={{
                              mobile1stImage: data.mobile1stImage,
                              mobile2ndImage: data.mobile2ndImage,
                           }}
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
