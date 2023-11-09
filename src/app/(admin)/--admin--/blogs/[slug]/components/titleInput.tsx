import { memo } from 'react'

const TitleInput = memo(
   ({
      title,
      setTitle
   }: {
      title: string
      setTitle: React.Dispatch<React.SetStateAction<string>>
   }) => {
      return (
         <div className='flex flex-col space-y-1'>
            <label htmlFor='title'>
               <span className='text-slate-400 yekan text-base'>Title:</span>
            </label>
            <input
               name='title'
               onChange={(e) => setTitle(e.target.value)}
               value={title}
               className='yekan w-full rounded-lg border-2 border-sky-700 bg-inherit p-2 text-base rtl'
               type='text'
            />
         </div>
      )
   },
)

TitleInput.displayName = 'titleInput'

export default TitleInput
