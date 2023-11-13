import { FormikErrors } from 'formik'
import { memo } from 'react'

const DescriptionInput = memo(
   ({
      addingNewPayment,
      value,
      setFieldValue,
      error,
      touch,
   }: {
      addingNewPayment: boolean
      value: string
      setFieldValue: (
         field: string,
         value: unknown,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         description: string
      }>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <div className='space-y-1'>
            <label htmlFor='description'>
               <span className='text-slate-400'>Description</span>
            </label>

            <textarea
               name='description'
               onChange={(e) => setFieldValue('description', e.target.value)}
               value={value}
               rows={8}
               readOnly={!addingNewPayment}
               placeholder='توضیحات...'
               className='rtl yekan w-full p-3 rounded-lg border-2 border-slate-600 bg-slate-800 text-base text-slate-300 outline-none placeholder:text-slate-500'
            />
            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </div>
      )
   },
)

DescriptionInput.displayName = 'DescriptionInput'

export default DescriptionInput
