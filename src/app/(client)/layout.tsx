'use client'

import { ToastContainer } from 'react-toastify'

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

         <GoogleReCaptchaProvider
            reCaptchaKey='6LfM7AspAAAAALU7pRetpF1GHJM_HjI8j6JWU34y'
            scriptProps={{
               async: false,
               defer: false,
               appendTo: 'head',
               nonce: undefined,
            }}
            language='fa'
            container={{
               element: 'RecaptchaId',
               parameters: {
                  badge: 'bottomleft',
                  theme: 'dark',
               },
            }}
         >
            <main className='rtl'>{children}</main>
            <div id='RecaptchaId'></div>
         </GoogleReCaptchaProvider>
         <Footer />
      </>
   )
}
