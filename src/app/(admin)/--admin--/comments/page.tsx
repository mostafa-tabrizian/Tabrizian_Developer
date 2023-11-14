import Link from 'next/link'

import dbConnect from '@/lib/dbConnect'
import Blog from '@/models/blog'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Comments from './components/comments'

export const revalidate = 0

export const metadata = {
   title: 'Admin Panel | Comments'
}

const getBlogs = async () => {
   await dbConnect()
   const blogs = await Blog.find()

   return blogs
}

const Adminblogs = async () => {
   const blogs = await getBlogs()

   return (
      <div className='relative mx-6 my-16 max-w-screen-lg space-y-10 md:mx-auto'>
         <>
            <Breadcrumbs aria-label='breadcrumb'>
               <Link className='verdana text-gray-600' href='/'>
                  Home
               </Link>
               <Link className='verdana text-gray-600' href='/--admin--'>
                  Admin
               </Link>
               <Link className='verdana text-gray-600' href='/--admin--/blogs'>
                  Blogs
               </Link>
               <h5 className='verdana text-gray-400'>Comments</h5>
            </Breadcrumbs>

            <Comments blogs={JSON.parse(JSON.stringify(blogs))} />
         </>
      </div>
   )
}

export default Adminblogs
