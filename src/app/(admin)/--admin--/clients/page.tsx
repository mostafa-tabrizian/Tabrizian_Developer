import Link from 'next/link'

import dbConnect from '@/utils/dbConnect'
import Client from '@/models/client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import ClientsTable from './components/clientsTable'

export const revalidate = 0

export const metadata = {
   title: 'Admin Panel | Client Table',
}

const getClients = async () => {
   await dbConnect()
   const clients = await Client.find()

   return clients.reverse()
}

const Adminclients = async () => {
   const clients = await getClients()

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
               <h5 className='verdana text-gray-400'>Clients</h5>
            </Breadcrumbs>

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

            <ClientsTable clients={JSON.parse(JSON.stringify(clients))} />
         </>
      </div>
   )
}

export default Adminclients
