'use client'

import '@/app/styles/globals.scss'
import '@/app/styles/mui.scss'
import 'react-toastify/dist/ReactToastify.min.css'

import { SessionProvider } from 'next-auth/react'

// import Analytics from './GTM'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body>
            {/* <Analytics /> */}
            <SessionProvider>
               <main className='mx-auto overflow-x-hidden'>{children}</main>
            </SessionProvider>
         </body>
      </html>
   )
}
