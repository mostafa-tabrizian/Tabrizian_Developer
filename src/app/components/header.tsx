'use client'

import Sidebar from './sidebar'
import LinksForDesktop from './headerLinksforDesktop'
import { usePathname } from 'next/navigation'

const Header = () => {
   const pathname = usePathname()
   const lang = pathname.split('/')[1]

   return (
      <header className='absolute left-0 top-0 z-20 mt-5 w-screen'>
         <div className='mx-auto justify-center lg:flex'>
            <LinksForDesktop lang={lang} />
            <Sidebar lang={lang} />
         </div>
      </header>
   )
}

export default Header
