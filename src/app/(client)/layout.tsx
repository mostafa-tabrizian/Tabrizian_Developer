import { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'

import Footer from '../components/footer'

export const metadata: Metadata = {
   title: 'مصطفی تبریزیان',
   description: '// ! DESCRIPTION',
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
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
         />

         <main>{children}</main>

         <Footer />
      </>
   )
}
