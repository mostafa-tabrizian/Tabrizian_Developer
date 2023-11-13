import User from '@/lib/user'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import LogoutButton from './components/logoutButton'

export const metadata = {
   title: 'Admin Panel',
}

export const revalidate = 0

const AdminPanel = async () => {
   const user = await User()

   return (
      <div className='mx-6 my-16 space-y-10'>
         <Breadcrumbs aria-label='breadcrumb'>
            <Link href='/'>
               <span className='verdana text-gray-600'>Home</span>
            </Link>
            <h5 className='verdana text-gray-400'>Admin</h5>
         </Breadcrumbs>

         <div className='text-center'>
            <h1 className='verdana verdana font-semibold'> {user.username} </h1>
            <h2 className='ext-zinc-400 verdana text-base'> Welcome My Dear Lord </h2>
         </div>

         <div className='mx-auto max-w-sm space-y-4 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-10'>
            <div className='rounded-lg bg-white px-2 py-2 transition-all hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100'>
               <Link href='/--admin--/projects'>
                  <div className='flex items-center space-x-3'>
                     <svg
                        className='h-6 w-6 text-indigo-900'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                        />
                     </svg>
                     <span className='verdana text-base text-indigo-900'>Projects</span>
                  </div>
               </Link>
            </div>

            <div className='rounded-lg bg-white px-2 py-2 transition-all hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100'>
               <Link href='/--admin--/blogs'>
                  <div className='flex items-center space-x-3'>
                     <svg
                        className='h-6 w-6 text-indigo-900'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
                        />
                     </svg>
                     <span className='verdana text-base text-indigo-900'>Blogs</span>
                  </div>
               </Link>
            </div>

            <div className='rounded-lg bg-white px-2 py-2 transition-all hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-100'>
               <Link href='/--admin--/payments'>
                  <div className='flex items-center space-x-3'>
                     <svg
                        className='h-6 w-6 text-indigo-900'
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
                        <rect x='3' y='5' width='18' height='14' rx='3' />{' '}
                        <line x1='3' y1='10' x2='21' y2='10' />{' '}
                        <line x1='7' y1='15' x2='7.01' y2='15' />{' '}
                        <line x1='11' y1='15' x2='13' y2='15' />
                     </svg>
                     <span className='verdana text-base text-indigo-900'>Payment</span>
                  </div>
               </Link>
            </div>

            <LogoutButton />
         </div>
      </div>
   )
}

export default AdminPanel
