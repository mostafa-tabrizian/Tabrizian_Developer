import langDecider from '@/lib/langDecider'
import { IProject } from '@/models/project'
import Image from 'next/image'
import Link from 'next/link'

const Projects = ({ projects, lang }: { projects: IProject[]; lang: string }) => {
   return (
      <div
         id='projects'
         className='mx-5 my-40 grid h-screen max-w-screen-lg items-center justify-center md:my-0 xl:mx-auto'
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
            <div className={`grid gap-x-5 gap-y-10 md:grid-cols-3 ${langDecider(lang, '', 'rtl')}`}>
               {projects.map((project, idx) => {
                  return (
                     <Link href={`${lang}/projects/${project.titleEn}`} key={idx}>
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
                     </Link>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Projects
