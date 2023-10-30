import langDecider from '@/lib/langDecider'
import { IProject } from '@/models/project'
import Image from 'next/image'

const Projects = ({ projects, lang }: { projects: IProject[]; lang: string }) => {
   return (
      <div
         id='projects'
         className='mx-auto grid h-screen max-w-screen-lg  items-center justify-center'
      >
         <div>
            {langDecider(
               lang,
               <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
                  Work Samples and Projects
               </h2>,
               <h2 className='yekanBold mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-[1.5rem] text-transparent'>
                  نمونه کار و پروژه ها
               </h2>,
            )}
            <div className={`grid grid-cols-3 gap-x-5 gap-y-10 ${langDecider(lang, '', 'rtl')}`}>
               {projects.map((project, idx) => {
                  return (
                     <div key={idx} className=''>
                        <Image
                           className='mb-5 rounded-lg'
                           src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${project.thumbnail}`}
                           alt='Projects'
                           width={360}
                           height={194}
                        />
                        {langDecider(
                           lang,
                           <span className='verdana'>{project.titleEn}</span>,
                           <span className='yekan'>{project.titleFa}</span>,
                        )}
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Projects
