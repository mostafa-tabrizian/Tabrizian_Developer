import { FormikErrors } from 'formik'
import { memo } from 'react'

const TelegramIdInput = memo(
   ({
      value,
      setFieldValue,
      error,
      touch,
   }: {
      value: string
      setFieldValue: (
         field: string,
         value: string,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         telegramId: string
      }>>
      error: string | undefined
      touch: boolean | undefined
   }) => {
      return (
         <>
            <div className='space-y-1'>
               <div className='flex items-center justify-between'>
                  <label htmlFor='telegramId'>
                     <span className='text-slate-400'>Telegram ID</span>
                  </label>
               </div>
               <input
                  name='telegramId'
                  onChange={(e) => setFieldValue('telegramId', e.target.value)}
                  value={value}
                  className='yekan mr-3 w-full rounded-lg border-2 border-slate-600 bg-slate-800 p-2 text-base text-slate-300 outline-none'
               />
            </div>

            {error && touch ? <p className='text-sm text-red-500'>{error}</p> : ''}
         </>
      )
   },
)

TelegramIdInput.displayName = 'TelegramIdInput'

export default TelegramIdInput
