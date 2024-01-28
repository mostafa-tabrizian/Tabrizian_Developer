'use client'

import hyphen from '@/utils/hyphen'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { PiCodesandboxLogoLight } from 'react-icons/pi'
import { IProject } from '@/models/project'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

const Projects = ({ projects }: { projects: IProject[] }) => {
   const { ref: hit1st, inView: hit1stInView } = useInView()

   const [projectRef] = useKeenSlider<HTMLDivElement>({
      // loop: true,
      rtl: true,
      slides: {
         perView: 1.1,
         spacing: 20,
      },
      breakpoints: {
         '(min-width: 768px)': {
            slides: {
               perView: 3.3,
               spacing: 20,
            },
         },
      },
   })

   return (
      <div id='projects' className='relative mt-20'>
         <div className='mx-auto h-full items-center '>
            <div className='relative'>
               <div
                  className={`
                  ${hit1stInView ? 'after:max-h-full' : 'after:max-h-0'}
                  pr-7 after:absolute after:right-0 after:top-14 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-transparent after:to-blue-500
                  after:transition-all after:delay-300 after:duration-1000 after:ease-in-out
               `}
               >
                  <span className='absolute -right-4 -top-0 h-8 w-8 bg-blue-400 blur-xl' />
                  <PiCodesandboxLogoLight className='absolute -right-4 -top-0 h-8 w-8 text-slate-200' />

                  <h2 className='yekan relative text-lg md:text-2xl'>نمونه پروژه ها</h2>
                  <h3 ref={hit1st} className='yekanBold relative mt-5 text-2xl md:text-4xl'>
                     <span className='mb-4 block text-blue-500'>به چشمان خود اعتماد کنید</span>
                     نمونه هایی از کسانی که به کسب و کار خود باور داشتند
                  </h3>
               </div>
            </div>
            <div ref={projectRef} className='keen-slider mt-10'>
               {projects.map((project, idx) => {
                  return (
                     <div key={'project._id' + idx} className='keen-slider__slide relative'>
                        <Link href={`fa/projects/${hyphen(project._id)}`}>
                           <Image
                              className='mb-5 h-auto w-auto rounded-lg'
                              src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${project.thumbnail}`}
                              alt='Projects'
                              width={360}
                              height={194}
                              loading='lazy'
                           />
                           <span className='yekan'>{project.titleFa}</span>
                        </Link>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Projects
