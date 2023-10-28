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
               titleEn: addingNewproject ? '' : project.titleEn,
               titleFa: addingNewproject ? '' : project.titleFa,
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
                     <div className='space-y-1'>
                        <label htmlFor='titleEn'>
                           <span className='text-slate-400'>Project English Title</span>
                        </label>
                        <input
                           name='titleEn'
                           onChange={(e) => setFieldValue('titleEn', e.target.value)}
                           value={values.titleEn}
                           className='verdana mr-3 w-full rounded-lg border-2 border-slate-200 bg-slate-100 p-2 text-sm'
                           type='text'
                        />
                        <div className='flex items-center gap-2'>
                           <svg
                              className='h-5 w-5 text-yellow-500'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='2'
                                 d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                              />
                           </svg>
                           <p className='text-xs text-yellow-500'>
                              Preferably, the english title of the project should not be changed
                           </p>
                        </div>
                     </div>

                     {errors.titleEn && touched.titleEn ? (
                        <p className='text-sm text-red-500'>{errors.titleEn}</p>
                     ) : (
                        ''
                     )}

                     <div className='space-y-1'>
                        <label htmlFor='titleFa'>
                           <span className='text-slate-400'>Project Farsi Title</span>
                        </label>
                        <input
                           name='titleFa'
                           onChange={(e) => setFieldValue('titleFa', e.target.value)}
                           value={values.titleFa}
                           className='verdana mr-3 w-full rounded-lg border-2 border-slate-200 bg-slate-100 p-2 text-sm'
                           type='text'
                        />
                     </div>

                     {errors.titleFa && touched.titleFa ? (
                        <p className='text-sm text-red-500'>{errors.titleFa}</p>
                     ) : (
                        ''
                     )}

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
