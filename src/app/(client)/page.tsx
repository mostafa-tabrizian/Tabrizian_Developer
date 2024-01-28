import dbConnect from '@/utils/dbConnect'
import limiter from '@/utils/limiter'
import Project from '@/models/project'
// import Blog from '@/models/blog'
import Image from 'next/image'

import Script from 'next/script'
import Landpage from './components/landpage'
// import About from './components/about'
// import FAQ from './components/faq'
import Packages from './components/packages'
// import Contact from './components/contact'
import Projects from './components/projects'
// import Technologies from './components/technologies'
// import Blogs from './components/blogs'
import AboutProduct from './components/aboutProduct'
import TechnologiesV2 from './components/technologies-v2'
import SafePayment from './components/safePayment'
import ContactAction from '@/app/components/contactAction'

export const metadata = {
   title: 'مصطفی تبریزیان | وب دِوِِلوپر React/Next.js',
   description:
      'سلام، من تبریزیانم، یک وب دِوِِلوپر فول استک با یک اشتیاق بالا برای ساخت وب سایت هایی با عملکرد بالا با تکنولوژی React/Next.js. هدف نهایی من فراتر از انتظارات شما عمل کردن و تحویل هیچ چیز جزء بهترین. با هم میتونیم ایده های درخشانتان را زنده کنیم.',
   alternates: {
      canonical: '/',
      // languages: {
      // 'en-US': '/en',
      // 'fa-IR': '/',
      // },
   },
}

const fetchData = async () => {
   await dbConnect()
   const projects = await Project.find({ active: true }).sort({ createdAt: -1 })
   // const blogs = await Blog.find({ active: true }).sort({ createdAt: -1 })

   return { projects }
}

export const revalidate = 7 * 24 * 60 * 60

async function Home() {
   const remaining = await limiter.removeTokens(1)

   if (remaining < 0) {
      return (
         <h1 className='mx-10 my-20 max-w-screen-sm text-center md:mx-auto'>
            متاسفانه تعداد درخواست‌های شما به حداکثر مجاز رسیده است. لطفاً کمی صبر کنید و سپس دوباره
            امتحان کنید
         </h1>
      )
   }

   const { projects } = await fetchData()

   const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      id: 'https://mostafatabrizian.ir/#webSite',
      name: 'مصطفی تبریزیان | وب دِوِِلوپر فول-استک Next.js',
      url: 'https://mostafatabrizian.ir',
   }

   const corporationJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Corporation',
      id: 'https://mostafatabrizian.ir/#corporation',
      name: 'مصطفی تبریزیان',
      alternateName: ['مصطفی تبریزیان', 'Mostafa Tabrizian'],
      legalName: 'Mostafa Tabrizian',
      url: 'https://mostafatabrizian.ir/',
      logo: 'https://mostafatabrizian.ir/icon.png',
      email: 'tabrizian.codes@gmail.com',
      sameAs: [
         'https://t.me/Tabrizian_dev',
         'https://github.com/mostafa-tabrizian',
         'https://www.linkedin.com/in/mostafa-tabrizian',
      ],
      founders: [
         {
            '@context': 'https://schema.org',
            '@type': 'Person',
            jobTitle: 'Chief executive officer',
            name: 'Mostafa Tabrizian',
            sameAs: [
               'https://t.me/Tabrizian_dev',
               'https://github.com/mostafa-tabrizian',
               'https://www.linkedin.com/in/mostafa-tabrizian',
            ],
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

         <div className='relative aspect-[4/3] w-full md:hidden'>
            <Image
               src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/hero-mobile.jpg'
               className='mix-blend-lighten'
               alt={'hero mobile'}
               fill
               priority
               sizes='(max-width: 768px) 100vw'
            />
         </div>
         <div className='absolute top-0'>
            <div className='relative mt-20 hidden h-[700px] w-screen md:block'>
               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/hero-desktop2.jpg'
                  className='-ml-40 object-contain object-left mix-blend-lighten brightness-75'
                  alt={'hero desktop'}
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw'
               />
            </div>
         </div>

         <div className='relative mx-5 mt-10 max-w-screen-xl md:mx-auto md:mt-[12.5%] md:px-10'>
            <Landpage />

            {/* <About lang={lang} /> */}

            <AboutProduct />

            <ContactAction
               title='قدمی به سوی کسب و کار بزرگ تر'
               body='برای این که این قدم رو بردارید. می‌تونید شماره تون رو وارد کنید تا تیم ما باهاتون تماس
            بگیره. و یا از طریق روش های زیر بهمون پیام بدید'
            />

            {/* <Technologies lang={lang} /> */}
            <TechnologiesV2 />

            <SafePayment />

            <ContactAction
               title='قدمی به سوی آسایش و خیال راحت'
               body='برای این که این قدم رو بردارید. می‌تونید شماره تون رو وارد کنید تا تیم ما باهاتون تماس
            بگیره. و یا از طریق روش های زیر بهمون پیام بدید'
            />

            {/* {blogs.length ? <Blogs lang={lang} blogs={JSON.parse(JSON.stringify(blogs))} /> : ''} */}

            <Packages />

            <ContactAction
               title='قدمی به سوی در‌آمد بیشتر'
               body='برای این که این قدم رو بردارید. می‌تونید شماره تون رو وارد کنید تا تیم ما باهاتون تماس
            بگیره. و یا از طریق روش های زیر بهمون پیام بدید'
            />

            <Projects projects={JSON.parse(JSON.stringify(projects))} />

            {/* <FAQ lang={lang} /> */}

            {/* <Contact lang={lang} /> */}

            {/* <SocialMedia /> */}
         </div>
      </>
   )
}

export default Home
