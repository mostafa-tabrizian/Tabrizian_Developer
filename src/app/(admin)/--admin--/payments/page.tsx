import Link from 'next/link'

import dbConnect from '@/utils/dbConnect'
import Payment from '@/models/payment'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import PaymentsTable from './components/paymentsTable'

export const revalidate = 0

export const metadata = {
   title: 'Admin Panel | Payment Table',
}

const getPayments = async () => {
   await dbConnect()
   const payments = await Payment.find()

   return payments.reverse()
}

const Adminpayments = async () => {
   const payments = await getPayments()

   return (
      <div className='relative mx-6 my-16 max-w-screen-lg space-y-10 md:mx-auto'>
         <>
            <Breadcrumbs aria-label='breadcrumb'>
               <Link className='verdana text-gray-600' href='/'>
                  Home
               </Link>
               <Link className='verdana text-gray-600' href='/--admin--'>
                  Admin
               </Link>
               <h5 className='verdana text-gray-400'>Payments</h5>
            </Breadcrumbs>

            <Link href='/--admin--/payments/new'>
               <button className='fixed bottom-10 right-5 z-10 rounded-full border-2 border-indigo-500 bg-white p-3'>
                  <svg
                     className='h-6 w-6 text-indigo-500'
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
            </Link>

            <PaymentsTable payments={JSON.parse(JSON.stringify(payments))} />
         </>
      </div>
   )
}

export default Adminpayments
