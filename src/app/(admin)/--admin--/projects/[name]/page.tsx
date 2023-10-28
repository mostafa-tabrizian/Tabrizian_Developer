import Link from 'next/link'

import dbConnect from '@/lib/dbConnect'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Project from '@/models/project'
import Detailproject from '../components/detailForm'
import dehyphen from '@/lib/dehyphen'

export const metadata = {
   title: 'مصطفی تبریزیان | ادمین | طرح',
}

const projectPage = async ({ params: { name } }: { params: { name: string } }) => {
   const addingNewproject = name === 'new'

   try {
      let project = null

      if (!addingNewproject) {
         await dbConnect()
         const projectData = await Project.aggregate([
            { $match: { name: dehyphen(decodeURI(name)) } },
            { $limit: 1 },
         ])

         project = projectData[0]
      }

      return (
         <div className='relative mx-6 my-16'>
            <div className='mx-6 my-16 max-w-screen-xl space-y-10 md:mx-auto'>
               {addingNewproject || project ? (
                  <>
                     <Breadcrumbs aria-label='breadcrumb'>
                        <Link className='text-gray-400' href='/'>
                           صفحه اصلی
                        </Link>
                        <Link className='text-gray-400' href='/--admin--'>
                           ادمین
                        </Link>
                        <Link className='text-gray-400' href='/--admin--/projects'>
                           طرح ها
                        </Link>
                        <h5 className='rtl font-semibold'>
                           {addingNewproject ? 'افزودن طرح جدید' : project.name}
                        </h5>
                     </Breadcrumbs>

                     <div className='mx-auto max-w-xl'>
                        <Link href='/--admin--/projects/new'>
                           <button className='fixed bottom-10 right-5 z-10 rounded-full border-2 border-sky-500 bg-white p-3'>
                              <svg
                                 className='h-6 w-6 text-sky-500'
                                 fill='none'
                                 viewBox='0 0 24 24'
                                 stroke='currentColor'
                              >
                                 <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M12 4v16m8-8H4'
                                 />
                              </svg>
                           </button>
                        </Link>

                        <Detailproject
                           addingNewproject={addingNewproject}
                           project={JSON.parse(JSON.stringify(project))}
                        />
                     </div>
                  </>
               ) : (
                  <h1>آیتم پیدا نشد!</h1>
               )}
            </div>
         </div>
      )
   } catch (error) {
      console.error('Error fetching data:', error)
      return
   }
}

export default projectPage
