import { FormikErrors } from 'formik'
import { memo } from 'react'

const RenewalEndInput = memo(
   ({
      value,
      setFieldValue,
   }: {
      value: Date
      setFieldValue: (
         field: string,
         value: Date,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         renewalEnd: Date
      }>>
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <div className='flex items-center justify-between'>
                  <label htmlFor='renewalEnd'>
                     <span className='text-slate-400'>Renewal End</span>
                  </label>
               </div>
               <input
                  name='renewalEnd'
                  value={value.toISOString().split('T')[0]}
                  className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                  onChange={(e) => {
                     setFieldValue('renewalEnd', new Date(e.target.value))
                  }}
                  type='date'
               />
            </div>
         </>
      )
   },
)

RenewalEndInput.displayName = 'RenewalEndInput'

export default RenewalEndInput
