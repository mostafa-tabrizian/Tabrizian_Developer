// import dbConnect from '@/lib/dbConnect'
// import limiter from '@/lib/limiter'
// import Project from '@/models/project'

// import Script from 'next/script'
// import Sampleprojects from './components/sampleprojects'
// import FAQ from './components/faq'
// import About from './components/about'
import SocialMedia from './components/socialMedia'
import Landpage from './components/landpage'
import About from './components/about'
import FAQ from './components/faq'
import Packages from './components/packages'
import Contact from './components/contact'
import Resume from './components/resume'
import Technologies from './components/technologies'

export const metadata = {
   title: 'مصطفی تبریزیان | طراحی لوگو، طراحی پوستر، طراحی بنر و طراحی کارت ویزیت',
   description: '// ! DESCRIPTION',
   alternates: {
      canonical: 'https://tabriziancodes.ir',
   },
}

// const getprojects = async () => {
//    await dbConnect()
//    return await Project.find({ active: true }).limit(14).sort({ createdAt: -1 })
// }

// const jsonLd = {
//    '@context': 'https://schema.org',
//    '@type': 'WebSite',
//    id: 'https://tabriziancodes.ir/#webSite',
//    name: 'مصطفی تبریزیان',
//    url: 'https://tabriziancodes.ir',
// }

// const corporationJsonLd = {
//    '@context': 'https://schema.org',
//    '@type': 'Corporation',
//    id: 'https://tabriziancodes.ir/#corporation',
//    name: 'مصطفی تبریزیان',
//    alternateName: ['مصطفی تبریزیان'],
//    legalName: 'مصطفی تبریزیان',
//    url: 'https://tabriziancodes.ir',
//    logo: 'https://tabriziancodes.ir/_next/image?url=%2Flogo%2Flogo.jpg&w=96&q=100',
//    email: '',
//    sameAs: [
//       'https://www.instagram.com/aliasadi_graphics',
//       'https://t.me/aliasadi_graphics',
//       'https://eitaa.com/aliasadi_graphics',
//    ],
//    contactPoint: [
//       {
//          '@type': 'ContactPoint',
//          telephone: '+989352601280',
//          contactType: 'customer service',
//          areaServed: 'IR',
//          availableLanguage: 'Persian',
//       },
//    ],
//    founders: [
//       {
//          '@context': 'https://schema.org',
//          '@type': 'Person',
//          jobTitle: 'Chief executive officer',
//          name: 'Ali Asadi',
//          sameAs: [
//             'https://www.instagram.com/aliasadi_graphics',
//             'https://t.me/aliasadi_graphics',
//             'https://eitaa.com/aliasadi_graphics',
//          ],
//       },
//       {
//          '@context': 'https://schema.org',
//          '@type': 'Person',
//          image: '',
//          jobTitle: 'Chairman',
//          name: 'Ali Asadi',
//          sameAs: [
//             'https://www.instagram.com/aliasadi_graphics',
//             'https://t.me/aliasadi_graphics',
//             'https://eitaa.com/aliasadi_graphics',
//          ],
//       },
//    ],
// }

async function Home({ params: { lang } }: { params: { lang: string } }) {
   // const remaining = await limiter.removeTokens(3)

   // if (remaining < 0) {
   //    return (
   //       <h1 className='text-center mx-10 md:mx-auto my-20 max-w-screen-sm'>
   //          متاسفانه تعداد درخواست‌های شما به حداکثر مجاز رسیده است. لطفاً کمی صبر کنید و سپس دوباره
   //          امتحان کنید
   //       </h1>
   //    )
   // }

   // const projects = await getprojects()

   return (
      <>
         {/* <Script
            id='website-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <Script
            id='corporation-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationJsonLd) }}
         /> */}

         <Landpage />

         <About />

         <Technologies />

         <Resume />

         <Packages />

         <FAQ />

         <Contact />

         {/* <SocialMedia /> */}
      </>
   )
}

export default Home
