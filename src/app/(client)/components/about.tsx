import Image from 'next/image'

const About = () => {
   return (
      <div className='mx-auto grid h-screen max-w-screen-xl -translate-y-14 grid-cols-2 items-center gap-60'>
         <div className='space-y-10'>
            <div className='space-y-5'>
               <h2 className='Audiowide text-sky-300'>Our Vision</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ullam quos natus
                  culpa officiis eaque illo. Delectus minus sit porro vitae eaque aliquid, quam
                  molestias aspernatur alias impedit accusamus nam?
               </p>
            </div>
            <div className='space-y-5'>
               <h2 className='Audiowide text-sky-300'>Our Mission</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ullam quos natus
                  culpa officiis eaque illo. Delectus minus sit porro vitae eaque aliquid, quam
                  molestias aspernatur alias impedit accusamus nam?
               </p>
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
               className='animate-wave absolute -bottom-14 right-6 border-2 border-sky-400 bg-gradient-to-t from-black to-blue-900 p-2'
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
               className='animate-wave absolute -bottom-40 right-1/2 border-2 border-sky-400'
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
