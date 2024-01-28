'use client'

import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react'

import Collapse from '@mui/material/Collapse'
import Link from 'next/link'
import langDecider from '@/utils/langDecider'

const FAQ = ({ lang }: { lang: string }) => {
   const previousCollapse = useRef(null) as unknown as
      | {
           current: Dispatch<SetStateAction<boolean>>
        }
      | { current: null }

   const [q1, setQ1] = useState(false)
   const [q2, setQ2] = useState(false)
   const [q3, setQ3] = useState(false)
   const [q4, setQ4] = useState(false)
   const [q5, setQ5] = useState(false)
   const [q6, setQ6] = useState(false)
   const [q7, setQ7] = useState(false)
   const [q8, setQ8] = useState(false)
   const [q9, setQ9] = useState(false)
   const [q10, setQ10] = useState(false)

   const setFalsePrevious = () => {
      if (previousCollapse.current !== null) previousCollapse.current(false)
   }

   useEffect(() => {
      return () => {
         setFalsePrevious()
      }
   }, [])

   const collapseStatus = (questionCollapse: Dispatch<SetStateAction<boolean>>) => {
      if (previousCollapse.current === questionCollapse) {
         questionCollapse((prev) => !prev)
      } else {
         setFalsePrevious()
         previousCollapse.current = questionCollapse
         questionCollapse(true)
      }
   }

   return (
      <div
         id='faq'
         className={`${langDecider(
            lang,
            '',
            'rtl',
         )} grid min-h-screen max-w-screen-md mt-60 items-center text-center md:mx-auto`}
      >
         <div className='mx-5 space-y-4'>
            {langDecider(
               lang,
               <h2 className='Audiowide mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-transparent'>
                  FAQ
               </h2>,
               <h2 className='yekanBold mx-auto mb-10 w-fit bg-gradient-to-br from-violet-200 to-indigo-600 bg-clip-text text-center text-[1.5rem] text-transparent'>
                  سوالات متداول
               </h2>,
            )}

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ1)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;What <span className='mx-2 contents text-indigo-300'>services</span>{' '}
                        do you offer as a freelance web developer?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot; به عنوان یک فریلنسر وب دِوِِلوپر چه
                        <span className='mx-2 contents text-indigo-300'> خدماتی</span> ارائه
                        می‌کنید؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q1 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q1}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        As a freelance web developer, I offer website design and development,
                        frontend and backend development, mobile web app development, e-commerce
                        solutions, and custom software development services based on React/Next.js
                        technology
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        من به عنوان یک فریلنسر وب دِوِِلوپر، طراحی و ساخت سایت، فرانت اند و بک اند
                        ارائه می دهم. توسعه اپلیکیشن وب موبایل، فروشگاه های اینترنتی و توسعه نرم
                        افزار سفارشی مبتنی بر فناوری React/Next.js
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ2)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;What{' '}
                        <span className='mx-2 contents text-indigo-300'>technologies</span> and
                        programming languages are you proficient in?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;کدام{' '}
                        <span className='mx-2 contents text-indigo-300'>تکنولوژی ها</span> و زبان
                        های برنامه نویسی تخصص شماست؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q2 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q2}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        These are{' '}
                        <Link
                           href='/#technologies'
                           className=' text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           technologies that I specialize
                        </Link>{' '}
                        in
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        اینها{' '}
                        <Link
                           href='/#technologies'
                           className=' yekanBold text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           تکنولوژی هایی
                        </Link>{' '}
                        هستند که در آن ها تخصص دارم
                     </p>,
                  )}
               </Collapse>
            </div>

            {langDecider(
               lang,
               <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'></p>,
               <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'></p>,
            )}

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ3)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;Can you provide{' '}
                        <span className='mx-2 contents text-indigo-300'>examples</span> of your
                        previous work or portfolio?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;می‌توانید{' '}
                        <span className='mx-2 contents text-indigo-300'>نمونه کار</span> هایی یا
                        پروژه های سابقی ارائه کنید؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q3 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q3}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        Sure, you can explore my portfolio to see{' '}
                        <Link
                           href='/#projects'
                           className=' text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           examples of my previous projects
                        </Link>{' '}
                        and get a better idea of my skills and expertiss.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        حتما، شما میتونید در بخش{' '}
                        <Link
                           href='/#projects'
                           className=' yekanBold text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           نمونه کار و پروژه ها
                        </Link>{' '}
                        برید و ایده‌ی بهتری از مهارت های و تجربیاتم بدست بیارید
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ4)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;What is your development{' '}
                        <span className='mx-2 contents text-indigo-300'>process</span> like?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;
                        <span className='mx-2 contents text-indigo-300'>روند کاری</span> شما چه شکلی
                        هستش؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q4 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q4}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        My development process involves understanding project requirements, creating
                        a detailed plan, design and development, rigorous testing, SEO optimization,
                        and deployment. I follow agile methodologies to ensure smooth project
                        management.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        فرآیند توسعه من شامل درک الزامات پروژه، ایجاد طرح دقیق، کد نویسی و توسعه،
                        تست دقیق، بهینه سازی سئو، و استقرار پروژه بر سرور. <br /> من از روش‌هایی
                        پیروی می‌کنم تا پروژه‌ای روان را برایتان تضمین کنم.
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ5)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;How <span className='mx-2 contents text-indigo-300'>long</span> does
                        it take to complete a typical project?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;<span className='mx-2 contents text-indigo-300'>چه مقدار زمان</span>
                        برای کامل کردن پروژه ام لازم هستش؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q5 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q5}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        The timeline for the project will depend on its complexity and scope. I will
                        provide you with a detailed project timeline and milestones during our
                        initial discussions.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        جدول زمانی پروژه به پیچیدگی و دامنه آن بستگی دارد. من جدول زمانی پروژه و
                        نقاط عطف پروژه را در بحث های اولیه به شما ارائه می دهیم
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ6)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;How do you handle project{' '}
                        <span className='mx-2 contents text-indigo-300'>revisions or changes</span>{' '}
                        during development?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;ایجاد{' '}
                        <span className='mx-2 contents text-indigo-300'>
                           تغییرات و بررسی های مجدد
                        </span>{' '}
                        در حین توسعه پروژه چگونه است؟?&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q6 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q6}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        I am willing to make revisions and changes during the development process
                        for up to 3 requests. This means that you can ask me to change anything
                        three times without incurring any additional cost. However, after the third
                        request, there will be a cost associated with any further changes. We will
                        discuss any changes you would like to make, and I will provide you with an
                        updated timeline and cost estimate if applicable.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        تغییرات و اصلاحات در طول فرآیند توسعه تا سه درخواست را به صورت رایگان اجرا
                        می‌شود. این به این معناست که شما می‌توانید سه بار درخواست تغییرات را بدون
                        هزینه اضافی به من بدهید. با این حال، بعد از درخواست سوم، هزینه‌ای برای
                        تغییرات اضافی وجود خواهد داشت. ما در مورد هر تغییری که می‌خواهید انجام دهید،
                        گفتگو خواهیم کرد، و اگر اعمال تغییراتی لازم باشد، زمان‌بندی به‌روز شده و
                        تخمین هزینه را برای شما ارائه خواهم داد.
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ7)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;<span className='mx-2 contents text-indigo-300'>pricing</span>{' '}
                        structure?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;ساختار{' '}
                        <span className='mx-2 contents text-indigo-300'>قیمت گذاری</span> شما
                        چجوریه؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q7 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q7}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        During our initial consultation, we&apos;ll discuss your project
                        requirements and budget to determine a flexible pricing structure that
                        aligns with the scope and complexity of the project.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        در مشاوره اولیه، ما نیازها و بودجه پروژه شما را بررسی خواهیم کرد تا یک
                        ساختار قیمت‌ گذاری انعطاف‌ پذیر را تعیین کنیم که با دامنه و پیچیدگی پروژه
                        هماهنگ باشد.
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ8)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;How do you handle ongoing{' '}
                        <span className='mx-2 contents text-indigo-300'>support</span> and
                        maintenance after project completion?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;بعد از کامل شدن پروژه چگونه با{' '}
                        <span className='mx-2 contents text-indigo-300'>پشتیبانی</span> و تعمیر و
                        نگهداری برخورد می‌کنید؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q8 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q8}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        Based on the package you order, I am happy to provide free project support
                        for 2 up to 12 months. I offer ongoing maintenance and support services that
                        ensure the smooth running of your website or application. We can work
                        together to create a support plan that best suits your needs.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        بر اساس پکیجی که سفارش می‌دهید، من خوشحال خواهم شد که پروژه شما را از 2 تا
                        12 ماه پشتیبانی رایگان ارائه دهم. من خدمات پشتیبانی و نگهداری مداوم را ارائه
                        می‌دهم که تضمین می‌کند وب‌سایت یا برنامه شما به طور صحیح اجرا شود. ما
                        می‌توانیم با همکاری یک برنامه پشتیبانی ایجاد کنیم که بهترین نیازهای شما را
                        برآورده سازد.
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ9)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;Do you provide{' '}
                        <span className='mx-2 contents text-indigo-300'>SEO</span> services or
                        optimize websites for search engines?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;آیا خدمات <span className='mx-2 contents text-indigo-300'>سئو</span>{' '}
                        یا بهینه سازی سایت برای موتورهای جستجو برای سایت من ارائه می‌شود؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q9 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q9}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        Yes, I provide SEO consultation and technical SEO optimization services to
                        improve your website&apos;s visibility in search engines, increase organic
                        traffic, and enhance your online presence
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        بله، من مشاوره SEO و خدمات بهینه‌سازی SEO فنی را ارائه می‌دهم تا دیدرسی
                        وب‌سایت شما در موتورهای جستجو را افزایش دهد، ترافیک طبیعی را افزایش دهد و
                        حضور آنلاین شما را تقویت کند.
                     </p>,
                  )}
               </Collapse>
            </div>

            <div
               className={`relative rounded-lg ${langDecider(
                  lang,
                  'bg-gradient-to-r',
                  'bg-gradient-to-l',
               )} from-purple-300/10 to-transparent px-2 py-4`}
            >
               <button
                  className='flex w-full items-center justify-between'
                  aria-label='faq'
                  onClick={() => collapseStatus(setQ10)}
               >
                  {langDecider(
                     lang,
                     <p className='verdana whitespace-wrap mx-5 flex w-full text-left text-sm text-slate-100 md:text-base'>
                        &quot;How can I{' '}
                        <span className='mx-2 contents text-indigo-300'>get in touch</span> with you
                        to discuss my project?&quot;
                     </p>,
                     <span className='yekanBold mx-5 flex w-full text-right text-sm text-slate-100 md:text-base'>
                        &quot;چجوری میتونم برای گفتگو در مورد پروژه ام با شما
                        <span className='mx-2 contents text-indigo-300'>در تماس باشم</span>؟&quot;
                     </span>,
                  )}
                  <svg
                     className={`absolute ${langDecider(
                        lang,
                        'right-0',
                        'left-0',
                     )} h-5 w-5 text-indigo-300 transition-transform ${
                        q10 ? 'rotate-45' : 'rotate-0'
                     }`}
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 4v16m8-8H4'
                     />
                  </svg>
               </button>

               <Collapse unmountOnExit in={q10}>
                  {langDecider(
                     lang,
                     <p className='mx-5 mt-4 text-left text-sm text-slate-400 md:text-base'>
                        You can reach me through{' '}
                        <Link
                           href='/#contact'
                           className=' text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           these social media platform
                        </Link>{' '}
                        or by{' '}
                        <a
                           href='mailto:tabrizian.codes@gmail.com'
                           className='text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           email
                        </a>
                        . I&apos;ll promptly respond to schedule a consultation.
                     </p>,
                     <p className='yekan mx-5 mt-4 text-right text-sm text-slate-400 md:text-base'>
                        شما می‌تونید از طریق{' '}
                        <Link
                           href='/#contact'
                           className=' yekanBold text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           راه های ارتباطی
                        </Link>{' '}
                        ذکر شده یا از طریق{' '}
                        <a
                           href='mailto:tabrizian.codes@gmail.com'
                           className='yekanBold text-sm text-indigo-300 underline decoration-wavy decoration-1 underline-offset-4 md:text-base'
                        >
                           ایمیل
                        </a>{' '}
                        به من پیام بدهید. در اسرع وقت پاسخ داده و یک مشاوره را برگزار خواهم کرد.
                     </p>,
                  )}
               </Collapse>
            </div>
         </div>
      </div>
   )
}

export default FAQ
