import { FormikErrors } from 'formik'
import { memo } from 'react'

const LiveInput = memo(
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
               <label htmlFor='live'>
                  <span className='text-slate-400'>Live Link</span>
               </label>
               <input
                  name='live'
                  onChange={(e) => setFieldValue('live', e.target.value)}
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

LiveInput.displayName = 'LiveInput'

export default LiveInput
