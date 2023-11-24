import { FormikErrors } from 'formik'
import { memo } from 'react'

const PaymentDateInput = memo(
   ({
      monthValue,
      dayValue,
      setFieldValue,
   }: {
      monthValue: number
      dayValue: number
      setFieldValue: (
         field: string,
         value: number,
         shouldValidate?: boolean | undefined,
      ) => Promise<void | FormikErrors<{
         paymentMonth: number
         paymentDay: number
      }>>
   }) => {
      return (
         <>
            <div className='space-x-5'>
               <select
                  className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                  value={monthValue}
                  onChange={(e) => {
                     setFieldValue('paymentMonth', parseInt(e.target.value))
                  }}
               >
                  {[
                     {
                        value: 0,
                        title: 'January',
                     },
                     {
                        value: 1,
                        title: 'February',
                     },
                     {
                        value: 2,
                        title: 'March',
                     },
                     {
                        value: 3,
                        title: 'April',
                     },
                     {
                        value: 4,
                        title: 'May',
                     },
                     {
                        value: 5,
                        title: 'June',
                     },
                     {
                        value: 6,
                        title: 'July',
                     },
                     {
                        value: 7,
                        title: 'August',
                     },
                     {
                        value: 8,
                        title: 'September',
                     },
                     {
                        value: 9,
                        title: 'October',
                     },
                     {
                        value: 10,
                        title: 'November',
                     },
                     {
                        value: 11,
                        title: 'December',
                     },
                  ].map((month: { value: number; title: string }, idx) => {
                     return (
                        <option key={idx} value={month.value}>
                           {month.title}
                        </option>
                     )
                  })}
               </select>

               <input
                  value={dayValue}
                  className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
                  onChange={(e) => {
                     setFieldValue('paymentDay', parseInt(e.target.value))
                  }}
                  type='number'
                  min={1}
                  max={29}
               />
            </div>
         </>
      )
   },
)

PaymentDateInput.displayName = 'PaymentDateInput'

export default PaymentDateInput
