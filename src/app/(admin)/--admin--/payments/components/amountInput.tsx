import { FormikErrors } from 'formik'
import { memo } from 'react'

const TitleInput = memo(
   ({
      addingNewPayment,
      value,
      setFieldValue,
      error,
      touch,
   }: {
      addingNewPayment: boolean
      value: number
      setFieldValue: (
         field: string,
         value: number,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         amount: number
      }>>
      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <div className='flex items-center justify-between'>
                  <label htmlFor='amount'>
                     <span className='text-slate-400'>Amount</span>
                  </label>
                  <span className='yekan rtl text-base text-slate-400'>
                     {value.toLocaleString('fa')} تومان
                  </span>
               </div>
               <input
                  name='amount'
                  onChange={(e) => setFieldValue('amount', parseInt(e.target.value))}
                  value={value}
                  disabled={!addingNewPayment}
                  readOnly={!addingNewPayment}
                  className='yekan mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'
                  type='number'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

TitleInput.displayName = 'TitleInput'

export default TitleInput
