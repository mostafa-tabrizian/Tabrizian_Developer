'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import langDecider from '@/lib/langDecider'
import Script from 'next/script'

const Footer = () => {
   const pathname = usePathname()
   const lang = pathname.split('/')[1]

   const enamadCode = `<img src="/enamad.png" width="100" height="110"
onclick="window.open(&quot;https://trustseal.enamad.ir/?id=418849&Code=Eo7J2kS8W2mesIgaswFJisbkJNmApqrQ&quot;, &quot;Popup&quot;,&quot;toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30&quot;)"
alt="enamad">`

   return (
      <footer className='mt-20 bg-gradient-to-r from-indigo-900 to-indigo-950 pb-10 pt-6 text-slate-100'>
         <div className='mb-8 mt-4 flex justify-center gap-10'>
            <div
               className='hover:cursor-pointer'
               dangerouslySetInnerHTML={{ __html: enamadCode }}
            />

            <div id='zarinpal' className='ZarinpalTrust'>
               <Image
                  src='/zarinTrust.png'
                  alt='زرین پال'
                  loading='lazy'
                  className='object-cover mix-blend-lighten hover:cursor-pointer'
                  width={77}
                  height={77}
               />
            </div>
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
