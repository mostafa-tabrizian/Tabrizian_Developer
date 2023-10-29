import Image from 'next/image'

const Technologies = () => {
   return (
      <div id='technologies' className='mx-auto grid h-screen max-w-screen-lg items-center justify-center'>
         <div>
            <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
               Technologies
            </h2>
            <div className='grid grid-cols-2 gap-x-40'>
               <div className='space-y-10'>
                  <div>
                     <span className=''>JavaScript Technologies</span>
                     <div className='mt-3 flex space-x-10'>
                        <div className='text-center'>
                           <Image
                              className='mb-1 p-2'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #5FDAFB',
                              }}
                              src='/aboutReact.jpg'
                              alt='React'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>React</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #FDFDFD',
                              }}
                              src='/techNext.jpg'
                              alt='Next.js'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>Next.js</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #5FDAFB',
                              }}
                              src='/techTypescript.jpg'
                              alt='TypeScript'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>TypeScript</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <span className=''>Styles & UI</span>
                     <div className='mt-3 flex space-x-10'>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #24e1ff',
                              }}
                              src='/aboutTailwind.jpg'
                              alt='tailwind'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>Tailwind.css</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #FEFEFE',
                              }}
                              src='/techSass.jpg'
                              alt='sass'
                              width={107.61}
                              height={105}
                           />
                           <span className='text-xs'>Sass</span>
                        </div>
                        <div>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #007FFF',
                              }}
                              src='/techMui.jpg'
                              alt='mui'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>Material UI / MUI</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='space-y-10'>
                  <div>
                     <span className=''>Database</span>
                     <div className='mt-3 flex space-x-10'>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #00ED64',
                              }}
                              src='/aboutMongo.jpg'
                              alt='MongoDB'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>MongoDB</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #a3d1f6',
                              }}
                              src='/techMysql.jpg'
                              alt='MySQL'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>MySQL</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #2e5d8d',
                              }}
                              src='/techPostgre.jpg'
                              alt='PostqreSQL'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>PostqreSQL</span>
                        </div>
                     </div>
                  </div>
                  <div>
                     <span className=''>Cloud Services</span>
                     <div className='mt-3 flex space-x-10'>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #ff9a05',
                              }}
                              src='/techAWS.jpg'
                              alt='Amazon Cloud Services'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>Amazon WS</span>
                        </div>
                        <div className='text-center'>
                           <Image
                              className='mb-1'
                              style={{
                                 borderRadius: '1.88rem',
                                 border: '2px solid #57DFDD',
                              }}
                              src='/techLiara.jpg'
                              alt='Liara'
                              width={105}
                              height={105}
                           />
                           <span className='text-xs'>Liara</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Technologies
