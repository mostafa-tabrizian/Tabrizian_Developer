import langDecider from '@/lib/langDecider'
import Image from 'next/image'

const Technologies = ({ lang }: { lang: string }) => {
   return (
      <div
         id='technologies'
         className='mx-auto grid min-min-h-screen mt-60 max-w-screen-lg items-center justify-center'
      >
         {langDecider(
            lang,
            <div>
               <h2 className='Audiowide mx-auto w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
                  Technologies
               </h2>
               <div>
                  <div className='grid md:grid-cols-2 md:gap-x-20 lg:gap-x-40'>
                     <div className='mt-16'>
                        <span>JavaScript Technologies</span>
                        <div className='mt-3 flex space-x-5'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1 p-2'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #5FDAFB',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/react.jpg'
                                 alt='React'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>React</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #FDFDFD',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/next2.jpg'
                                 alt='Next.js'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Next.js</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #5FDAFB',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/typescript.jpg'
                                 alt='TypeScript'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>TypeScript</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className=''>Styles & UI</span>
                        <div className='mt-3 flex space-x-5'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #24e1ff',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/tailwind.jpg'
                                 alt='tailwind'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Tailwind.css</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #FEFEFE',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/sass.jpg'
                                 alt='sass'
                                 width={107.61}
                                 height={105}
                              />
                              <span className='text-xs'>Sass</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #007FFF',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mui.jpg'
                                 alt='mui'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Material UI / MUI</span>
                           </div>
                        </div>
                     </div>

                     <div className='mt-16'>
                        <span className=''>Database</span>
                        <div className='mt-3 flex space-x-5'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #00ED64',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mongo.jpg'
                                 alt='MongoDB'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>MongoDB</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #a3d1f6',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mySql.jpg'
                                 alt='MySQL'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>MySQL</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #2e5d8d',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/postgreSql.jpg'
                                 alt='PostqreSQL'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>PostqreSQL</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className=''>Cloud Services</span>
                        <div className='mt-3 flex space-x-5'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #ff9a05',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/aws.jpg'
                                 alt='Amazon Cloud Services'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Amazon WS</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #57DFDD',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/liara.jpg'
                                 alt='Liara'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Liara</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span>Additional</span>
                        <div className='mt-3 flex space-x-5'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #ff9a05',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/ga.jpg'
                                 alt='Google Analytics'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Google Analytics</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #4286f5',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/gtm.jpg'
                                 alt='Google Tag Manager'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Google Tag Manager</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #362e56',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/sentry.jpg'
                                 alt='Sentry'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Sentry</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>,
            <div>
               <h2 className='yekanBold mx-auto w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-[1.5rem] text-transparent'>
                  تکنولوژی ها
               </h2>
               <div>
                  <div className='rtl grid md:grid-cols-2 md:gap-x-20 lg:gap-x-40'>
                     <div className='mt-16'>
                        <span className='yekanBold'>تکونولوژی های JavaScript</span>
                        <div className='mt-3 flex space-x-5 space-x-reverse'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1 p-2'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #5FDAFB',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/react.jpg'
                                 alt='React'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>React</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #FDFDFD',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/next2.jpg'
                                 alt='Next.js'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Next.js</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #5FDAFB',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/typescript.jpg'
                                 alt='TypeScript'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>TypeScript</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className='yekanBold'>استایل ها و رابط کاربری</span>
                        <div className='mt-3 flex space-x-5 space-x-reverse'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #24e1ff',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/tailwind.jpg'
                                 alt='tailwind'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Tailwind.css</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #FEFEFE',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/sass.jpg'
                                 alt='sass'
                                 width={107.61}
                                 height={105}
                              />
                              <span className='text-xs'>Sass</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #007FFF',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mui.jpg'
                                 alt='mui'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Material UI / MUI</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className='yekanBold'>دیتابیس / پایگاه داده</span>
                        <div className='mt-3 flex space-x-5 space-x-reverse'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #00ED64',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mongo.jpg'
                                 alt='MongoDB'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>MongoDB</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #a3d1f6',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mySql.jpg'
                                 alt='MySQL'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>MySQL</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #2e5d8d',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/postgreSql.jpg'
                                 alt='PostqreSQL'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>PostqreSQL</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className='yekanBold'>خدمات ابری</span>
                        <div className='mt-3 flex space-x-5 space-x-reverse'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #ff9a05',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/aws.jpg'
                                 alt='Amazon Cloud Services'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Amazon WS</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #57DFDD',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/liara.jpg'
                                 alt='Liara'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Liara</span>
                           </div>
                        </div>
                     </div>
                     <div className='mt-16'>
                        <span className='yekanBold'>افزوده های دیگر</span>
                        <div className='mt-3 flex space-x-5 space-x-reverse'>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #ff9a05',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/ga.jpg'
                                 alt='Google Analytics'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Google Analytics</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #4286f5',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/gtm.jpg'
                                 alt='Google Tag Manager'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Google Tag Manager</span>
                           </div>
                           <div className='h-20 w-20 text-center md:h-24 md:w-24'>
                              <Image
                                 className='mb-1'
                                 style={{
                                    borderRadius: '1.88rem',
                                    border: '2px solid #362e56',
                                 }}
                                 src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/sentry.jpg'
                                 alt='Sentry'
                                 width={105}
                                 height={105}
                              />
                              <span className='text-xs'>Sentry</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>,
         )}
      </div>
   )
}

export default Technologies
