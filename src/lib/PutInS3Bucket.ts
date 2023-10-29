import { toast } from 'react-toastify'

const putInS3Bucket = async (uploadUrl: string, imageFile: File) => {
   try {
      const res = await fetch(uploadUrl, {
         method: 'PUT',
         body: imageFile,
      })

      if (!res.ok) throw new Error()

      return res
   } catch (err) {
      toast.error('An error occurred while putting image in bucket')
      return console.error(err)
   }
}

export default putInS3Bucket
