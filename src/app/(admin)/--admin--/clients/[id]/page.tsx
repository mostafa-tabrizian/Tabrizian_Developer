import Link from 'next/link'

import dbConnect from '@/lib/dbConnect'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Client from '@/models/client'
import DetailForm from '../components/detailForm'

export const metadata = {
   title: 'Admin Panel | Client',
}

const clientPage = async ({ params: { id } }: { params: { id: string } }) => {
   const addingNewClient = id === 'new'

   let client = null

   try {
      if (!addingNewClient) {
         await dbConnect()
         client = await Client.findById(id)
      }
   } catch (error) {
      console.error('Error fetching data:', error)
      return
   }

   return (
      <div className='relative mx-6 my-16'>
         <div className='mx-6 my-16 max-w-screen-xl space-y-10 md:mx-auto'>
            {addingNewClient || client ? (
               <>
                  <Breadcrumbs aria-label='breadcrumb'>
                     <Link className='text-gray-600' href='/'>
                        Home
                     </Link>
                     <Link className='text-gray-600' href='/--admin--'>
                        Admin
                     </Link>
                     <Link className='text-gray-600' href='/--admin--/clients'>
                        Clients
                     </Link>
                     <h5 className='text-gray-400'>
                        {addingNewClient ? 'Adding New Client' : String(client._id)}
                     </h5>
                  </Breadcrumbs>

                  <div className='mx-auto max-w-screen-md'>
                     <Link href='/--admin--/clients/new'>
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
                        addingNewClient={addingNewClient}
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

export default clientPage
