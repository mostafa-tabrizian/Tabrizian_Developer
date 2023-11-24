import Switch from '@mui/material/Switch'
import { FormikErrors } from 'formik'
import { memo } from 'react'

const ActiveInput = memo(
   ({
      value,
      setFieldValue,
      error,
      touch,
   }: {
      value: boolean
      setFieldValue: (
         field: string,
         value: boolean,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         active: boolean
      }>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='flex items-center gap-5'>
               <div className='flex items-center justify-between'>
                  <label htmlFor='active'>
                     <span className='text-slate-400'>Active</span>
                  </label>
               </div>
               <Switch
                  checked={value}
                  name='active'
                  color='success'
                  onChange={() => setFieldValue('active', !value)}
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

ActiveInput.displayName = 'ActiveInput'

export default ActiveInput
