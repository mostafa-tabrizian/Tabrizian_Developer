'use client'

import '@/app/styles/globals.scss'
import '@/app/styles/mui.scss'
import 'react-toastify/dist/ReactToastify.min.css'

import { SessionProvider } from 'next-auth/react'
// import Script from 'next/script'

// import Analytics from './GTM'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang='en'>
         {/* <>
            <Script id='raychat-widget' strategy='lazyOnload'>
               {`
                  window.RAYCHAT_TOKEN = "2b598694-578b-4800-bfed-87f52429b800";
                  (function () {
                     var d = document;
                     var s = d.createElement("script");
                     s.src = "https://widget-react.raychat.io/install/widget.js";
                     s.async = 1;
                     d.getElementsByTagName("head")[0].appendChild(s);
                  })();
               `}
            </Script>
         </> */}

         <body className='styled-scrollbars'>
            {/* <Analytics /> */}

            <SessionProvider>
               <main className='mx-auto overflow-x-hidden'>{children}</main>
            </SessionProvider>
         </body>
      </html>
   )
}
