import { toast } from 'react-toastify'

const filesTypeValidation = (files: File[]) => {
   let invalidFile: undefined | { name: string; valid: boolean }

   files.map((file) => {
      if (!['image/jpeg', 'image/webp', 'image/avif'].includes(file.type)) {
         invalidFile = { valid: false, name: file.name }
      }
   })

   if (invalidFile) {
      toast.warning(`File type of ${invalidFile.name} should be avif, webp or jpeg`)
      return false
   } else return true
}

export default filesTypeValidation
