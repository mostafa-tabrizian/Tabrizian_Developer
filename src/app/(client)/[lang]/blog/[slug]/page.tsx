import 'react-quill/dist/quill.snow.css'

import Blog, { IBlog } from '@/models/blog'
import dbConnect from '@/lib/dbConnect'
import langDecider from '@/lib/langDecider'
import BlogNotFound from './blogNotFound'
import limiter from '@/lib/limiter'
import Script from 'next/script'
import Spotlight from '../../projects/[_id]/components/spotlight'
import Image from 'next/image'
import CreatedModifiedAt from './components/createdModifiedAt'
import Like from './components/like'
import Comments from './components/comments/drawerButton'

export const generateMetadata = async ({
   params: { slug, lang },
}: {
   params: { slug: string; lang: string }
}) => {
   const blog: IBlog = await fetchBlog(slug)

   if (blog) {
      return {
         title: langDecider(
            lang,
            `Mostafa Tabrizian | ${blog.title}`,
            `مصطفی تبریزیان | ${blog.title}`,
         ),
         description: blog.text.slice(0, 150),
         alternates: {
            canonical: `/en/projects/${slug}`,
            languages: {
               'en-US': `/en/blog/${slug}`,
               'fa-IR': `/fa/blog/${slug}`,
            },
         },
      }
   }
}

const fetchBlog = async (slug: string) => {
   try {
      await dbConnect()
      return await Blog.findOne({ slug, active: true })
   } catch (error) {
      console.error('Error fetching data:', error)
      return
   }
}

const getUserIp = async () => {
   const res = await fetch('https://api.ipify.org/?format=json')
   const resData = await res.json()
   return resData.ip
}

export const revalidate = 7 * 24 * 60 * 60

const BlogPage = async ({ params: { lang, slug } }: { params: { lang: string; slug: string } }) => {
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

   const blog: IBlog = await fetchBlog(slug)
   const userIP = await getUserIp()

   let breadcrumbJsonLd, blogPostJsonLd

   if (blog) {
      blogPostJsonLd = {
         '@context': 'http://schema.org',
         '@type': 'BlogPosting',
         image: `https://tabrizian.storage.iran.liara.space/tabrizian_codes/blogs/thumbnail/${blog.thumbnail}`,
         url: `https://mostafatabrizian.ir/${lang}/blog/${blog.slug}`,
         headline: blog.title,
         dateCreated: blog.createdAt,
         datePublished: blog.createdAt,
         dateModified: blog.modifiedAt,
         inLanguage: blog.lang,
         author: {
            '@type': 'Person',
            name: 'مصطفی تبریزیان',
            url: 'https://mostafatabrizian.ir',
         },
         // keywords: ['keyword1', 'keyword2', 'keyword3', 'keyword4'],
         // genre: ['SEO', 'JSON-LD'],
         articleSection: 'Uncategorized posts',
         articleBody: blog.text,
      }

      breadcrumbJsonLd = {
         '@context': 'https://schema.org',
         '@type': 'BreadcrumbList',
         itemListElement: [
            {
               '@type': 'ListItem',
               position: 1,
               name: langDecider(blog.lang, 'home', 'صفحه اصلی'),
               item: {
                  '@type': 'Corporation',
                  '@id': 'https://mostafatabrizian.ir/#blogs',
               },
            },
            {
               '@type': 'ListItem',
               position: 2,
               name: blog.title,
            },
         ],
      }
   }

   return (
      <>
         {blog ? (
            <>
               <Script
                  id='breadcrumb-jsonld'
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
               />

               <Script
                  id='blogPosting-jsonld'
                  type='application/ld+json'
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }}
               />
            </>
         ) : (
            ''
         )}

         {blog ? (
            <div>
               <div className={`${langDecider(blog.lang, '', '-scale-x-100')}`}>
                  <Spotlight />
               </div>
               <div className='relative z-10 mx-5 min-h-screen max-w-screen-md pt-32 text-center lg:mx-auto'>
                  <h1 className={`yekanBold text-right ${langDecider(blog.lang, '', 'rtl')}`}>
                     {blog.title}
                  </h1>
                  {blog.thumbnail ? (
                     <div className='relative mb-5 mt-10 aspect-video w-auto lg:w-[768px]'>
                        <Image
                           src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/blogs/thumbnail/${blog.thumbnail}`}
                           alt={blog.title}
                           fill
                           loading='eager'
                           priority
                           className='z-10 rounded-lg object-cover'
                           style={{
                              boxShadow:
                                 '0px 0px 26px 0px rgba(0, 0, 0, 0.78) inset, 21px 11px 42px 0px #0C0F16',
                           }}
                        />
                     </div>
                  ) : (
                     <span>Thumbnail not found!</span>
                  )}
                  <div
                     className={`${langDecider(
                        blog.lang,
                        'text-left',
                        'rtl',
                     )} flex justify-between`}
                  >
                     <div>
                        <h5 className='yekanBold text-base'>
                           {langDecider(blog.lang, 'Mostafa tabrizian', 'مصطفی تبریزیان')}
                        </h5>
                        <h5 className='yekan text-sm text-slate-400'>
                           {langDecider(
                              blog.lang,
                              `Read in ${blog.readTime} minutes`,
                              `خواندن در ${blog.readTime.toLocaleString('fa')} دقیقه`,
                           )}
                        </h5>
                     </div>
                     <CreatedModifiedAt createdAt={blog.createdAt} modifiedAt={blog.modifiedAt} />
                  </div>

                  <div
                     className='ql-editor mt-10 text-left'
                     dangerouslySetInnerHTML={{ __html: blog.text }}
                  />

                  <div className='fixed bottom-7 left-1/2 flex -translate-x-1/2 gap-5 rounded-full bg-white px-5 py-2'>
                     <Comments
                        userIP={userIP}
                        blogId={String(blog._id)}
                        comments={JSON.parse(JSON.stringify(blog.comments.reverse()))}
                        lang={lang}
                     />
                     <Like
                        userIP={userIP}
                        blogId={String(blog._id)}
                        likes={blog.likes}
                        lang={lang}
                     />
                  </div>
               </div>
            </div>
         ) : (
            <BlogNotFound lang={lang} />
         )}
      </>
   )
}

export default BlogPage
