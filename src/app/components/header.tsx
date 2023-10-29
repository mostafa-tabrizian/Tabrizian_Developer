import Sidebar from './sidebar'
import LinksForDesktop from './headerLinksforDesktop'

const Header = () => {
   return (
      <header className='absolute left-0 top-0 z-20 mt-5 w-screen'>
         <div className='mx-auto lg:flex justify-center'>
            <LinksForDesktop />
            <Sidebar />
         </div>
      </header>
   )
}

export default Header
