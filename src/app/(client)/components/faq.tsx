'use client'

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'

import Collapse from '@mui/material/Collapse'

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
      <div className='mx-auto grid h-screen max-w-screen-lg items-center text-center'>
         <div className='mx-5 space-y-4'>
            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='categories'
                  onClick={() => collapseStatus(setQ1)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, veritatis.
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-sky-300 transition-transform ${
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
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quae odit maiores
                     magnam, ab sunt? Dolorem eaque voluptatibus quas delectus veritatis adipisci!
                     Aperiam, id odio? Quam dolore exercitationem sapiente dicta!
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='categories'
                  onClick={() => collapseStatus(setQ2)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, veritatis.
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-sky-300 transition-transform ${
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam consectetur
                     magnam veritatis, reprehenderit dolor? Amet iste deleniti aperiam, aliquid sit
                     impedit, vitae dignissimos possimus odit incidunt reprehenderit modi quod.
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='categories'
                  onClick={() => collapseStatus(setQ3)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, veritatis.
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-sky-300 transition-transform ${
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
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempora
                     vero ut ex. Vel sint esse dolores eius distinctio eos enim. Nihil ratione
                     dolorum, placeat doloribus quasi delectus voluptatem ut?
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='categories'
                  onClick={() => collapseStatus(setQ4)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, veritatis.
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-sky-300 transition-transform ${
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
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit doloribus, dolor
                     optio molestiae quo a distinctio vero ipsa quis eius voluptatum consectetur
                     praesentium aliquam laudantium iusto beatae consequuntur similique repellat?
                  </p>
               </Collapse>
            </div>

            <div className='relative rounded-lg bg-gradient-to-r from-purple-300/10 to-transparent px-2 py-4'>
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='categories'
                  onClick={() => collapseStatus(setQ5)}
               >
                  <span className='verdana ml-8 mr-5 flex w-full text-left text-base text-slate-100'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, veritatis.
                  </span>
                  <svg
                     className={`absolute right-0 h-5 w-5 text-sky-300 transition-transform ${
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis nemo
                     rerum dolorem deleniti pariatur repudiandae iusto non quia, in quas porro
                     explicabo earum quod aperiam eaque sint, commodi perferendis.
                  </p>
               </Collapse>
            </div>
         </div>
      </div>
   )
}

export default FAQ
