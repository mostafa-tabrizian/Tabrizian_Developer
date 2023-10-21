import Header from '@/app/components/header'

const Landpage = () => {
   return (
      <div
         className='h-screen w-screen'
         style={{
            // eslint-disable-next-line quotes
            background: "url('/landpage.jpg') no-repeat center center",
            backgroundSize: 'cover',
         }}
      >
         <Header />

         <div className='mx-auto grid h-full max-w-screen-lg items-center'>
            <div className='space-y-10'>
               <h1
                  style={{ fontSize: '5rem' }}
                  className=' relative z-0 leading-tight after:absolute after:-left-6 after:top-0 after:-z-10 after:h-full after:w-16 after:bg-sky-950'
               >
                  BECOME <br /> THE <br /> PROFESSIONAL
               </h1>
               <h2 className='-ml-6 border-l-8 border-sky-900 pl-5'>
                  Only the survival thing to become professional <br /> Only who try SAMRT not hard
               </h2>
               <button className='rounded-lg border px-20 py-2'>
                  <span className='verdana text-sm tracking-widest'>LET&apos;S GO</span>
               </button>
            </div>
         </div>

         <div className='absolute left-20 top-0 grid h-full items-center'>
            <div className='grid w-10 space-y-2 border-t-8 border-sky-900 pt-2'>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
               <span className='h-3 w-3 rounded-full bg-white'></span>
            </div>
         </div>
      </div>
   )
}

export default Landpage
