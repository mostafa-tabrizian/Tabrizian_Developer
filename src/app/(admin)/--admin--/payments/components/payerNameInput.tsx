import { FormikErrors } from 'formik'
import { memo } from 'react'

const PayerNameInput = memo(
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
         payerName: string
      }>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <label htmlFor='payerName'>
                  <span className='text-slate-400'>Payer Name</span>
               </label>
               <input
                  name='payerName'
                  onChange={(e) => setFieldValue('payerName', e.target.value)}
                  value={value}
                  readOnly={!addingNewPayment}
                  className='yekan rtl mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'
                  type='text'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

PayerNameInput.displayName = 'PayerNameInput'

export default PayerNameInput
