import Image from 'next/image'

const About = () => {
   return (
      <div
         id='about'
         className='mx-auto grid min-h-screen my-20 max-w-screen-xl -translate-y-14 grid-cols-2 items-center gap-x-60'
      >
         <div className='space-y-10'>
            <div className='space-y-5'>
               <div className='space-y-3'>
                  <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                     Hello there ! <span style={{ color: 'initial' }}>🖐🏻</span>
                  </h2>
                  <p className='verdana'>
                     I am <span className='text-indigo-400'>Mustafa</span>, 22, a{' '}
                     <span className='text-indigo-400'>full-stack web developer</span> with a true
                     passion for crafting high-performance websites. <br /> <br />
                  </p>
               </div>

               <div className='space-y-3'>
                  <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                     What I Use
                  </h2>
                  <p className='verdana'>
                     I use cutting-edge technologies such as{' '}
                     <span className='text-indigo-400'>Next.js, React, and TypeScript</span> to
                     ensure that you and your users have a{' '}
                     <span className='text-indigo-400'>seamless and enjoyable experience</span>.
                  </p>
               </div>

               <div className='space-y-3'>
                  <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                     My Aim
                  </h2>
                  <p className='verdana'>
                     My ultimate aim is to{' '}
                     <span className='text-indigo-400'>surpass your expectations</span> and help you{' '}
                     <span className='text-indigo-400'>achieve your goals</span>. <br />
                     I have successfully completed numerous projects, including creating stunning
                     online stores and various platforms, and I always strive to deliver exceptional
                     outcomes. <br />
                  </p>
               </div>

               <div className='space-y-3'>
                  <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                     Me & You
                  </h2>
                  <p className='verdana'>
                     When you choose me as your developer, you can rest assured that you will{' '}
                     <span className='text-indigo-400'>receive nothing but the best.</span> <br />
                     I prioritize speed and responsiveness, resulting in an optimum overall
                     experience for your users. <br />I also listen attentively to your feedback,
                     providing regular updates throughout the project to ensure that we{' '}
                     <span className='text-indigo-400'>achieve your vision</span> and complete the
                     project successfully. <br />
                  </p>
               </div>

               <div className='space-y-3'>
                  <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                     What You Waiting?
                  </h2>
                  <p className='verdana'>
                     Let&apos;s collaborate to{' '}
                     <span className='text-indigo-400'>bring your brilliant ideas to life</span> and
                     embark on a journey of creativity and inspiration! <br />I am excited to hear
                     from you and see where our <span className='text-indigo-400'>partnership</span>{' '}
                     can take us.
                  </p>
               </div>
            </div>
         </div>
         <div className='relative'>
            <Image
               src='/aboutHero.jpg'
               width={424}
               height={530}
               alt='about hero'
               style={{
                  borderRadius: '4.6rem',
                  boxShadow: 'rgb(30 52 99) -7px -7px 20px, #2e1e4b 5px 7px 22px',
               }}
            />

            <Image
               src='/aboutMongo.jpg'
               width={133}
               height={134}
               alt='about mongo'
               className='animate-wave absolute -right-16 -top-8 border-2 border-green-400'
               style={{
                  animationDuration: '3.5s',
                  borderRadius: '33px',
                  boxShadow: '0px 4px 63px -14px #00ED64',
               }}
            />

            <div
               style={{
                  borderRadius: '1.88rem',
                  boxShadow: 'black 0 4px 15px 5px',
                  width: '262px',
                  height: '262px',
                  animationDuration: '3s',
               }}
               className='animate-wave absolute -bottom-16 -left-32 grid items-center justify-center bg-gradient-to-t from-black to-gray-800'
            >
               <Image
                  src='/aboutNext.jpg'
                  width={235}
                  height={82.65}
                  alt='about next'
                  className='mix-blend-screen'
               />
            </div>

            <Image
               src='/aboutReact.jpg'
               width={131}
               height={137}
               alt='about react'
               className='animate-wave absolute -bottom-14 right-6 border-2 border-indigo-400 bg-gradient-to-t from-black to-blue-900 p-2'
               style={{
                  borderRadius: '33px',
                  boxShadow: '0px 4px 63px -14px #74DFFC',
                  animationDuration: Math.random() * 4 + 1 + 's',
               }}
            />

            <Image
               src='/techTypescript.jpg'
               width={105}
               height={105}
               alt='about tailwind'
               className='animate-wave absolute -bottom-40 right-1/2 border-2 border-indigo-400'
               style={{
                  borderRadius: '30px',
                  boxShadow: '0px 4px 63px -14px #16BECB',
                  animationDuration: '2s',
               }}
            />
         </div>
      </div>
   )
}

export default About
