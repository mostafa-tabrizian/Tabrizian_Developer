import { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import Header from '@/app/components/header'
// import Footer from '@/app/components/footer'

export const metadata: Metadata = {
   manifest: 'https://tabriziancodes.ir/site.webmanifest',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <ToastContainer
            position='top-center'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
         />

         <Header />

         <main>{children}</main>

         {/* <Footer /> */}
      </>
   )
}
