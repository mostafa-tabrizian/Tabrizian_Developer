const LangInput = ({loading, lang, setLang}: {loading: boolean, lang: string, setLang: React.Dispatch<React.SetStateAction<string>>}) => {
   return (
      <div className='flex items-center justify-between'>
         <span className='yekan text-base text-slate-400'>Language:</span>
         <select
         disabled={loading}
            className='yekan rounded-lg bg-slate-800 px-4 py-1 text-base'
            value={lang}
            onChange={(e) => {
               setLang(e.target.value)
            }}
         >
            <option value='en'>English</option>
            <option value='fa'>فارسی</option>
         </select>
      </div>
   )
}

export default LangInput
