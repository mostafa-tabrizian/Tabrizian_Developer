import { useField } from 'formik'

// @ts-ignore
const FormikInput = ({ label, ...props }) => {
   // @ts-ignore
   const [field, meta] = useField(props)

   return (
      <div className='text-right'>
         <label>
            <h6 className='yekanBold mb-3 text-base text-slate-100'>{label}</h6>
         </label>
         <input
            {...field}
            {...props}
            className={`${
               meta.error && meta.touched ? 'invalidInput' : ''
            } rtl yekan w-full border-b border-slate-600 rounded-lg bg-[#0c0f16] px-4 py-2 text-slate-100 outline-none`}
         />
         {meta.error && meta.touched ? <p className='text-sm yekan text-red-500'>{meta.error}</p> : ''}
      </div>
   )
}

export default FormikInput
