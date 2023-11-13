import { FormikErrors } from 'formik'
import { memo } from 'react'

const TitleEnInput = memo(
   ({
      value,
      setFieldValue,
      error,
      touch,
   }: {
      value: string
      setFieldValue: (
         field: string,
         value: unknown,
         shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<{
    titleEn: string;
    titleFa: string;
    descriptionEn: string;
    descriptionFa: string;
    active: boolean;
}>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <label htmlFor='titleEn'>
                  <span className='text-slate-400'>Project Title (En)</span>
               </label>
               <input
                  name='titleEn'
                  onChange={(e) => setFieldValue('titleEn', e.target.value)}
                  value={value}
                  className='verdana mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'
                  type='text'
               />
               <div className='flex items-center gap-2'>
                  <svg
                     className='h-5 w-5 text-yellow-500'
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                     />
                  </svg>
                  <p className='text-xs text-yellow-500'>
                     Preferably, the english title of the project should not be changed
                  </p>
               </div>
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

TitleEnInput.displayName = 'TitleEnInput'

export default TitleEnInput
