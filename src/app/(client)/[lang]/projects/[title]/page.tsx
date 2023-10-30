import dynamic from 'next/dynamic'
import Detail from './components/detail'
import Spotlight from './components/spotlight'
import Project, { IProject } from '@/models/project'
import dbConnect from '@/lib/dbConnect'
import limiter from '@/lib/limiter'
import Script from 'next/script'
import MobilePreview from './components/mobilePreview'
import langDecider from '@/lib/langDecider'
const ProjectNotFound = dynamic(() => import('./components/projectNotFound'))

export const generateMetadata = async ({
   params: { title, lang },
}: {
   params: { title: string; lang: string }
}) => {
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
      active: true,
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
         <>
            {langDecider(
               lang,
               <h1 className='mx-10 my-20 max-w-screen-sm text-center md:mx-auto'>
                  Sorry, you have reached the request limit. Please wait one minute and try again.
               </h1>,
               <h1 className='yekanBold mx-10 my-20 max-w-screen-sm text-center md:mx-auto'>
                  متاسفانه تعداد درخواست‌های شما به حداکثر مجاز رسیده است. لطفاً کمی صبر کنید و سپس
                  دوباره امتحان کنید
               </h1>,
            )}
         </>
      )
   }

   const data: IProject = await fetchData(title)

   let creativeWorkJsonLd, breadcrumbJsonLd

   if (data) {
      creativeWorkJsonLd = {
         '@context': 'http://schema.org',
         '@type': 'CreativeWork',
         name: langDecider(lang, data.titleEn, data.titleFa),
         description: langDecider(lang, data.descriptionEn, data.descriptionFa),
         image: `https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${data.mobile1stImage}`,
         creator: {
            '@type': 'Person',
            name: langDecider(lang, 'Mostafa Tabrizian', 'مصطفی تبریزیان'),
         },
         url: '#', // /projects/${data.titleEn}
         dateCreated: data.createdAt,
         dateModified: data.updatedAt,
         license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
         mainEntity: {
            '@type': 'ImageGallery',
            name: langDecider(
               lang,
               `${data.titleEn} project gallery`,
               `${data.titleFa} گالری تصاویر پروژه`,
            ),
            description: data.descriptionEn,
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
               name: langDecider(lang, '#', '#'),
               item: {
                  '@type': 'Corporation',
                  '@id': '#', // https://asadigraphics.ir/#corporation
               },
            },
            {
               '@type': 'ListItem',
               position: 2,
               name: langDecider(lang, data.titleEn, data.titleFa),
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
               <div className={`${langDecider(lang, '', '-scale-x-100')}`}>
                  <Spotlight />
               </div>
               <div className='grid items-center justify-center lg:mx-10 lg:h-screen lg:pt-20 xl:pt-0'>
                  <div
                     className={`grid lg:grid-cols-2 lg:gap-20 xl:gap-8 ${langDecider(
                        lang,
                        '',
                        'rtl',
                     )}`}
                  >
                     <Detail
                        lang={lang}
                        data={{
                           title: langDecider(lang, data.titleEn, data.titleFa) as string,
                           live: data.live,
                           client: langDecider(lang, data.clientEn, data.clientFa) as string,
                           description: langDecider(
                              lang,
                              data.descriptionEn,
                              data.descriptionFa,
                           ) as string,
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
            <ProjectNotFound lang={lang} />
         )}
      </>
   )
}

export default ProjectDetail
