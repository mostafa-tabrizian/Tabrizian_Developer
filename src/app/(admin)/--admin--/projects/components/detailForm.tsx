'use client'

import { memo } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { IProject } from '@/models/project'
import { Switch } from '@mui/material'
import dynamic from 'next/dynamic'
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false })
import ImageInput from './imageInput'
import { projectEditForm } from '@/formik/schema/validation'
import hyphen from '@/lib/hyphen'
import DescriptionEnInput from './descriptionEnInput'
import DescriptionFaInput from './descriptionFaInput'
import TitleFaInput from './titleFaInput'
import TitleEnInput from './titleEnInput'
import LiveInput from './liveInput'
import ClientEnInput from './clientEnInput'
import ClientFaInput from './clientFaInput'

const DetailForm = memo(
   ({ addingNewproject, project }: { addingNewproject: boolean; project: IProject }) => {
      const router = useRouter()

      const handleSubmit = async (values: {
         titleEn: string
         titleFa: string
         active: boolean
      }) => {
         try {
            toast.info('Submitting Data...')

            const payload = {
               _id: addingNewproject ? null : project._id,
               ...values,
            }

            const res = await fetch('/api/--admin--/project', {
               method: addingNewproject ? 'POST' : 'PATCH',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Data Submitted Successfully.')

            fetch('/api/--admin--/revalidate?path=/')

            if (addingNewproject) {
               router.push(`/--admin--/projects/${hyphen(values.titleEn)}`)
            }
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      const handleDeleteproject = async () => {
         try {
            if (project.mobile1stImage || project.mobile2ndImage) {
               return toast.warning(
                  // eslint-disable-next-line quotes
                  "For Deleting the Project, You Should Delete It's Related Images",
               )
            }

            toast.info('Deleting The Project...')

            const payload = {
               _id: project._id,
            }

            const res = await fetch('/api/--admin--/project', {
               method: 'DELETE',
               body: JSON.stringify(payload),
            })

            const resData = await res.json()

            if (!res.ok) throw new Error()
            else if (resData.status == 500) {
               console.error(resData.message)
               return toast.error('Connection Error!')
            }

            toast.success('Project Deleted Successfully.')

            fetch('/api/--admin--/revalidate?path=/')

            router.push('/--admin--/projects')
         } catch (err) {
            toast.error('Connection Error. Please Try Again.')
            return console.error(err)
         }
      }

      return (
         <Formik
            initialValues={{
               live: addingNewproject ? '' : project.live,
               titleEn: addingNewproject ? '' : project.titleEn,
               titleFa: addingNewproject ? '' : project.titleFa,
               descriptionEn: addingNewproject ? '' : project.descriptionEn,
               descriptionFa: addingNewproject ? '' : project.descriptionFa,
               clientEn: addingNewproject ? '' : project.clientEn,
               clientFa: addingNewproject ? '' : project.clientFa,
               active: addingNewproject ? true : project.active,
            }}
            validationSchema={projectEditForm}
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
               <Form className='mt-6 grid grid-cols-3 gap-5 '>
                  <div className='col-span-1'>
                     {addingNewproject ? (
                        ''
                     ) : (
                        <ImageInput project={JSON.parse(JSON.stringify(project))} />
                     )}
                  </div>
                  <div className='col-span-2 space-y-5'>
                     <LiveInput
                        value={values.live}
                        setFieldValue={setFieldValue}
                        error={errors.live}
                        touch={touched.live}
                     />

                     <TitleEnInput
                        value={values.titleEn}
                        setFieldValue={setFieldValue}
                        error={errors.titleEn}
                        touch={touched.titleEn}
                     />

                     <TitleFaInput
                        value={values.titleEn}
                        setFieldValue={setFieldValue}
                        error={errors.titleEn}
                        touch={touched.titleEn}
                     />

                     <ClientEnInput
                        value={values.clientEn}
                        setFieldValue={setFieldValue}
                        error={errors.clientEn}
                        touch={touched.clientEn}
                     />

                     <ClientFaInput
                        value={values.clientFa}
                        setFieldValue={setFieldValue}
                        error={errors.clientFa}
                        touch={touched.clientFa}
                     />

                     <DescriptionEnInput
                        value={values.descriptionEn}
                        setFieldValue={setFieldValue}
                        error={errors.descriptionEn}
                        touch={touched.descriptionEn}
                     />

                     <DescriptionFaInput
                        value={values.descriptionFa}
                        setFieldValue={setFieldValue}
                        error={errors.descriptionFa}
                        touch={touched.descriptionFa}
                     />

                     <div className='flex items-center gap-5'>
                        <span className='verdana text-slate-400'>Project Active</span>

                        <Switch
                           checked={values.active}
                           name='active'
                           color='success'
                           onChange={() => setFieldValue('active', !values.active)}
                        />
                     </div>

                     <button
                        type='submit'
                        disabled={isSubmitting}
                        className='w-full rounded-lg border-2 border-green-600 py-2 text-base hover:shadow-md hover:shadow-green-600/40'
                     >
                        {isSubmitting ? <CircularProgress color='success' size={25} /> : 'Save'}
                     </button>

                     {addingNewproject ? (
                        ''
                     ) : (
                        <button
                           type='button'
                           disabled={isSubmitting}
                           onClick={handleDeleteproject}
                           className='w-full rounded-lg border-2 border-rose-300 py-2 text-base hover:shadow-md hover:shadow-rose-300/40'
                        >
                           {isSubmitting ? <CircularProgress color='error' size={25} /> : 'Delete'}
                        </button>
                     )}
                  </div>
               </Form>
            )}
         </Formik>
      )
   },
)

DetailForm.displayName = 'DetailForm'

export default DetailForm
