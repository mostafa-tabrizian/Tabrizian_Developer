import Image from 'next/image'

const Contact = () => {
   return (
      <div id='contact' className='max-w-sreen-lg mx-auto grid h-screen items-center justify-center'>
         <div className='justify-center grid'>
            <div
               className='grid items-center justify-center rounded-3xl bg-violet-200 mx-auto'
               style={{ width: '263px', height: '263px' }}
            >
               <Image
                  className='mix-blend-darken'
                  src='/QRcode.jpg'
                  width={242}
                  height={242}
                  alt='qr code'
               />
            </div>
            <h2 className='verdna text-4xl font-bold mt-5'>
               Scan To Become <span className='bg-gradient-to-br from-violet-200 to-indigo-600 Audiowide bg-clip-text text-transparent'>Perfect</span>
            </h2>
         </div>
      </div>
   )
}

export default Contact
