import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
   return (
      <footer className='bg-gradient-to-r from-indigo-900 to-indigo-950 pb-10 pt-6 mt-20 text-slate-100'>
         <div className=' mx-auto max-w-screen-lg'>
            <div className='mb-5 grid grid-cols-3'>
               <div>logo</div>
               <div className='flex justify-between gap-5'>
                  <Link href='#'>
                     <span className='text-sm'>Home</span>
                  </Link>
                  <Link href='#'>
                     <span className='text-sm'>Projects</span>
                  </Link>
                  <Link href='#'>
                     <span className='text-sm'>Category</span>
                  </Link>
                  <Link href='#'>
                     <span className='text-sm'>Contact us</span>
                  </Link>
               </div>
               <div className='ml-auto flex gap-5'>
                  <a href='@' target='_blank' rel='noreferrer'>
                     <span className='text-sm'>@</span>
                  </a>
                  {/* Telegram */}
                  <a href='@' target='_blank' rel='noreferrer'>
                     <span className='text-sm'>@</span>
                  </a>
                  {/* Instagram */}
                  <a href='@' target='_blank' rel='noreferrer'>
                     <span className='text-sm'>@</span>
                  </a>
                  {/* Eitaa */}
                  <a href='@' target='_blank' rel='noreferrer'>
                     <span className='text-sm'>@</span>
                  </a>
                  {/* Linkedin */}
                  <a href='@' target='_blank' rel='noreferrer'>
                     <span className='text-sm'>@</span>
                  </a>
                  {/* Github */}
               </div>
            </div>
            <p className='verdana mt-1 text-center text-xs text-slate-500'>
               {/* © تمامی حقوق این وب سایت برای مصطفی تبریزیان محفوظ است */}© All rights of this
               website are reserved for Mustafa Tabrizian
            </p>
         </div>
      </footer>
   )
}

export default Footer
