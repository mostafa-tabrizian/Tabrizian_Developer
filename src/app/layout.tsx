'use client'

import '@/app/styles/globals.scss'
import '@/app/styles/mui.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { SessionProvider } from 'next-auth/react'

// import Analytics from './GTM'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         <body className='styled-scrollbars'>
            {/* <Analytics /> */}

            <GoogleReCaptchaProvider
               reCaptchaKey='6LfM7AspAAAAALU7pRetpF1GHJM_HjI8j6JWU34y'
               scriptProps={{
                  async: false,
                  defer: false,
                  appendTo: 'head',
                  nonce: undefined,
               }}
            >
               <SessionProvider>
                  <main className='mx-auto overflow-x-hidden'>{children}</main>
               </SessionProvider>
            </GoogleReCaptchaProvider>
         </body>
      </html>
   )
}
