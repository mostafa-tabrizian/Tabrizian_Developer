import { FormikErrors } from 'formik'
import { memo } from 'react'

const DescriptionInput = memo(
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
         <div className='space-y-1'>
            <label htmlFor='descriptionFa'>
               <span className='text-slate-400'>Description (Fa)</span>
            </label>

            <div className=' rounded-lg border border-green-600/50 p-2'>
               <span className='text-xs text-green-600/70'>
                  50 up to 300 is good amount of word to use for SEO ✅
               </span>
            </div>

            <span className='text-xs text-slate-500'>
               Number of words: {value ? value.split(' ')?.length : '0'}
            </span>

            <textarea
               name='descriptionFa'
               onChange={(e) => setFieldValue('descriptionFa', e.target.value)}
               value={value}
               rows={8}
               placeholder='توضیحات...'
               style={{
                  border: '1px solid #cccccc',
                  padding: '10px',
                  width: '100%',
               }}
               className='rtl rounded-lg placeholder:text-slate-400'
            />
            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </div>
      )
   },
)

DescriptionInput.displayName = 'DescriptionInput'

export default DescriptionInput
