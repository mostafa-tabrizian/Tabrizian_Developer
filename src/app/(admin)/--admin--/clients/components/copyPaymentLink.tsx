'use client'

const CopyPaymentLink = ({ _id }: { _id: string }) => {
   const copyPaymentLink = async () => {
      const textarea = document.createElement('textarea')
      textarea.value = `https://mostafatabrizian.ir/fa/payment/client/${_id}`
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)

      const toast = await import('react-toastify').then((mod) => mod.toast)
      toast.info('Link copied to clipboard!')
   }

   return (
      <button
         type='button'
         onClick={copyPaymentLink}
         className='w-full rounded-lg border-2 border-blue-400 py-2 text-base hover:shadow-md hover:shadow-blue-400/40'
      >
         Copy Link
      </button>
   )
}

export default CopyPaymentLink
