import { toast } from 'react-toastify'

const sizeCalculator = (size: number) => (size / 1024 / 1024) * 1000 // ex: 400 KB

const filesSizeValidation = (files: File[]) => {
   let invalidFile: undefined | { name: string; size: number; valid: boolean }

   files.map((file) => {
      const size = sizeCalculator(file.size)

      if (size > 1000) {
         const size = Math.round(sizeCalculator(file.size))
         invalidFile = { valid: false, size, name: file.name }
      }
   })

   if (invalidFile) {
      toast.warning(
         `File size of ${invalidFile.name} is equal to ${invalidFile.size}KB, file size limit is 1000KB`,
      )
      return false
   } else return true
}

export default filesSizeValidation
