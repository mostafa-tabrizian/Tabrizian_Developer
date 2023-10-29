import dbConnect from '@/lib/dbConnect'
import limiter from '@/lib/limiter'
import Project from '@/models/project'

import Script from 'next/script'
import SocialMedia from './components/socialMedia'
import Landpage from './components/landpage'
import About from './components/about'
import FAQ from './components/faq'
import Packages from './components/packages'
import Contact from './components/contact'
import Projects from './components/projects'
import Technologies from './components/technologies'

export const metadata = {
   title: 'مصطفی تبریزیان | طراحی لوگو، طراحی پوستر، طراحی بنر و طراحی کارت ویزیت',
   description: '#',
   alternates: {
      canonical: '#',
   },
}

const fetchProjects = async () => {
   await dbConnect()
   return await Project.find({ active: true }).sort({ createdAt: -1 })
}

const jsonLd = {
   '@context': 'https://schema.org',
   '@type': 'WebSite',
   id: '#', // #webSite
   name: 'مصطفی تبریزیان',
   url: '#',
}

const corporationJsonLd = {
   '@context': 'https://schema.org',
   '@type': 'Corporation',
   id: '#', // /#corporation
   name: 'Mostafa Tabrizian',
   alternateName: ['مصطفی تبریزیان'],
   legalName: 'Mostafa Tabrizian',
   url: '#',
   logo: '#',
   email: '',
   sameAs: ['#'],
   founders: [
      {
         '@context': 'https://schema.org',
         '@type': 'Person',
         jobTitle: 'Chief executive officer',
         name: 'Mostafa Tabrizian',
         sameAs: ['#'],
      },
   ],
}

export const revalidate = 7 * 24 * 60 * 60

async function Home({ params: { lang } }: { params: { lang: string } }) {
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

   const projects = await fetchProjects()

   return (
      <>
         <Script
            id='website-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <Script
            id='corporation-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationJsonLd) }}
         />

         <Landpage />

         <About />

         <Technologies />

         <Projects projects={JSON.parse(JSON.stringify(projects))} />

         <Packages />

         <FAQ />

         <Contact />

         {/* <SocialMedia /> */}
      </>
   )
}

export default Home
