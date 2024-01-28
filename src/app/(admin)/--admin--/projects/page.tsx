import Link from 'next/link'

import dbConnect from '@/utils/dbConnect'
import Project from '@/models/project'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import ProjectsTable from './components/projectsTable'

export const revalidate = 0

export const metadata = {
   title: 'Admin Panel | Project Table'
}

const getProjects = async () => {
   await dbConnect()
   const projects = await Project.find()

   return projects.reverse()
}

const Adminprojects = async () => {
   const projects = await getProjects()

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
               <h5 className='verdana text-gray-400'>Projects</h5>
            </Breadcrumbs>

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

            <ProjectsTable projects={JSON.parse(JSON.stringify(projects))} />
         </>
      </div>
   )
}

export default Adminprojects
