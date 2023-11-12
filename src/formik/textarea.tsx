import { useField } from 'formik'

// @ts-ignore
const FormikTextarea = ({ label, ...props }) => {
   // @ts-ignore
   const [field, meta] = useField(props)

   return (
      <div className='text-right'>
         <label>
            <h6 className='yekanBold mb-3 text-base text-slate-100'>{label}</h6>
         </label>
         <textarea
            {...field}
            {...props}
            rows={3}
            className={`${
               meta.error && meta.touched ? 'invalidInput' : ''
            } rtl yekan w-full whitespace-pre border-b rounded-lg border-slate-600 bg-[#0c0f16] px-4 py-2 text-slate-100 outline-none`}
         />
         {meta.error && meta.touched ? <p className='text-sm yekan text-red-500'>{meta.error}</p> : ''}
      </div>
   )
}

export default FormikTextarea
