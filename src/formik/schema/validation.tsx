import * as yup from 'yup'

export const projectEditForm = yup.object().shape({
   name: yup
      .string()
      .min(3, 'عنوان حداقل باید ۳ کارکتر باشد')
      .required('عنوان طرح را وارد کنید')
      .matches(/^[^-]*$/, { message: 'نباید علامت - در نام طرح باشد' }),
})

export const NameSlugValidation = yup.object().shape({
   name: yup
      .string()
      .min(3, 'حداقل ۳ کارکتر')
      .required('عنوان را وارد کنید')
      .matches(/^[^-]*$/, { message: 'نباید علامت - در نام طرح باشد' }),
})
