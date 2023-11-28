'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
   const [loading, setLoading] = useState(false)

   const handleLogout = () => {
      setLoading(true)
      signOut({ callbackUrl: '/' })
   }

   return (
      <div className='rounded-lg bg-white px-2 py-2 transition-all hover:cursor-pointer hover:border-rose-600 hover:shadow-lg hover:shadow-rose-100'>
         {loading ? (
            <div className='mx-auto flex py-2'>
               <svg
                  className='mx-auto h-6 w-6 animate-spin text-red-600'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
               >
                  {' '}
                  <path stroke='none' d='M0 0h24v24H0z' />{' '}
                  <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
               </svg>
            </div>
         ) : (
            <button disabled={loading} onClick={handleLogout}>
               <div className='flex items-center  space-x-3'>
                  <svg
                     className='h-7 w-7 text-rose-600'
                     width='24'
                     height='24'
                     viewBox='0 0 24 24'
                     strokeWidth='2'
                     stroke='currentColor'
                     fill='none'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     {' '}
                     <path stroke='none' d='M0 0h24v24H0z' />{' '}
                     <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />{' '}
                     <path d='M7 12h14l-3 -3m0 6l3 -3' />
                  </svg>
                  <span className='verdana text-base text-rose-600'>Logout</span>
               </div>
            </button>
         )}
      </div>
   )
}

export default LogoutButton
