import { FormikErrors } from 'formik'
import { memo } from 'react'

const TechnologiesInput = memo(
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
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         titleEn: string
         titleFa: string
         descriptionEn: string
         descriptionFa: string
         active: boolean
      }>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <label htmlFor='technologies'>
                  <span className='text-slate-400'>Technologies</span>
               </label>
               <input
                  name='technologies'
                  onChange={(e) => setFieldValue('technologies', e.target.value)}
                  value={value}
                  className='verdana mr-3 w-full rounded-lg border-2 border-slate-200 bg-slate-100 p-2 text-sm'
                  type='text'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

TechnologiesInput.displayName = 'TechnologiesInput'

export default TechnologiesInput
