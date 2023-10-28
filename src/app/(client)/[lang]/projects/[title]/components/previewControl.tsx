const PreviewControl = () => {
   return (
      <div className='relative bottom-0 right-0 top-12 sm:top-8 mx-auto my-5 flex w-full items-center justify-center gap-12 lg:top-20'>
         <button>
            <svg
               className='h-10 w-10 text-white'
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
               <rect x='7' y='4' width='10' height='16' rx='1' />{' '}
               <line x1='11' y1='5' x2='13' y2='5' /> <line x1='12' y1='17' x2='12' y2='17.01' />
            </svg>
         </button>
         <button>
            <svg
               className='h-10 w-10 text-white'
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
               <rect x='3' y='4' width='18' height='12' rx='1' />{' '}
               <line x1='7' y1='20' x2='17' y2='20' /> <line x1='9' y1='16' x2='9' y2='20' />{' '}
               <line x1='15' y1='16' x2='15' y2='20' />
            </svg>
         </button>
      </div>
   )
}

export default PreviewControl
