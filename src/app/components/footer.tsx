'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import langDecider from '@/lib/langDecider'
import Script from 'next/script'

const Footer = () => {
   const pathname = usePathname()
   const lang = pathname.split('/')[1]

   return (
      <footer className='mt-20 bg-gradient-to-r from-indigo-900 to-indigo-950 pb-10 pt-6 text-slate-100'>
            <div className='flex gap-10 justify-center mt-4 mb-8'>
               <a
                  referrerPolicy='origin'
                  target='_blank'
                  href='https://trustseal.enamad.ir/?id=418849&Code=Eo7J2kS8W2mesIgaswFJisbkJNmApqrQ'
                  rel='noreferrer'
               >
                  <Image
                     referrerPolicy='origin'
                     src='https://trustseal.enamad.ir/logo.aspx?id=418849&Code=Eo7J2kS8W2mesIgaswFJisbkJNmApqrQ'
                     alt='اینماد اعتماد'
                     loading='lazy'
                     className='object-cover aspect-square hover:cursor-pointer'
                     width={77}
                     height={77}
                     // @ts-ignore
                     code='Eo7J2kS8W2mesIgaswFJisbkJNmApqrQ'
                  />
               </a>

               <span id='PPTrust'>
                  <Script
                     src='https://statics.payping.ir/trust-v3.js'
                     // @ts-ignore
                     theme='light'
                     size='sm'
                     strategy='afterInteractive'
                  ></Script>
               </span>
            </div>

            {langDecider(
               lang,
               <p className='verdana mt-1 text-center text-xs text-slate-500'>
                  © All rights of this website are reserved for Mostafa Tabrizian
               </p>,
               <p className='yekan mt-1 text-center text-xs text-slate-500'>
                  © تمامی حقوق این وب سایت برای مصطفی تبریزیان محفوظ است
               </p>,
            )}
      </footer>
   )
}

export default Footer
