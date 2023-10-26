'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Menu from '@mui/material/Menu'

const HeaderLinksforDesktop = () => {
   const [categories, setCategories] = useState<null | HTMLElement>(null)
   const [contactUsOptions, setContactUsOptions] = useState<null | HTMLElement>(null)

   useEffect(() => {
      return () => {
         setCategories(null)
         setContactUsOptions(null)
      }
   }, [])

   return (
      <ul className='hidden items-center justify-center space-x-10 text-gray-700 lg:col-span-4 lg:flex'>
         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/'>
                  <div className='relative flex'>
                     <span className='verdana cursor-pointer py-1 text-sm tracking-widest text-sky-100 after:absolute after:bottom-0 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'>
                        Home
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <Link href='/category/all?type=all&name=تمامی+طرح+ها'>
                  <div className='relative flex'>
                     <span className='verdana cursor-pointer py-1 text-sm tracking-widest text-sky-100 after:absolute after:bottom-0 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'>
                        Projects
                     </span>
                  </div>
               </Link>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <button onClick={(e) => setCategories(e.currentTarget)} className='relative flex'>
                  <span className='verdana cursor-pointer py-1 text-sm tracking-widest text-sky-100 after:absolute after:bottom-0 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'>
                     Category
                  </span>
               </button>

               <Menu
                  id='fade-menu'
                  MenuListProps={{
                     'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={categories}
                  open={Boolean(categories)}
                  onClose={() => setCategories(null)}
               >
                  <ul className='space-y-4 p-3'>
                     <li className='flex items-center'>
                        <Link
                           id='Category'
                           className='flex items-center'
                           href='/category/slug?type=category&name=name'
                        >
                           <p className='px-2 text-sm font-semibold'>{'category.name'}</p>
                        </Link>
                     </li>
                  </ul>
               </Menu>
            </div>
         </li>

         <li className='block '>
            <div className='text-gray-700'>
               <button
                  onClick={(e) => setContactUsOptions(e.currentTarget)}
                  className='relative flex'
               >
                  <span className='verdana cursor-pointer py-1 text-sm tracking-widest text-sky-100 after:absolute after:bottom-0 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'>
                     Contact
                  </span>
               </button>

               <Menu
                  id='fade-menu'
                  MenuListProps={{
                     'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={contactUsOptions}
                  open={Boolean(contactUsOptions)}
                  onClose={() => setContactUsOptions(null)}
               >
                  <ul className='space-y-4 p-3'>
                     <li>
                        <a
                           aria-label='ایتا'
                           id='eitaa'
                           rel='noreferrer'
                           className='flex items-center'
                           href='https://eitaa.com/aliasadi_graphics'
                           target='_blank'
                        >
                           <p className='px-2 font-semibold'>
                              <span className='text-sm'>ایتا</span>
                           </p>
                        </a>
                     </li>
                     <li>
                        <a
                           aria-label='اینستاگرام'
                           id='instagram'
                           rel='noreferrer'
                           className='flex items-center'
                           href='https://www.instagram.com/aliasadi_graphics'
                           target='_blank'
                        >
                           <p className='px-2 font-semibold'>
                              <span className='text-sm'>اینستاگرام</span>
                           </p>
                        </a>
                     </li>
                     <li>
                        <a
                           aria-label='تلگرام'
                           id='telegram'
                           rel='noreferrer'
                           className='flex items-center'
                           href='https://t.me/aliasadi_graphics'
                           target='_blank'
                        >
                           <p className='px-2 font-semibold'>
                              <span className='text-sm'>تلگرام</span>
                           </p>
                        </a>
                     </li>
                  </ul>
               </Menu>
            </div>
         </li>

         <li className='block'>
            <div className='text-gray-700'>
               <a id='about_us' href='#about-us'>
                  <div className='relative flex'>
                     <span className='verdana cursor-pointer py-1 text-sm tracking-widest text-sky-100 after:absolute after:bottom-0 after:left-1/2 after:mx-auto after:h-1 after:w-6 after:translate-x-[-50%] after:rounded-lg after:bg-blue-500 after:opacity-0 after:transition-opacity hover:after:opacity-100'>
                        About Me
                     </span>
                  </div>
               </a>
            </div>
         </li>
      </ul>
   )
}

export default HeaderLinksforDesktop
