'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import deleteFromS3Bucket from '@/lib/deleteFromS3Bucket'

import dynamic from 'next/dynamic'
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'), { ssr: false })
import Dialog from '@mui/material/Dialog'

const ImageDelete = ({
   setThumbnail,
   blogId,
   imageKey,
}: {
   setThumbnail: React.Dispatch<React.SetStateAction<string | File | null>>
   blogId: string
   imageKey: string | File | null
}) => {
   const [loading, setLoading] = useState(false)
   const [confirmation, setConfirmation] = useState(false)

   const router = useRouter()

   const handleDelete = async () => {
      setConfirmation(false)

      if (!imageKey) {
         return toast.warning('An error occurred while deleting the image!')
      }

      if (!blogId) {
         return toast.error('Project not correctly selected!')
      }

      setLoading(true)

      try {
         const fileDeleteResult = await deleteFromS3Bucket(imageKey as string, 'blogs/thumbnail')

         if (!fileDeleteResult) throw new Error('file upload to s3')

         return await removeFromDb()
      } catch (error) {
         toast.error(
            'An error occureed while uploading the image. If VPN is on, please turn it off',
         )
         return console.error(error)
      } finally {
         setLoading(false)
      }
   }

   const removeFromDb = async () => {
      const payload = {
         type: 'blogs/thumbnail',
         imageKey,
         _id: blogId,
      }

      try {
         const res = await fetch('/api/--admin--/image/db', {
            method: 'DELETE',
            body: JSON.stringify(payload),
         })

         if (!res.ok) throw new Error()

         toast.success('Image deleted successfully.')

         fetch('/api/--admin--/revalidate?path=/')

         setThumbnail(null)
         router.refresh()
      } catch (err) {
         toast.error('An error occurred while deleting the image!')
         console.error(err)
      }
   }

   return (
      <>
         <div className='absolute -top-5 right-0 flex items-center space-x-3'>
            {loading ? (
               <div className='py-2'>
                  <CircularProgress color='success' size={15} />
               </div>
            ) : (
               <button type='button' onClick={() => setConfirmation(true)}>
                  <svg
                     className='h-4 w-4 text-slate-400'
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
                     <path stroke='none' d='M0 0h24v24H0z' /> <line x1='18' y1='6' x2='6' y2='18' />{' '}
                     <line x1='6' y1='6' x2='18' y2='18' />
                  </svg>
               </button>
            )}
         </div>

         <Dialog onClose={() => setConfirmation(false)} open={confirmation}>
            <div className='space-y-5 p-5 text-center'>
               <svg
                  className='mx-auto h-16 w-16 text-rose-500'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
               >
                  {' '}
                  <circle cx='12' cy='12' r='10' /> <line x1='15' y1='9' x2='9' y2='15' />{' '}
                  <line x1='9' y1='9' x2='15' y2='15' />
               </svg>
               <h1>Are You Sure?</h1>
               <span className='font-semibold'>
                  After deleting the image, there is way for recovery <br /> Are you sure about
                  deleting the image?
               </span>
               <div className='flex justify-around space-x-5'>
                  <button
                     onClick={() => setConfirmation(false)}
                     className='w-full rounded bg-slate-300 py-1'
                  >
                     Cancel
                  </button>
                  <button
                     onClick={handleDelete}
                     className='w-full rounded bg-rose-500 py-1 text-white'
                  >
                     Delete
                  </button>
               </div>
            </div>
         </Dialog>
      </>
   )
}

export default ImageDelete
