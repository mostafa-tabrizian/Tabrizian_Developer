import Link from 'next/link'

import CategoryNewInput from './create'
import DeleteButton from './delete'
import NameAndSlug from './nameAndSlug'

import Category from '@/models/category'
import Project from '@/models/project'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import dbConnect from '@/lib/dbConnect'
import hyphen from '@/lib/hyphen'
import Cover from './cover'

export const metadata = {
   title: '‌مصطفی تبریزیان | پنل ادمین | دسته بندی ها',
}

export const revalidate = 0

const getCategories = async () => {
   await dbConnect()
   return await Category.find()
}

const getCategoriesprojectsCount = async () => {
   const categoriesprojectCount: { [key: string]: number } = {}

   await dbConnect()
   const projects = await Project.find()

   projects.map((project) => {
      const categoryId = project.category
      if (categoriesprojectCount[categoryId]) {
         categoriesprojectCount[categoryId] += 1
      } else {
         categoriesprojectCount[categoryId] = 1
      }
   })

   return categoriesprojectCount
}

const AdminCategories = async () => {
   const categories = await getCategories()
   const categoriesprojectCount = await getCategoriesprojectsCount()

   return (
      <div className='mx-6 my-16 max-w-screen-md space-y-10 md:mx-auto'>
         <>
            <Breadcrumbs aria-label='breadcrumb'>
               <Link className='text-gray-400' href='/'>
                  صفحه اصلی
               </Link>
               <Link className='text-gray-400' href='/--admin--'>
                  ادمین
               </Link>
               <h5 className='fondnt-semibold'>دسته بندی ها</h5>
            </Breadcrumbs>

            <CategoryNewInput />

            <div className='rtl'>
               <div className='mb-3 grid grid-cols-7 items-center justify-between rounded-lg bg-white p-5 py-2 text-center'>
                  <div className='col-span-4 grid grid-cols-2'>
                     <p className='flex'>نام</p>
                     <p className='flex'>اسلاگ</p>
                  </div>
                  <p className='col-span-1'>کاور</p>
                  <p className='col-span-1'>طرح ها</p>
               </div>

               <div className='space-y-3'>
                  {categories.length ? (
                     categories.map((category) => {
                        const projectsLength = categoriesprojectCount[category._id] | 0
                        return (
                           <div
                              key={category._id}
                              className='grid grid-cols-7 items-center justify-between rounded-lg bg-white p-2 text-center'
                           >
                              <NameAndSlug params={JSON.parse(JSON.stringify({ ...category }))} />
                              <Cover
                                 params={JSON.parse(
                                    JSON.stringify({
                                       _id: category._id,
                                       name: category.name,
                                       cover: category?.cover,
                                    }),
                                 )}
                              />
                              <Link
                                 href={`/category/${hyphen(category.slug)}?name=${category.name}`}
                                 target='_blank'
                              >
                                 <p>{projectsLength}</p>
                              </Link>
                              <DeleteButton
                                 params={JSON.parse(
                                    JSON.stringify({
                                       _id: category._id,
                                       ableToDelete: projectsLength ? false : true,
                                    }),
                                 )}
                              />
                           </div>
                        )
                     })
                  ) : (
                     <h3 className='text-center'>هیچ دسته بندی ثبت نشده است</h3>
                  )}
               </div>
            </div>
         </>
      </div>
   )
}

export default AdminCategories
