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

export const comment = yup.object().shape({
   username: yup
      .string()
      .min(3, 'حداقل کارکتر های نام کاربری باید ۳ تا باشه')
      .required('لطفا نام کاربریتون رو وارد کنید'),
   body: yup
      .string()
      .min(3, 'حداقل کارکتر های دیدگاهتون باید ۳ تا باشه')
      .required('لطفا دیدگاهتون رو وارد کنید'),
})

const mobileAndPhoneNumberRegex = /^0\d{2,3}\d{8}|09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/
export const mobileNumberValidation = yup.object().shape({
   mobileNumber: yup.string().matches(mobileAndPhoneNumberRegex).required(),
})
