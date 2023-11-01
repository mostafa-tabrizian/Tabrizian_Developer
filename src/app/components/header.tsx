'use client'

import Sidebar from './sidebar'
import LinksForDesktop from './headerLinksforDesktop'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import langDecider from '@/lib/langDecider'

const Header = () => {
   const pathname = usePathname()
   const lang = pathname.split('/')[1]

   const [enterEffect, setEnterEffect] = useState(0)

   useEffect(() => {
      setEnterEffect(1)
   }, [])

   return (
      <header className={`fixed ${langDecider(lang, 'text-left', 'text-right')} top-0 z-20 w-screen p-4 backdrop-blur-md`}>
         <div>
            <div
               className='mx-auto justify-center lg:flex'
               style={{
                  transitionDuration: '1.5s',
                  transitionDelay: '3s',
                  transform: enterEffect ? 'translateY(0px)' : 'translateY(-10px)',
                  opacity: enterEffect,
               }}
            >
               <LinksForDesktop path={pathname} lang={lang} />
            </div>
            <Sidebar path={pathname} lang={lang} />
         </div>
      </header>
   )
}

export default Header
