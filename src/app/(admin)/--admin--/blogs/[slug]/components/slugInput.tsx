import { memo } from 'react'

const SlugInput = memo(
   ({
      slug,
      setSlug,
      newBlog,
   }: {
      slug: string
      setSlug: React.Dispatch<React.SetStateAction<string>>
      newBlog: boolean
   }) => {
      return (
         <div className='flex flex-col space-y-1'>
            <label htmlFor='slug'>
               <span className='yekan text-base text-slate-400'>Slug:</span>
            </label>
            <input
               disabled={!newBlog}
               name='slug'
               onChange={(e) => setSlug(e.target.value)}
               value={slug}
               className='yekan rtl w-full rounded-lg border-2 border-sky-700 bg-inherit p-2 text-base placeholder:text-slate-300'
               type='text'
               placeholder='slug-for-this-blog'
            />
            {slug.length ? (
               <span className='yekan text-sm text-slate-500'>
                  preview: /{encodeURI(slug.trim().replaceAll(' ', '-'))}
               </span>
            ) : (
               ''
            )}
         </div>
      )
   },
)

SlugInput.displayName = 'SlugInput'

export default SlugInput
