import { ToastContainer } from 'react-toastify'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <>
         <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            rtl
            theme='light'
         />

         <Header />

         <main className='rtl'>{children}</main>

         <Footer />
      </>
   )
}
