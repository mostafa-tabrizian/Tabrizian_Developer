import Link from 'next/link'
import ImageDelete from './imageDelete'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { memo } from 'react'
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })

const Mobile1stImageInput = memo(
   ({
      project: { mobile1stImage, _id },
      mobile1stPrevMemo,
      dragOverHandler,
      dropHandlerDesign,
      onFileSelected,
      loading,
   }: {
      project: {
         mobile1stImage: string
         _id: string
      }
      mobile1stPrevMemo: File[] | null
      dragOverHandler: (event: React.DragEvent<HTMLDivElement>) => void
      dropHandlerDesign: (event: React.DragEvent<HTMLDivElement>, type: string) => void
      onFileSelected: (files: FileList | null, type: string) => void
      loading: boolean
   }) => {
      return (
         <div className='space-y-6'>
            {mobile1stImage ? (
               <div>
                  <span className='verdana text-slate-400'>Mobile 1st Image</span>

                  <div className='relative'>
                     <Link
                        target='_blank'
                        href={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile1stImage}`}
                     >
                        <div className='mx-auto flex justify-center'>
                           <Image
                              className='rounded-lg p-1'
                              src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile1stImage}`}
                              alt={_id}
                              width={600}
                              height={900}
                              loading='lazy'
                           />
                        </div>
                     </Link>

                     <ImageDelete type='mobile1st' project={_id} imageKey={mobile1stImage} />
                  </div>
               </div>
            ) : (
               <>
                  {mobile1stPrevMemo?.length ? (
                     <div>
                        <span className='verdana text-slate-400'>Mobile 1st Image (Preview)</span>

                        {mobile1stPrevMemo.map((imageData: File) => {
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
                     onDrop={(e) => dropHandlerDesign(e, 'mobile1st')}
                     onDragOver={dragOverHandler}
                     className='w-full rounded-lg border-2 border-slate-200 bg-slate-100 text-sm'
                  >
                     <Button
                        type='button'
                        // @ts-ignore
                        component='label'
                        sx={{ width: '100%', padding: '.5rem' }}
                     >
                        <span className='verdana text-sm'>Choose Mobile 1st Image</span>
                        <input
                           hidden
                           accept='image/*'
                           type='file'
                           name='frontPreview'
                           onChange={(e) => onFileSelected(e?.target?.files, 'mobile1st')}
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

Mobile1stImageInput.displayName = 'Mobile1stImageInput'

export default Mobile1stImageInput
