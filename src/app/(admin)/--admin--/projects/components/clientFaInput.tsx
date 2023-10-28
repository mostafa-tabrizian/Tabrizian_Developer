import { FormikErrors } from 'formik'
import { memo } from 'react'

const ClientFaInput = memo(
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
               <label htmlFor='clientFa'>
                  <span className='text-slate-400'>Client (Fa)</span>
               </label>
               <input
                  name='clientFa'
                  onChange={(e) => setFieldValue('clientFa', e.target.value)}
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

ClientFaInput.displayName = 'ClientFaInput'

export default ClientFaInput
