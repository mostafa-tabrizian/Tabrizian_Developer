import Link from 'next/link'

import dbConnect from '@/lib/dbConnect'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Project from '@/models/project'
import DetailForm from '../components/detailForm'

export const metadata = {
   title: 'Admin Panel | Project',
}

const projectPage = async ({ params: { id } }: { params: { id: string } }) => {
   const addingNewproject = id === 'new'

   let project = null
   
   try {

      if (!addingNewproject) {
         await dbConnect()
         project = await Project.findById(id)
      }
   } catch (error) {
      console.error('Error fetching data:', error)
      return
   }

   return (
      <div className='relative mx-6 my-16'>
         <div className='mx-6 my-16 max-w-screen-xl space-y-10 md:mx-auto'>
            {addingNewproject || project ? (
               <>
                  <Breadcrumbs aria-label='breadcrumb'>
                     <Link className='text-gray-600' href='/'>
                        Home
                     </Link>
                     <Link className='text-gray-600' href='/--admin--'>
                        Admin
                     </Link>
                     <Link className='text-gray-600' href='/--admin--/projects'>
                        Projects
                     </Link>
                     <h5 className='text-gray-400'>
                        {addingNewproject ? 'Adding New Project' : project.titleEn}
                     </h5>
                  </Breadcrumbs>

                  <div className='mx-auto max-w-screen-md'>
                     <Link href='/--admin--/projects/new'>
                        <button className='fixed bottom-10 right-5 z-10 rounded-full border-2 border-indigo-500 bg-white p-3'>
                           <svg
                              className='h-6 w-6 text-indigo-500'
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

                     <DetailForm
                        addingNewproject={addingNewproject}
                        project={JSON.parse(JSON.stringify(project))}
                     />
                  </div>
               </>
            ) : (
               <h1>Item Not Found!</h1>
            )}
         </div>
      </div>
   )
}

export default projectPage
