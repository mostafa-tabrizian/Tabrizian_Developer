'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { memo, useMemo, useState } from 'react'

import Mobile1stImageInput from './Mobile1stImageInput'
import GalleryInput from './galleryInput'
import LighthouseInput from './lighthouseInput'
import Mobile2ndImageInput from './Mobile2ndImageInput'
import ThumbnailInput from './thumbnailInput'
import axios from 'axios'

const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false })

const ImageInput = memo(
   ({
      project,
   }: {
      project: {
         _id: string
         thumbnail: string
         mobile1stImage: string
         mobile2ndImage: string
         gallery: string[]
         lighthouse: string
      }
   }) => {
      const [thumbnailPreview, setThumbnailPreview] = useState<FileList | null>(null)
      const [mobile1stImagePreview, setMobile1stImagePreview] = useState<FileList | null>(null)
      const [mobile2stImagePreview, setMobile2ndImagePreview] = useState<FileList | null>(null)
      const [galleryPreview, setGalleryPreview] = useState<FileList | null>(null)
      const [lighthousePreview, setLighthousePreview] = useState<FileList | null>(null)
      const [loading, setLoading] = useState(false)
      const [uploadingProgress, setUploadingProgress] = useState(0)

      const projectMemo = useMemo(() => project, [project])

      const thumbnailPrevMemo = useMemo(() => {
         return thumbnailPreview && Object.values(thumbnailPreview)
      }, [thumbnailPreview])

      const mobile1stPrevMemo = useMemo(() => {
         return mobile1stImagePreview && Object.values(mobile1stImagePreview)
      }, [mobile1stImagePreview])

      const mobile2ndPrevMemo = useMemo(() => {
         return mobile2stImagePreview && Object.values(mobile2stImagePreview)
      }, [mobile2stImagePreview])

      const galleryPrevMemo = useMemo(() => {
         return galleryPreview && Object.values(galleryPreview)
      }, [galleryPreview])

      const lighthousePrevMemo = useMemo(() => {
         return lighthousePreview && Object.values(lighthousePreview)
      }, [lighthousePreview])

      const router = useRouter()

      const createDbData = async (type: string, imageKey: string, imageName: string) => {
         const payload = {
            type,
            imageKey,
            _id: projectMemo._id,
         }

         try {
            const res = await fetch('/api/--admin--/image/db', {
               method: 'POST',
               body: JSON.stringify(payload),
            })

            if (!res.ok) throw new Error()

            const resData = await res.json()
            if (resData.message) throw new Error(resData.message)

            return res
         } catch (err) {
            const toast = await import('react-toastify').then((mod) => mod.toast)

            if (String(err).includes('please upload front project first')) {
               toast.warning('First Upload Mobile 1st Image')
               console.warn(err)
            } else {
               toast.error(`There Was An Error In Uploading ${imageName} To The Database!`)
               console.error(err)
            }
            return false
         }
      }

      const successUpload = async (type: string, name: string) => {
         if (type == 'mobile1st') setMobile1stImagePreview(null)
         else if (type == 'mobile2nd') setMobile2ndImagePreview(null)
         else if (type == 'thumbnail') setThumbnailPreview(null)
         else if (type == 'gallery') setGalleryPreview(null)
         else if (type == 'lighthouse') setLighthousePreview(null)

         fetch('/api/--admin--/revalidate?path=/')

         const toast = await import('react-toastify').then((mod) => mod.toast)
         toast.success(`Image ${name} has been uploaded successfully.`)

         router.refresh()
      }

      const onSubmit = async () => {
         const toast = await import('react-toastify').then((mod) => mod.toast)

         if (
            !thumbnailPrevMemo &&
            !mobile1stPrevMemo &&
            !mobile2ndPrevMemo &&
            !galleryPrevMemo &&
            !lighthousePrevMemo
         ) {
            return toast.warning('No image selected for upload!')
         }
         if (!projectMemo._id) {
            return toast.error('An error has occurred in determining the project!')
         }

         toast.info('Uploading and submitting image data...')
         setLoading(true)

         try {
            for (const imageData of [
               { project: thumbnailPrevMemo, type: 'thumbnail' },
               { project: mobile1stPrevMemo, type: 'mobile1st' },
               { project: mobile2ndPrevMemo, type: 'mobile2nd' },
               { project: galleryPrevMemo, type: 'gallery' },
               { project: lighthousePrevMemo, type: 'lighthouse' },
            ]) {
               if (!imageData.project) continue

               for (const image of imageData.project) {
                  // first
                  const imageName = image.name.replace(' ', '-')

                  const data = new FormData()
                  data.append('image', image)
                  data.append('folder', 'projects')
                  data.append('imageName', imageName)

                  const res = await axios.request({
                     method: 'post',
                     url: '/api/--admin--/image/s3',
                     data,
                     onUploadProgress: (p) => {
                        const progressPercent = (p.loaded * 100) / (p.total as number)
                        setUploadingProgress(progressPercent)
                     },
                  })

                  const imageKey = res.data['imageKey']

                  // db
                  const createDataResult = await createDbData(imageData.type, imageKey, imageName)
                  if (!createDataResult) return

                  successUpload(imageData.type, image.name)
               }
            }
         } catch (err) {
            toast.error(
               'An error occurred while uploading the images. (If you are using a VPN, please turn it off first)',
            )
            console.error(err)
         } finally {
            setLoading(false)
         }
      }

      const onFileSelected = async (files: FileList | null, type: string) => {
         if (!files) return

         const filesList: File[] = Object.values(files)

         const filesTypeValidation = await import('@/lib/filesTypeValidation').then(
            (mod) => mod.default,
         )
         const typeCheckRes = filesTypeValidation(filesList)
         if (!typeCheckRes) return

         const filesSizeValidation = await import('@/lib/filesSizeValidation').then(
            (mod) => mod.default,
         )
         const sizeCheckRes = filesSizeValidation(filesList)
         if (!sizeCheckRes) return

         if (type == 'mobile1st') {
            setMobile1stImagePreview(files)
         } else if (type == 'thumbnail') {
            setThumbnailPreview(files)
         } else if (type == 'mobile2nd') {
            setMobile2ndImagePreview(files)
         } else if (type == 'gallery') {
            setGalleryPreview(files)
         } else if (type == 'lighthouse') setLighthousePreview(files)
      }

      const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => event.preventDefault()

      const dropHandlerDesign = async (event: React.DragEvent<HTMLDivElement>, type: string) => {
         event.preventDefault()
         const files = event.dataTransfer.files
         const toast = await import('react-toastify').then((mod) => mod.toast)

         if (!files) return toast.warning('An error occurred while receiving the files')
         else if (files.length !== 1 && type !== 'gallery') {
            return toast.warning('Selected files are more than 1 image')
         }

         onFileSelected(files, type)
      }

      return (
         <div className='space-y-4 '>
            {uploadingProgress ? `${uploadingProgress}%` : ''}

            <ThumbnailInput
               project={{
                  thumbnail: projectMemo.thumbnail,
                  _id: projectMemo._id,
               }}
               thumbnailPrevMemo={thumbnailPrevMemo}
               dragOverHandler={dragOverHandler}
               dropHandlerDesign={dropHandlerDesign}
               onFileSelected={onFileSelected}
               loading={loading}
            />
            <hr />
            <Mobile1stImageInput
               project={{
                  mobile1stImage: projectMemo.mobile1stImage,
                  _id: projectMemo._id,
               }}
               mobile1stPrevMemo={mobile1stPrevMemo}
               dragOverHandler={dragOverHandler}
               dropHandlerDesign={dropHandlerDesign}
               onFileSelected={onFileSelected}
               loading={loading}
            />
            <hr />
            <Mobile2ndImageInput
               project={{
                  mobile2ndImage: projectMemo.mobile2ndImage,
                  _id: projectMemo._id,
               }}
               mobile2ndPrevMemo={mobile2ndPrevMemo}
               dragOverHandler={dragOverHandler}
               dropHandlerDesign={dropHandlerDesign}
               onFileSelected={onFileSelected}
               loading={loading}
            />
            <hr />
            <GalleryInput
               project={{
                  gallery: projectMemo.gallery,
                  _id: projectMemo._id,
               }}
               galleryPrevMemo={galleryPrevMemo}
               dragOverHandler={dragOverHandler}
               dropHandlerDesign={dropHandlerDesign}
               onFileSelected={onFileSelected}
               loading={loading}
            />
            <hr />
            <LighthouseInput
               project={{
                  lighthouse: projectMemo.lighthouse,
                  _id: projectMemo._id,
               }}
               lighthousePrevMemo={lighthousePrevMemo}
               dragOverHandler={dragOverHandler}
               dropHandlerDesign={dropHandlerDesign}
               onFileSelected={onFileSelected}
               loading={loading}
            />
            <hr />
            <div className='flex items-center justify-center rounded-lg border-2 border-slate-600 bg-slate-800'>
               {loading ? (
                  <div className='p-1.5'>
                     <CircularProgress color='success' size={20} />
                  </div>
               ) : (
                  <button
                     className='flex gap-5 py-2 text-blue-500'
                     disabled={loading}
                     onClick={() => onSubmit()}
                     type='button'
                  >
                     <svg
                        className='h-5 w-5'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        strokeWidth='2'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                     >
                        {' '}
                        <path stroke='none' d='M0 0h24v24H0z' />{' '}
                        <path d='M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1' />{' '}
                        <polyline points='9 15 12 12 15 15' />{' '}
                        <line x1='12' y1='12' x2='12' y2='21' />
                     </svg>
                     <span className='verdana text-sm'>Upload Images</span>
                  </button>
               )}
            </div>
         </div>
      )
   },
)

ImageInput.displayName = 'ImageInput'

export default ImageInput
