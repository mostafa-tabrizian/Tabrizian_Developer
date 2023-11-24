import { IClient } from '@/models/client'
import { FormikErrors } from 'formik'
import { memo } from 'react'

const ClientInput = memo(
   ({
      clients,
      addingNewPayment,
      value,
      setFieldValue,
      error,
      touch,
   }: {
      clients: IClient[]
      addingNewPayment: boolean
      value: string
      setFieldValue: (
         field: string,
         value: unknown,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         client: string
      }>>

      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-x-5'>
               <label htmlFor='payerName'>
                  <span className='text-slate-400'>Client</span>
               </label>
               {/* yekan rtl mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none */}
               <select
                  className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                  value={value}
                  disabled={!addingNewPayment}
                  onChange={(e) => {
                     setFieldValue('client', e.target.value)
                  }}
               >
                  <option defaultChecked value=''>
                     ---
                  </option>
                  {clients.map((client) => {
                     return (
                        <option key={client._id} value={client._id}>
                           {client.name}
                        </option>
                     )
                  })}
               </select>
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

ClientInput.displayName = 'ClientInput'

export default ClientInput
