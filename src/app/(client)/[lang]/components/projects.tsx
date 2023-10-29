import { IProject } from '@/models/project'
import Image from 'next/image'

const Resume = ({ projects }: { projects: IProject[] }) => {
   return (
      <div
         id='resume'
         className='mx-auto grid h-screen max-w-screen-lg  items-center justify-center'
      >
         <div>
            <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
               Work Samples and Projects
            </h2>
            <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
               {projects.map((project, idx) => {
                  return (
                     <div key={idx} className=''>
                        <Image
                           className='mb-5 rounded-lg'
                           src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${project.thumbnail}`}
                           alt='resume'
                           width={360}
                           height={194}
                        />
                        <span>{project.titleEn}</span>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Resume
