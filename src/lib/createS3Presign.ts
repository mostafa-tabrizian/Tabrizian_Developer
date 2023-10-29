import { toast } from 'react-toastify'

const createS3Presign = async (imageName: string, folder: string) => {
   try {
      const res = await fetch('/api/--admin--/project/image/s3', {
         method: 'POST',
         body: JSON.stringify({
            folder,
            imageName,
         }),
      })

      if (!res.ok) throw new Error()

      return res
   } catch (err) {
      toast.error('While creating the presign an error occurred!')
      console.error(err)
      return false
   }
}

export default createS3Presign
