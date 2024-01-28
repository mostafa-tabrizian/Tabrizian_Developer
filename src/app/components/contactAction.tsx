import { FaInstagram } from 'react-icons/fa'
import WavesSvg from '@/app/icons/wavesSvg'

const ContactAction = ({ title, body }: { title: string; body: string }) => {
   return (
      <div className='relative z-10 my-10 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 to-slate-900 px-4 py-16 md:rounded-3xl md:px-16 md:py-8'>
         <div className='grid-cols-2 md:grid md:gap-x-20'>
            <div>
               <h2 className=' yekanBold text-lg md:text-3xl'>{title}</h2>
               <p className='yekan mb-10 mt-5 text-base'>{body}</p>
            </div>
            <div className='relative z-10'>
               <div className='yekan mb-5 flex'>
                  <input
                     type='text'
                     className=' h-11 w-full rounded-r-lg pr-5 text-base text-black placeholder:text-sm'
                     placeholder='لطفا شماره تماس خود را وارد کنید...'
                  />
                  <button className='yekan w-24 rounded-l-lg bg-slate-900 px-2 text-base shadow-lg shadow-slate-950/50 transition-all hover:scale-105 active:bg-slate-800 md:w-40'>
                     ثبت
                  </button>
               </div>
               <div className='relative grid grid-cols-3'>
                  <a
                     target='_blank'
                     rel='noreferrer'
                     href='https://t.me/Tabrizian_dev'
                     className='ml-3 grid items-center justify-center rounded-md border border-slate-300 p-2 text-white transition-all hover:scale-105 hover:bg-slate-100/10 active:bg-slate-100/30'
                  >
                     <svg
                        className='h-8 w-8'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        {' '}
                        <path stroke='none' d='M0 0h24v24H0z' />{' '}
                        <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                     </svg>
                  </a>
                  <a
                     href='#'
                     target='_blank'
                     className='grid items-center justify-center rounded-md border border-slate-300 p-2 text-white transition-all hover:scale-105 hover:bg-slate-100/10 active:bg-slate-100/30'
                     rel='noreferrer'
                  >
                     <FaInstagram className='h-8 w-8' />
                  </a>
                  <a
                     href='mailto:tabrizian.codes@gmail.com'
                     target='_blank'
                     className='mr-3 grid items-center justify-center rounded-md border border-slate-300 p-2 text-white transition-all hover:scale-105 hover:bg-slate-100/10 active:bg-slate-100/30'
                     rel='noreferrer'
                  >
                     <svg className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <WavesSvg />
      </div>
   )
}

export default ContactAction
