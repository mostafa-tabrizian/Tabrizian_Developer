import Link from 'next/link'
import ImageDelete from './imageDelete'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { memo } from 'react'
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })

const ThumbnailInput = memo(
   ({
      project: { thumbnail, _id },
      thumbnailPrevMemo,
      dragOverHandler,
      dropHandlerDesign,
      onFileSelected,
      loading,
   }: {
      project: {
         thumbnail: string
         _id: string
      }
      thumbnailPrevMemo: File[] | null
      dragOverHandler: (event: React.DragEvent<HTMLDivElement>) => void
      dropHandlerDesign: (event: React.DragEvent<HTMLDivElement>, type: string) => void
      onFileSelected: (files: FileList | null, type: string) => void
      loading: boolean
   }) => {
      return (
         <div className='space-y-6'>
            {thumbnail ? (
               <div>
                  <span className='verdana text-slate-400'>Thumbnail</span>

                  <div className='relative'>
                     <Link
                        target='_blank'
                        href={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${thumbnail}`}
                     >
                        <div className='mx-auto flex justify-center'>
                           <Image
                              className='rounded-lg p-1'
                              src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${thumbnail}`}
                              alt={_id}
                              width={600}
                              height={900}
                              loading='lazy'
                           />
                        </div>
                     </Link>

                     <ImageDelete type='thumbnail' project={_id} imageKey={thumbnail} />
                  </div>
               </div>
            ) : (
               <>
                  {thumbnailPrevMemo?.length ? (
                     <div>
                        <span className='verdana text-slate-400'>Thumbnail (Preview)</span>

                        {thumbnailPrevMemo.map((imageData: File) => {
                           return (
                              <Image
                                 key={imageData.name}
                                 className='rounded-xl object-contain'
                                 src={URL.createObjectURL(imageData)}
                                 alt={imageData.name}
                                 width='250'
                                 height='250'
                                 quality={100}
                                 loading='lazy'
                              />
                           )
                        })}
                     </div>
                  ) : (
                     ''
                  )}

                  <div
                     onDrop={(e) => dropHandlerDesign(e, 'thumbnail')}
                     onDragOver={dragOverHandler}
                     className='w-full rounded-lg border-2 border-slate-200 bg-slate-100 text-sm'
                  >
                     <Button
                        type='button'
                        // @ts-ignore
                        component='label'
                        sx={{ width: '100%', padding: '.5rem' }}
                     >
                        <span className='verdana text-sm'>Choose Thumbnail</span>
                        <input
                           hidden
                           accept='image/*'
                           type='file'
                           name='frontPreview'
                           onChange={(e) => onFileSelected(e?.target?.files, 'thumbnail')}
                           disabled={loading}
                        />
                     </Button>
                  </div>
               </>
            )}
         </div>
      )
   },
)

ThumbnailInput.displayName = 'ThumbnailInput'

export default ThumbnailInput
