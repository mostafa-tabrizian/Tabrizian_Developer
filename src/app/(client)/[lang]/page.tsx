import dbConnect from '@/lib/dbConnect'
import limiter from '@/lib/limiter'
import Project from '@/models/project'

import Script from 'next/script'
import Landpage from './components/landpage'
import About from './components/about'
import FAQ from './components/faq'
import Packages from './components/packages'
import Contact from './components/contact'
import Projects from './components/projects'
import Technologies from './components/technologies'
import langDecider from '@/lib/langDecider'

export const metadata = {
   title: 'مصطفی تبریزیان | وب دِوِِلوپر React/Next.js',
   description:
      'سلام، من تبریزیانم، یک وب دِوِِلوپر فول استک با یک اشتیاق بالا برای ساخت وب سایت هایی با عملکرد بالا با تکنولوژی React/Next.js. هدف نهایی من فراتر از انتظارات شما عمل کردن و تحویل هیچ چیز جزء بهترین. با هم میتونیم ایده های درخشانتان را زنده کنیم.',
   alternates: {
      canonical: 'https://tabriziandeveloper.iran.liara.run',
   },
}

const fetchProjects = async () => {
   await dbConnect()
   return await Project.find({ active: true }).sort({ createdAt: -1 })
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

   const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      id: 'https://tabriziandeveloper.iran.liara.run/#webSite',
      name: 'مصطفی تبریزیان | وب دِوِِلوپر فول-استک Next.js',
      url: 'https://tabriziandeveloper.iran.liara.run',
   }

   const corporationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      id: 'https://tabriziandeveloper.iran.liara.run/#corporation',
      name: langDecider(lang, 'Mustafa Tabrizian', 'مصطفی تبریزیان'),
      alternateName: ['مصطفی تبریزیان', 'Mustafa Tabrizian'],
      legalName: 'Mustafa Tabrizian',
      url: 'https://tabriziandeveloper.iran.liara.run/',
      logo: 'https://tabriziandeveloper.iran.liara.run/icon.png',
      email: 'tabrizian.codes@gmail.com',
      sameAs: ['#'],
      founders: [
         {
            '@context': 'https://schema.org',
            '@type': 'Person',
            jobTitle: 'Chief executive officer',
            name: 'Mustafa Tabrizian',
            sameAs: ['#'],
         },
      ],
   }

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

         <Landpage lang={lang} />

         <About lang={lang} />

         <Technologies lang={lang} />

         <Projects lang={lang} projects={JSON.parse(JSON.stringify(projects))} />

         <Packages lang={lang} />

         <FAQ lang={lang} />

         <Contact lang={lang} />

         {/* <SocialMedia /> */}
      </>
   )
}

export default Home
