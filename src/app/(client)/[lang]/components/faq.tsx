'use client'

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'

import Collapse from '@mui/material/Collapse'
import Link from 'next/link'

const FAQ = () => {
   const previousCollapse = useRef(null) as unknown as
      | {
           current: Dispatch<SetStateAction<boolean>>
        }
      | { current: null }

   const [q1, setQ1] = useState(false)
   const [q2, setQ2] = useState(false)
   const [q3, setQ3] = useState(false)
   const [q4, setQ4] = useState(false)
   const [q5, setQ5] = useState(false)
   const [q6, setQ6] = useState(false)
   const [q7, setQ7] = useState(false)
   const [q8, setQ8] = useState(false)
   const [q9, setQ9] = useState(false)
   const [q10, setQ10] = useState(false)

   const setFalsePrevious = () => {
      if (previousCollapse.current !== null) previousCollapse.current(false)
   }

   useEffect(() => {
      return () => {
         setFalsePrevious()
      }
   }, [])

   const collapseStatus = (questionCollapse: Dispatch<SetStateAction<boolean>>) => {
      if (previousCollapse.current === questionCollapse) {
         questionCollapse((prev) => !prev)
      } else {
         setFalsePrevious()
         previousCollapse.current = questionCollapse
         questionCollapse(true)
      }
   }

   return (
      <div id='faq' className='mx-auto grid h-screen max-w-screen-lg items-center text-center'>
         <div className='mx-5 space-y-4'>
            <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
               FAQ
            </h2>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ1)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What services do you offer as a freelance web developer?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q1 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q1}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     As a freelance web developer, I offer a wide range of services including
                     website design and development, frontend and backend development, mobile web
                     app development, e-commerce solutions, custom software development, and more.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ2)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What technologies and programming languages are you proficient in?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q2 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q2}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     These are{' '}
                     <Link
                        href='/#technologies'
                        className=' text-indigo-300 underline decoration-wavy'
                     >
                        technologies that I specialize
                     </Link>{' '}
                     in
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ3)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;Can you provide examples of your previous work or portfolio?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q3 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q3}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     Yes, you can explore my portfolio to see examples of my previous projects and
                     get a better idea of my skills and expertise.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ4)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What is your development process like?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q4 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q4}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     My development process includes understanding your project requirements,
                     creating a detailed project plan, design and development, rigorous testing, and
                     final deployment. I follow agile methodologies to ensure the project runs
                     smoothly.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ5)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How long does it take to complete a typical project?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q5 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q5}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     The project timeline varies depending on the complexity and scope. I&apos;ll
                     provide you with a project timeline and milestones during our initial
                     discussions.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ6)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How do you handle project revisions or changes during development?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q6 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q6}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     I&apos;m open to making revisions and changes during the development process.
                     We&apos;ll discuss any changes, and I&apos;ll provide you with an updated
                     timeline and cost if applicable.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ7)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What is your pricing structure?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q7 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q7}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     My pricing structure is flexible and depends on the scope and complexity of the
                     project. We&apos;ll discuss your budget and project requirements during our
                     initial consultation.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ8)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How do you handle ongoing support and maintenance after project
                     completion?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q8 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q8}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     I offer ongoing support and maintenance services to ensure your website or
                     application continues to run smoothly. We can discuss a support plan that suits
                     your needs.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ9)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;Do you provide SEO services or optimize websites for search
                     engines?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q9 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q9}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     Yes, I offer SEO optimization services to improve your website&apos;s
                     visibility in search engines, increase organic traffic, and enhance your online
                     presence.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ10)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How can I get in touch with you to discuss my project?&quot;
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-indigo-300 transition-transform ${
                        q10 ? 'rotate-45' : 'rotate-0'
                     }`}
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

               <Collapse unmountOnExit in={q10}>
                  <p className='mx-5 text-left text-base text-slate-400'>
                     You can easily get in touch with me through the contact form on my website or
                     by sending me an email. I&apos;ll respond promptly to schedule a consultation.
                  </p>
               </Collapse>
            </div>
         </div>
      </div>
   )
}

export default FAQ
