'use client'

// import Sidebar from './sidebar'
import LinksForDesktop from './headerLinksforDesktop'
import { useState, useEffect } from 'react'

const Header = () => {
   const [enterEffect, setEnterEffect] = useState(0)

   useEffect(() => {
      setEnterEffect(1)
   }, [])

   return (
      <header className={'fixed text-right top-0 z-20 right-0 w-auto md:w-screen p-2 md:p-4 backdrop-blur-2xl md:backdrop-blur-md'}>
         <div>
            <div
               className='mx-auto justify-center lg:flex'
               style={{
                  transitionDuration: '1s',
                  transitionDelay: '3s',
                  transform: enterEffect ? 'translateY(0px)' : 'translateY(-10px)',
                  opacity: enterEffect,
               }}
            >
               <LinksForDesktop />
            </div>
            {/* <Sidebar /> */}
         </div>
      </header>
   )
}

export default Header
