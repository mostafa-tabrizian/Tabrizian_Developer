import Link from 'next/link'

import dbConnect from '@/utils/dbConnect'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Payment from '@/models/payment'
import Client from '@/models/client'
import DetailForm from '../components/detailForm'

export const metadata = {
   title: 'Admin Panel | Payment',
}

const paymentPage = async ({ params: { id } }: { params: { id: string } }) => {
   await dbConnect()
   const payment = await Payment.findById(id)
   const client = await Client.findById(payment.client)

   return (
      <div className='relative mx-6 my-16'>
         <div className='mx-6 my-16 max-w-screen-xl space-y-10 md:mx-auto'>
            {payment ? (
               <>
                  <Breadcrumbs aria-label='breadcrumb'>
                     <Link className='text-gray-600' href='/'>
                        Home
                     </Link>
                     <Link className='text-gray-600' href='/--admin--'>
                        Admin
                     </Link>
                     <Link className='text-gray-600' href='/--admin--/payments'>
                        Payments
                     </Link>
                     <h5 className='text-gray-400'>{String(payment._id)}</h5>
                  </Breadcrumbs>

                  <div className='mx-auto max-w-screen-md'>
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

                     <DetailForm
                        payment={JSON.parse(JSON.stringify(payment))}
                        client={JSON.parse(JSON.stringify(client))}
                     />
                  </div>
               </>
            ) : (
               <h1>Item Not Found!</h1>
            )}
         </div>
      </div>
   )
}

export default paymentPage
