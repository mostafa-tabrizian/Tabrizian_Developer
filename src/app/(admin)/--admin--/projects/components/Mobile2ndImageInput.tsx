import Link from 'next/link'
import ImageDelete from './imageDelete'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { memo } from 'react'
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })

const Mobile2ndImageInput = memo(
   ({
      project: { mobile2ndImage, _id },
      mobile2ndPrevMemo,
      dragOverHandler,
      dropHandlerDesign,
      onFileSelected,
      loading,
   }: {
      project: {
         mobile2ndImage: string
         _id: string
      }
      mobile2ndPrevMemo: File[] | null
      dragOverHandler: (event: React.DragEvent<HTMLDivElement>) => void
      dropHandlerDesign: (event: React.DragEvent<HTMLDivElement>, type: string) => void
      onFileSelected: (files: FileList | null, type: string) => void
      loading: boolean
   }) => {
      return (
         <div className='space-y-6'>
            {mobile2ndImage ? (
               <div>
                  <span className='verdana text-slate-400'>Mobile 2nd Image</span>

                  <div className='relative'>
                     <Link
                        target='_blank'
                        href={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile2ndImage}`}
                     >
                        <div className='mx-auto flex justify-center'>
                           <Image
                              className='rounded-lg p-1'
                              src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${mobile2ndImage}`}
                              alt={_id}
                              width={600}
                              height={900}
                              loading='lazy'
                           />
                        </div>
                     </Link>

                     <ImageDelete type='mobile2nd' project={_id} imageKey={mobile2ndImage} />
                  </div>
               </div>
            ) : (
               <>
                  {mobile2ndPrevMemo?.length ? (
                     <div>
                        <span className='verdana text-slate-400'>Mobile 2nd Image (Preview)</span>

                        {mobile2ndPrevMemo.map((imageData: File) => {
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
                     onDrop={(e) => dropHandlerDesign(e, 'mobile2nd')}
                     onDragOver={dragOverHandler}
                     className='w-full rounded-lg border-2 border-slate-200 bg-slate-100'
                  >
                     <Button
                        type='button'
                        // @ts-ignore
                        component='label'
                        sx={{ width: '100%', padding: '.5rem' }}
                     >
                        <span className='verdana text-sm'>Choose Mobile 2nd Image</span>
                        <input
                           hidden
                           accept='image/*'
                           type='file'
                           name='mobile2stImagePreview'
                           onChange={(e) => onFileSelected(e?.target?.files, 'mobile2nd')}
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

Mobile2ndImageInput.displayName = 'Mobile2ndImageInput'

export default Mobile2ndImageInput
