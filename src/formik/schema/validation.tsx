import * as yup from 'yup'

export const projectEditForm = yup.object().shape({
   titleEn: yup
      .string()
      .min(3, 'At Least 3 Char')
      .required('Enter Title of The Project')
      .matches(/^[^-]*$/, { message: 'Char - is Not Allowed' }),
   titleFa: yup
      .string()
      .min(3, 'At Least 3 Char')
      .required('Enter Title of The Project')
      .matches(/^[^-]*$/, { message: 'Char - is Not Allowed' }),
})
