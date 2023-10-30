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
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What <span className='text-indigo-300 mx-2'>services</span> do you offer as a freelance web developer?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     As a freelance web developer, I offer website design and development, frontend
                     and backend development, mobile web app development, e-commerce solutions, and
                     custom software development services based on React/Next.js technology
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ2)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What <span className='text-indigo-300 mx-2'>technologies</span> and programming languages are you proficient in?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     These are{' '}
                     <Link
                        href='/#technologies'
                        className=' text-base text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4'
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
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;Can you provide <span className='text-indigo-300 mx-2'>examples</span> of your previous work or portfolio?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     Sure, you can explore my portfolio to see{' '}
                     <Link
                        href='/#projects'
                        className=' text-base text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4'
                     >
                        examples of my previous projects
                     </Link>{' '}
                     and get a better idea of my skills and expertiss.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ4)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What is your development <span className='text-indigo-300 mx-2'>process</span> like?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     My development process involves understanding project requirements, creating a
                     detailed plan, design and development, rigorous testing, SEO optimization, and
                     deployment. I follow agile methodologies to ensure smooth project management.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ5)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How <span className='text-indigo-300 mx-2'>long</span> does it take to complete a typical project?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     The timeline for the project will depend on its complexity and scope. I will
                     provide you with a detailed project timeline and milestones during our initial
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
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How do you handle project <span className='text-indigo-300 mx-2'>revisions or changes</span> during development?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     I am willing to make revisions and changes during the development process for
                     up to 3 requests. This means that you can ask me to change anything three times
                     without incurring any additional cost. However, after the third request, there
                     will be a cost associated with any further changes. We will discuss any changes
                     you would like to make, and I will provide you with an updated timeline and
                     cost estimate if applicable.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ7)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;What is your <span className='text-indigo-300 mx-2'>pricing</span> structure?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     During our initial consultation, we&apos;ll discuss your project requirements
                     and budget to determine a flexible pricing structure that aligns with the scope
                     and complexity of the project.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ8)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How do you handle ongoing <span className='text-indigo-300 mx-2'>support</span> and maintenance after project
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     Based on the package you order, I am happy to provide free project support for
                     up to 12 months. I offer ongoing maintenance and support services that ensure
                     the smooth running of your website or application. We can work together to
                     create a support plan that best suits your needs.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ9)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;Do you provide <span className='text-indigo-300 mx-2'>SEO</span> services or optimize websites for search
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     Yes, I provide SEO consultation and technical SEO optimization services to
                     improve your website&apos;s visibility in search engines, increase organic
                     traffic, and enhance your online presence
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ10)}
               >
                  <span className='verdana mx-5 flex w-full text-left text-base text-slate-100'>
                     &quot;How can I <span className='text-indigo-300 mx-2'>get in touch</span> with you to discuss my project?&quot;
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
                  <p className='mx-5 mt-4 text-left text-base text-slate-400'>
                     You can reach me through{' '}
                     <Link
                        href='/#contact'
                        className=' text-base text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4'
                     >
                        these social media platform
                     </Link>{' '}
                     or by{' '}
                     <a
                        href='mailto:tabrizian.codes@gmail.com'
                        className='text-base text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4'
                     >
                        email
                     </a>
                     . I&apos;ll promptly respond to schedule a consultation.
                  </p>
               </Collapse>
            </div>
         </div>
      </div>
   )
}

export default FAQ
