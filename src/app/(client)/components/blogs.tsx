import langDecider from '@/utils/langDecider'
import { IBlog } from '@/models/blog'
import Image from 'next/image'
import Link from 'next/link'

const Blogs = ({ blogs, lang }: { blogs: IBlog[]; lang: string }) => {
   return (
      <div
         id='blogs'
         className='mx-5 my-40 grid min-h-screen max-w-screen-lg items-center justify-center md:my-0 xl:mx-auto'
      >
         <div>
            {langDecider(
               lang,
               <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
                  Blogs
               </h2>,
               <h2 className='yekanBold mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-[1.5rem] text-transparent'>
                  بلاگ ها
               </h2>,
            )}
            <div className={`grid gap-x-5 gap-y-10 md:grid-cols-3 ${langDecider(lang, '', 'rtl')}`}>
               {blogs.map((blog, idx) => {
                  return (
                     <Link href={`${lang}/blog/${blog.slug}`} key={idx}>
                        <Image
                           className='mb-5 rounded-lg'
                           src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/blogs/thumbnail/${blog.thumbnail}`}
                           alt={blog.title}
                           width={360}
                           height={194}
                        />
                        {langDecider(
                           lang,
                           <h3 className='verdana text-base'>{blog.title}</h3>,
                           <h3 className='yekan text-base'>{blog.title}</h3>,
                        )}
                     </Link>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Blogs
