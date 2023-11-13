import { FormikErrors } from 'formik'
import { memo } from 'react'

const FarsiTitleInput = memo(
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
               <label htmlFor='titleFa'>
                  <span className='text-slate-400'>Project Title (Fa)</span>
               </label>
               <input
                  name='titleFa'
                  onChange={(e) => setFieldValue('titleFa', e.target.value)}
                  value={value}
                  className='verdana mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-sm'
                  type='text'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

FarsiTitleInput.displayName = 'FarsiTitleInput'

export default FarsiTitleInput
