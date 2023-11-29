import { FormikErrors } from 'formik'
import { memo } from 'react'

const PriceInput = memo(
   ({
      value,
      setFieldValue,
      error,
      touch,
   }: {
      value: number
      setFieldValue: (
         field: string,
         value: number,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         price: number
      }>>
      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <div className='flex items-center justify-between'>
                  <label htmlFor='amount'>
                     <span className='text-slate-400'>Price Per Month</span>
                  </label>
                  <span className='yekan rtl text-base text-slate-400'>
                     {value.toLocaleString('fa')} تومان
                  </span>
               </div>
               <input
                  name='price'
                  required
                  onChange={(e) => setFieldValue('price', parseInt(e.target.value))}
                  value={value}
                  className='yekan mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

PriceInput.displayName = 'PriceInput'

export default PriceInput
