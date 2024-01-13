'use client'

import { IBlog } from '@/models/blog'
import Switch from '@mui/material/Switch'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useMemo, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { toast } from 'react-toastify'
import LangInput from './langInput'
import SlugInput from './slugInput'
import ThumbnailInput from './thumbnailInput'
import TitleInput from './titleInput'

const Form = ({
   data: { authorId, slugQuery, blogData },
}: {
   data: { authorId: string; slugQuery: string; blogData: IBlog }
}) => {
   const newBlog = slugQuery == 'new'
   const blog = blogData

   const [loading, setLoading] = useState(false)
   const [uploadingProgress, setUploadingProgress] = useState(0)
   const [thumbnail, setThumbnail] = useState<string | File | null>(newBlog ? null : blog.thumbnail)
   const [active, setActive] = useState(newBlog ? false : blog.active)
   const [lang, setLang] = useState(newBlog ? 'fa' : blog.lang)
   const [title, setTitle] = useState(newBlog ? '' : blog.title)
   const [slug, setSlug] = useState(newBlog ? '' : slugQuery)
   const [thumbnailPreview, setThumbnailPreview] = useState<FileList | null>(null)
   const [readTime, setReadTime] = useState(newBlog ? 0 : blog.readTime)

   const router = useRouter()

   const quillRef = useRef(null)

   const imageHandler = () => {
      try {
         const input = document.createElement('input')

         input.setAttribute('type', 'file')
         input.setAttribute('accept', 'image/*')
         input.click()

         input.onchange = async () => {
            // @ts-ignore
            const file = input.files[0]
            const fileName = file.name

            const formData = new FormData()
            formData.append('image', file)

            const imageKey = await uploadFiles(file, fileName, 'content')
            insertInEditor(imageKey)
         }
      } catch (err) {
         return toast.error('Image handler couldnt handle it, what a Bitch!')
      }
   }

   const uploadFiles = async (image: File, filename: string, type: string) => {
      const imageName = filename.replace(' ', '-')

      const data = new FormData()
      data.append('image', image)
      data.append('folder', `blogs/${type}`)
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

      setUploadingProgress(0)

      return res.data['imageKey']
   }

   const insertInEditor = (imageKey: string) => {
      // @ts-ignore
      const editor = quillRef.current?.getEditor()
      editor.insertEmbed(
         editor.getSelection(),
         'image',
         `https://tabrizian.storage.iran.liara.space/tabrizian_codes/blogs/content/${imageKey}`,
      )
   }

   const handlePublish = async () => {
      if (
         !title.length ||
         !slug.length ||
         // @ts-ignore
         !quillRef.current.value.length ||
         thumbnail == null
      ) {
         return toast.warn(
            'Title, Slug, Text or thumbnail are empty, please complete the forms before publishing the blog',
         )
      }

      try {
         toast.info('Publishing the blog...')

         setLoading(true)

         const fileName = (thumbnail as File).name

         const imageKey = await uploadFiles(thumbnail as File, fileName, 'thumbnail')

         const slugReady = slug.trim().replaceAll(' ', '-').toLocaleLowerCase()

         const payload = {
            active,
            lang,
            title,
            slug: slugReady,
            thumbnail: imageKey,
            readTime,
            authorId,
            // @ts-ignore
            text: quillRef.current.value,
         }

         const res = await fetch('/api/--admin--/blog', {
            method: 'POST',
            body: JSON.stringify(payload),
         })

         const resData = await res.json()

         if (!res.ok) throw new Error()
         else if (resData.status == 500) {
            console.error(resData.message)
            return toast.error('Connection Error!')
         } else if (resData.message == 'notUnique') {
            return toast.warning('Slug not unique!')
         }

         toast.success('Blog Published Successfully.')

         fetch('/api/--admin--/revalidate?path=/')
         fetch('/api/--admin--/revalidate?path=/blog/' + slugReady)

         if (newBlog) {
            router.push(`/--admin--/blogs/${slugReady}`)
         }
      } catch (err) {
         toast.error('While publishing blog, an error occurred!')
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

   const handleSaveEdit = async () => {
      if (
         !title.length ||
         // @ts-ignore
         !quillRef.current.value.length ||
         thumbnail == null
      ) {
         return toast.warn(
            'Title, Slug, Text or thumbnail are empty, please complete the forms before publishing the blog',
         )
      }

      try {
         setLoading(true)

         const payload = {
            slug,
            active,
            lang,
            title,
            // @ts-ignore
            text: quillRef.current.value,
            thumbnail: null,
            readTime,
         }

         let imageKey

         if (typeof thumbnail == 'object') {
            const fileName = (thumbnail as File).name
            imageKey = await uploadFiles(thumbnail as File, fileName, 'thumbnail')
            // @ts-ignore
            payload.thumbnail = imageKey
         }

         const res = await fetch('/api/--admin--/blog', {
            method: 'PATCH',
            body: JSON.stringify(payload),
         })

         const resData = await res.json()

         if (!res.ok) throw new Error()
         else if (resData.status == 500) {
            console.error(resData.message)
            return toast.error('Connection Error!')
         }

         toast.success('Blog Edited Successfully.')
         setThumbnailPreview(null)

         if (typeof thumbnail == 'object') {
            setThumbnail(imageKey)
         }

         const slugReady = slug.trim().replaceAll(' ', '-').toLocaleLowerCase()

         fetch('/api/--admin--/revalidate?path=/')
         fetch('/api/--admin--/revalidate?path=/blog/' + slugReady)

         router.refresh()
      } catch (err) {
         toast.error('While saving blog edit, an error occurred!')
         console.error(err)
      } finally {
         setLoading(false)
      }
   }

   const quillModules = useMemo(() => {
      return {
         toolbar: {
            container: [
               [{ header: [1, 2, 3, 4, 5, 6, false] }],
               ['bold', 'italic', 'underline', 'strike', 'code'],
               [{ list: 'ordered' }, { list: 'bullet' }],
               [{ align: [] }],
               ['link', 'image'],
               ['clean'],
               [{ direction: 'rtl' }],
               [{ color: [] }],
            ],
            handlers: {
               image: imageHandler,
            },
         },
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const quillEditor = useMemo(() => {
      return (
         <ReactQuill
            ref={quillRef}
            theme='snow'
            value={newBlog ? '' : blog.text}
            style={{ height: '650px' }}
            placeholder='Write Your Sexy Blog'
            modules={quillModules}
         />
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const deleteHandle = async () => {
      try {
         setLoading(true)

         if (blog.thumbnail) {
            return toast.warning(
               // eslint-disable-next-line quotes
               "For Deleting the Blog, You Should Delete It's Thumbnail First",
            )
         }

         toast.info('Deleting The Blog...')

         const res = await fetch('/api/--admin--/blog', {
            method: 'DELETE',
            body: JSON.stringify({ slug }),
         })

         const resData = await res.json()

         if (!res.ok) throw new Error()
         else if (resData.status == 500) {
            console.error(resData.message)
            return toast.error('Connection Error!')
         }

         toast.success('Blog Deleted Successfully.')

         fetch('/api/--admin--/revalidate?path=/')

         router.push('/--admin--/blogs')
      } catch (err) {
         toast.error('Connection Error. Please Try Again.')
         return console.error(err)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div className='grid grid-cols-4 gap-5'>
         <div className='col-span-3'>{quillEditor}</div>

         <div className='space-y-5'>
            <TitleInput title={title} setTitle={setTitle} />
            <SlugInput slug={slug} setSlug={setSlug} newBlog={newBlog} />
            <ThumbnailInput
               loading={loading}
               blogId={blog._id}
               thumbnail={thumbnail}
               setThumbnail={setThumbnail}
               thumbnailPreview={thumbnailPreview}
               setThumbnailPreview={setThumbnailPreview}
            />
            {uploadingProgress}%
            <div className='flex items-center justify-between'>
               <span className='yekan text-base text-slate-400'>Read Time (Min):</span>
               <input
                  type='number'
                  name='readTime'
                  value={readTime}
                  onChange={(e) => setReadTime(parseInt(e.target.value))}
                  id='readTime'
                  className='w-16 rounded bg-slate-700 pl-5 text-slate-200'
               />
            </div>
            <div className='flex items-center justify-between'>
               <span className='yekan text-base text-slate-400'>Active:</span>

               <Switch
                  disabled={loading}
                  checked={active}
                  name='active'
                  color='success'
                  onChange={() => setActive((prev) => !prev)}
               />
            </div>
            <LangInput loading={loading} lang={lang} setLang={setLang} />
            <button
               disabled={loading}
               onClick={newBlog ? handlePublish : handleSaveEdit}
               className='w-full rounded-lg border-2 border-sky-900 py-1 text-base transition-colors hover:border-sky-600 hover:bg-sky-900/10'
            >
               {loading ? (
                  <svg
                     className='mx-auto h-6 w-6 animate-spin text-white'
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
                     <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
                  </svg>
               ) : (
                  <>{newBlog ? 'Publish' : 'Save Edit'}</>
               )}
            </button>
            {newBlog ? (
               ''
            ) : (
               <button
                  disabled={loading}
                  onClick={deleteHandle}
                  className='w-full rounded-lg border-2 border-rose-900 py-1 text-base transition-colors hover:border-rose-600 hover:bg-rose-900/10'
               >
                  {loading ? (
                     <svg
                        className='mx-auto h-6 w-6 animate-spin text-white'
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
                        <path d='M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828' />
                     </svg>
                  ) : (
                     'Delete'
                  )}
               </button>
            )}
         </div>
      </div>
   )
}

export default Form
