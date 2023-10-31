import langDecider from '@/lib/langDecider'
import Image from 'next/image'

const About = ({ lang }: { lang: string }) => {
   return (
      <div
         id='about'
         className={`mx-auto my-20 grid min-h-screen max-w-screen-xl -translate-y-14 items-center lg:grid-cols-2 lg:gap-x-20 xl:gap-x-60 ${langDecider(
            lang,
            '',
            'rtl',
         )}`}
      >
         <div className='order-2 space-y-10 lg:order-1'>
            {langDecider(
               lang,
               <div className='mx-7 space-y-5'>
                  <div className='grid grid-cols-3 gap-5'>
                     <div className='col-span-2 space-y-3'>
                        <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                           Hello there ! <span style={{ color: 'initial' }}>🖐🏻</span>
                        </h2>
                        <p className='verdana'>
                           I am <span className='text-indigo-400'>Mustafa</span>, 22, a{' '}
                           <span className='text-indigo-400'>full-stack web developer</span> with a
                           true passion for crafting high-performance websites. <br /> <br />
                        </p>
                     </div>

                     <Image
                        src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/tabrizian_.jpg'
                        width={160}
                        height={160}
                        className='rounded-lg'
                        alt='Mostafa Tabrizian'
                     />
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
                        <span className='text-indigo-400'>surpass your expectations</span> and help
                        you <span className='text-indigo-400'>achieve your goals</span>. <br />
                        I have successfully completed numerous projects, including creating stunning
                        online stores and various platforms, and I always strive to deliver
                        exceptional outcomes. <br />
                     </p>
                  </div>

                  <div className='space-y-3'>
                     <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        Me & You
                     </h2>
                     <p className='verdana'>
                        When you choose me as your developer, you can rest assured that you will{' '}
                        <span className='text-indigo-400'>receive nothing but the best.</span>{' '}
                        <br />
                        I prioritize speed and responsiveness, resulting in an optimum overall
                        experience for your users. <br />I also listen attentively to your feedback,
                        providing regular updates throughout the project to ensure that we{' '}
                        <span className='text-indigo-400'>achieve your vision</span> and complete
                        the project successfully. <br />
                     </p>
                  </div>

                  <div className='space-y-3'>
                     <h2 className='Audiowide w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        What You Waiting?
                     </h2>
                     <p className='verdana'>
                        Let&apos;s collaborate to{' '}
                        <span className='text-indigo-400'>bring your brilliant ideas to life</span>{' '}
                        and embark on a journey of creativity and inspiration! <br />I am excited to
                        hear from you and see where our{' '}
                        <span className='text-indigo-400'>partnership</span> can take us.
                     </p>
                  </div>
               </div>,
               <div className='mx-7 space-y-5'>
                  <div className='grid grid-cols-3 gap-5'>
                     <div className='col-span-2 space-y-3'>
                        <h2 className='yekanBold w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                           سلام ! <span style={{ color: 'initial' }}>🖐🏻</span>
                        </h2>
                        <p className='yekan text-base'>
                           من <span className='yekanBold text-indigo-400'>تبریزیانم</span>, ۲۲, یک{' '}
                           <span className='yekanBold text-indigo-400'>
                              توسعه دهنده وب فول-استک
                           </span>{' '}
                           با یک اشتیاق بالا برای ساخت وب سایت/اپلیکیشن هایی با عملکرد بالا. <br />{' '}
                           <br />
                        </p>
                     </div>
                     <Image
                        src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/tabrizian_.jpg'
                        width={160}
                        height={160}
                        className='rounded-lg'
                        alt='مصطفی تبریزیان'
                     />
                  </div>

                  <div className='space-y-3'>
                     <h2 className='yekanBold w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        از چی استفاده میکنم
                     </h2>
                     <p className='yekan text-base'>
                        از فناوری های پیشرفته دنیا مانند{' '}
                        <span className='yekanBold text-indigo-400'>
                           Next.js, React و TypeScript
                        </span>{' '}
                        به اطمینان حاصل کنید که شما و کاربرانتان یک{' '}
                        <span className='yekanBold text-indigo-400'>
                           تجربه ای بدون ذره ای خدشه و لذت بخش داشته باشید
                        </span>
                        .
                     </p>
                  </div>

                  <div className='space-y-3'>
                     <h2 className='yekanBold w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        هدف من
                     </h2>
                     <p className='yekan text-base'>
                        هدف نهایی من این است که{' '}
                        <span className='yekanBold text-indigo-400'>
                           فراتر از انتظارات شما عمل کنم
                        </span>{' '}
                        و کمکتون کنم{' '}
                        <span className='yekanBold text-indigo-400'>به اهدافتان برسید</span>. <br />
                        من پروژه های متعددی را با موفقیت به پایان رسانده ام، از جمله فروشگاه های
                        آنلاین و پلت فرم های مختلف خیره کننده و من همیشه در تلاشم نتایج استثنایی
                        ارائه کنم. <br />
                     </p>
                  </div>

                  <div className='space-y-3'>
                     <h2 className='yekanBold w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        من و شما
                     </h2>
                     <p className='yekan text-base'>
                        هنگامی که من رو به عنوان توسعه دهنده وب خود انتخاب می‌کنید, میتوانید با خیال
                        راحت مطمئن باشید{' '}
                        <span className='yekanBold text-indigo-400'>
                           هیچ چیز جزء بهترین دریافت نمی‌کنید.
                        </span>{' '}
                        <br />
                        اولیت من سرعت و پاسخگویی است, که در نتیجه باعث تجربه‌ی عالی برای کاربران شما
                        می‌شود. <br />
                        با دقت به نظرات شما گوش می دهم, ارائه به‌روزرسانی‌های منظم در طول پروژه برای
                        اطمینان از اینکه ما{' '}
                        <span className='yekanBold text-indigo-400'>به هدف نهایی شما برسیم</span> و
                        پروژه را با موفقیت به اتمام برسانیم. <br />
                     </p>
                  </div>

                  <div className='space-y-3'>
                     <h2 className='yekanBold w-fit bg-gradient-to-br from-indigo-200 to-indigo-400 bg-clip-text text-transparent'>
                        منتظر چی هستید؟
                     </h2>
                     <p className='yekan text-base'>
                        بیایید با هم همکاری کنیم{' '}
                        <span className='yekanBold text-indigo-400'>
                           تا ایده های درخشان خود را زنده کنید
                        </span>{' '}
                        و سفری خلاقانه و الهام بخش را آغاز کنید! ! <br />
                        من هیجان زده ام از شما بشنویم و ببینیم .{' '}
                        <span className='yekanBold text-indigo-400'>همکاری</span> ما به کجا می تواند
                        ما را ببرد
                     </p>
                  </div>
               </div>,
            )}
         </div>
         <div className='order-1 mx-5 mb-36 grid h-screen items-center justify-center md:mx-auto md:mb-0 md:w-3/4 lg:order-2'>
            <div className='relative'>
               <Image
                  src='/aboutHero.jpg'
                  width={424}
                  height={530}
                  alt='about hero'
                  style={{
                     borderRadius: '4.6rem',
                     boxShadow: 'rgb(30 52 99) -7px -7px 20px, #403d46 5px 7px 22px',
                  }}
               />

               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/mongo.jpg'
                  width={133}
                  height={134}
                  alt='about mongo'
                  className={`animate-wave absolute w-20 rounded-3xl lg:w-40 lg:rounded-[38px] ${langDecider(
                     lang,
                     '-right-4 lg:-right-16',
                     '-left-4 lg:-left-16',
                  )} -top-8 border-2 border-green-400`}
                  style={{
                     animationDuration: '3.5s',
                     boxShadow: '0px 4px 63px -14px #00ED64',
                  }}
               />

               <div
                  style={{
                     borderRadius: '1.88rem',
                     boxShadow: 'black 0 4px 15px 5px',
                     animationDuration: '3s',
                  }}
                  className={`animate-wave absolute -bottom-16 h-[160px] w-[160px] lg:h-[232px] lg:w-[232px] ${langDecider(
                     lang,
                     '-left-4 lg:-left-32',
                     '-right-4 lg:-right-32',
                  )} grid items-center justify-center bg-gradient-to-t from-black to-gray-800`}
               >
                  <Image
                     src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/next.jpg'
                     width={235}
                     height={82.65}
                     alt='about next'
                     className='mix-blend-screen'
                  />
               </div>

               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/react.jpg'
                  width={131}
                  height={137}
                  alt='about react'
                  className={`animate-wave absolute -bottom-14 ${langDecider(
                     lang,
                     'right-0',
                     'left-0',
                  )} h-24 w-24 rounded-3xl border-2 border-sky-400 bg-gradient-to-t from-black to-blue-900 p-2 lg:h-32 lg:w-32 lg:rounded-[33px]`}
                  style={{
                     boxShadow: '0px 4px 63px -14px #74DFFC',
                     animationDuration: Math.random() * 4 + 1 + 's',
                  }}
               />

               <Image
                  src='https://tabrizian.storage.iran.liara.space/tabrizian_codes/technologies/typescript.jpg'
                  width={105}
                  height={105}
                  alt='about tailwind'
                  className={`animate-wave absolute -bottom-40 h-20 w-20 rounded-3xl lg:h-24 lg:w-24 lg:rounded-[30px] ${langDecider(
                     lang,
                     'right-1/2',
                     'left-1/2',
                  )} border-2 border-sky-400`}
                  style={{
                     boxShadow: '0px 4px 63px -14px #16BECB',
                     animationDuration: '2s',
                  }}
               />
            </div>
         </div>
      </div>
   )
}

export default About
