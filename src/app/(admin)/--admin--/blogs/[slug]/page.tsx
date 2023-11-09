import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'

import dbConnect from '@/lib/dbConnect'
import User from '@/lib/user'
import Blog from '@/models/blog'
import Form from './components/form'

const fetchBlog = async (slug: string) => {
   try {
      await dbConnect()
      return await Blog.findOne({ slug })
   } catch (error) {
      console.error('Error fetching data:', error)
      return
   }
}

const NewBlog = async ({ params: { slug } }: { params: { slug: string } }) => {
   const user: { _id: string } = await User()
   const newBlog = slug === 'new'

   const blogData = !newBlog && await fetchBlog(slug)

   return (
      <div className='relative mx-6 my-16 max-w-screen-xl space-y-10 md:mx-auto'>
         {newBlog || blogData ? (
            <>
               <Breadcrumbs aria-label='breadcrumb'>
                  <Link className='yekan text-base text-gray-600' href='/'>
                     Home
                  </Link>
                  <Link className='yekan text-base text-gray-600' href='/--admin--'>
                     Admin
                  </Link>
                  <Link className='yekan text-base text-gray-600' href='/--admin--/blogs'>
                     Blogs
                  </Link>
                  <h5 className='yekan text-base text-gray-400'>{newBlog ? 'New Blog' : blogData.title}</h5>
               </Breadcrumbs>

               <Form
                  data={JSON.parse(
                     JSON.stringify({
                        authorId: user._id,
                        slugQuery: slug,
                        blogData,
                     }),
                  )}
               />
            </>
         ) : (
            <h1>Blog Not Found!</h1>
         )}
      </div>
   )
}

export default NewBlog
