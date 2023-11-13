import Link from 'next/link'
import ImageDelete from './imageDelete'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { memo } from 'react'
const Button = dynamic(() => import('@mui/material/Button'), { ssr: false })

const LighthouseInput = memo(
   ({
      project: { lighthouse, _id },
      lighthousePrevMemo,
      dragOverHandler,
      dropHandlerDesign,
      onFileSelected,
      loading,
   }: {
      project: {
         lighthouse: string
         _id: string
      }
      lighthousePrevMemo: File[] | null
      dragOverHandler: (event: React.DragEvent<HTMLDivElement>) => void
      dropHandlerDesign: (event: React.DragEvent<HTMLDivElement>, type: string) => void
      onFileSelected: (files: FileList | null, type: string) => void
      loading: boolean
   }) => {
      return (
         <div className='space-y-6'>
            {lighthouse ? (
               <div>
                  <span className='verdana text-slate-400'>Lighthouse</span>

                  <div className='relative'>
                     <Link
                        target='_blank'
                        href={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${lighthouse}`}
                     >
                        <div className='mx-auto flex justify-center'>
                           <Image
                              className='rounded-lg p-1'
                              src={`https://tabrizian.storage.iran.liara.space/tabrizian_codes/projects/${lighthouse}`}
                              alt={_id}
                              width={600}
                              height={900}
                              loading='lazy'
                           />
                        </div>
                     </Link>

                     <ImageDelete type='lighthouse' project={_id} imageKey={lighthouse} />
                  </div>
               </div>
            ) : (
               <>
                  {lighthousePrevMemo?.length ? (
                     <div>
                        <span className='verdana text-slate-400'>Lighthouse (Preview)</span>

                        {lighthousePrevMemo.map((imageData: File) => {
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
                     onDrop={(e) => dropHandlerDesign(e, 'lighthouse')}
                     onDragOver={dragOverHandler}
                     className='w-full rounded-lg border-2 border-slate-600 bg-slate-800 text-sm'
                  >
                     <Button
                        type='button'
                        // @ts-ignore
                        component='label'
                        sx={{ width: '100%', padding: '.5rem' }}
                     >
                        <span className='verdana text-sm'>Choose Lighthouse</span>
                        <input
                           hidden
                           accept='image/*'
                           type='file'
                           name='lighthousePreview'
                           onChange={(e) => onFileSelected(e?.target?.files, 'lighthouse')}
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

LighthouseInput.displayName = 'LighthouseInput'

export default LighthouseInput
