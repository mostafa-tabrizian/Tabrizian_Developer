import User from '@/lib/user'
import Link from 'next/link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import LogoutButton from './components/logoutButton'

export const metadata = {
   title: 'مصطفی تبریزیان | پنل ادمین',
}

export const revalidate = 0

const AdminPanel = async () => {
   const user = await User()

   return (
      <div className='mx-6 my-16 space-y-10'>
         <Breadcrumbs aria-label='breadcrumb'>
            <Link className='text-gray-400' href='/'>
               صفحه اصلی
            </Link>
            <h5 className='font-semibold'>ادمین</h5>
         </Breadcrumbs>

         <div className='text-center'>
            <h1 className='yekan font-semibold'> {user.username} </h1>
            <h2 className='ext-zinc-400 text-base'> به پنل ادمین خوش آمدید </h2>
         </div>

         <div className='mx-auto max-w-sm space-y-4 rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-10'>
            <div className='rounded-lg bg-white px-2 py-2 transition-all hover:border-sky-600 hover:shadow-lg hover:shadow-sky-100'>
               <Link href='/--admin--/projects'>
                  <div className='flex items-center justify-end space-x-3'>
                     <span className='text-base text-black'>طرح ها</span>
                     <svg
                        className='h-6 w-6 text-black'
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
                  </div>
               </Link>
            </div>

            {/* <div className='bg-white rounded-lg py-2 px-2 hover:shadow-lg hover:shadow-sky-100 transition-all hover:border-sky-600'>
                  <Link href='/--admin--/statistic'>
                     <div className='flex justify-end space-x-3 items-center'>
                        <span className='text-base text-black'>آمار</span>
                        <svg
                           className='h-6 w-6 text-black'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           strokeWidth='2'
                           stroke='currentColor'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path stroke='none' d='M0 0h24v24H0z' />
                           <line x1='4' y1='19' x2='20' y2='19' />
                           <polyline points='4 15 8 9 12 11 16 6 20 10' />
                        </svg>
                     </div>
                  </Link>
               </div> */}

            <LogoutButton />
         </div>
      </div>
   )
}

export default AdminPanel
