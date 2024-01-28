import { CgShapeCircle } from 'react-icons/cg'
import { FaInstagram } from 'react-icons/fa'

const Landpage = () => {
   return (
      <div id='landpage' className='relative mx-auto grid h-full items-center '>
         <div className='pb-40 backdrop-blur-md pl-8 rounded-2xl pr-7 after:absolute after:right-0 after:top-0 after:-z-10 after:h-full after:w-0.5 after:bg-gradient-to-b after:from-transparent after:to-violet-500 md:w-7/12'>
            <CgShapeCircle className='absolute -right-2 -top-2 h-5 w-5 text-gray-600' />
            <h1 className='yekanBold relative z-0 text-4xl leading-tight md:text-6xl md:leading-normal '>
               شروع رشد کسب و کار شما همینجاست... 🚀
            </h1>
            <h2 className='yekan relative mt-5 text-lg text-gray-500'>
               کد نویسی اختصاصی وب سایت فروشگاهی و شرکتی آینده‌ی شما با قدرتمند ترین تکنولوژی ها و
               کمترین زمان ممکن
            </h2>
            <div className='yekan mt-5 flex'>
               <input
                  type='text'
                  className=' h-11 w-full rounded-r-md pr-5 text-base text-black placeholder:text-sm'
                  placeholder=' لطفا شماره تماس خود را وارد کنید...'
               />
               <button className='yekan w-24 rounded-l-md bg-violet-600 px-2 text-base shadow-lg shadow-violet-900 transition-all hover:scale-105 active:bg-violet-700 md:w-40'>
                  ثبت
               </button>
            </div>
            <div className='grid grid-cols-3 items-center gap-3'>
               <span className='my-5 block h-[0.03rem] bg-gray-700' />
               <span className='yekan text-center text-xs text-gray-400'>یا بهمون پیام بده</span>
               <span className='my-5 block h-[0.03rem] bg-gray-700' />
            </div>
            <div className='mx-auto grid grid-cols-3'>
               <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://t.me/Tabrizian_dev'
                  className='mx-3 grid items-center justify-center rounded-md border border-violet-400 p-2 text-white transition-all hover:scale-105 hover:bg-violet-950/40 active:bg-violet-950/60'
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
                  href='https://t.me/Tabrizian_dev'
                  target='_blank'
                  className='mx-3 grid items-center justify-center rounded-md border border-violet-400 p-2 text-white transition-all hover:scale-105 hover:bg-violet-950/40 active:bg-violet-950/60'
                  rel='noreferrer'
               >
                  <FaInstagram className='h-8 w-8' />
               </a>
               <a
                  href='mailto:tabrizian.codes@gmail.com'
                  target='_blank'
                  className='mx-3 grid items-center justify-center rounded-md border border-violet-400 p-2 text-white transition-all hover:scale-105 hover:bg-violet-950/40 active:bg-violet-950/60'
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
         <span
            className='absolute -right-2/4 -top-full -z-10 rounded-full'
            style={{
               width: '1092px',
               height: '1092px',
               background: 'radial-gradient(48% 53% at 46% 48%, #7c3aed38 0%, transparent)',
            }}
         />
      </div>
   )
}

export default Landpage
