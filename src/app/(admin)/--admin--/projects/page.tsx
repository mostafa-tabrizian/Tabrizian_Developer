import Link from 'next/link'

import dbConnect from '@/lib/dbConnect'
import Project from '@/models/project'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import ProjectsTable from './components/projectsTable'

export const revalidate = 0

export const metadata = {
   title: 'مصطفی تبریزیان | پنل ادمین | طرح ها',
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
               <Link className='text-gray-400' href='/'>
                  صفحه اصلی
               </Link>
               <Link className='text-gray-400' href='/--admin--'>
                  ادمین
               </Link>
               <h5 className='font-semibold'>طرح ها</h5>
            </Breadcrumbs>

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

            <ProjectsTable projects={JSON.parse(JSON.stringify(projects))} />
         </>
      </div>
   )
}

export default Adminprojects
