import mongoose from 'mongoose'

export interface IProject {
   active: boolean
   _id: string
   nameEn: string
   nameFa: string
   mobile1stPreview: string
   mobile2ndPreview: string
   desktopPreview: string
   gallery: [string]
   createdAt: Date
   updatedAt: Date
   clientEn: string
   clientFa: string
   descriptionEn: string
   descriptionFa: string
}

const projectSchema = new mongoose.Schema({
   active: {
      type: Boolean,
      default: true,
   },
   nameEn: String,
   nameFa: String,
   mobile1stPreview: String,
   mobile2ndPreview: String,
   desktopPreview: String,
   gallery: [String],
   clientEn: String,
   clientFa: String,
   descriptionEn: String,
   descriptionFa: String,
})

projectSchema.set('timestamps', true)

projectSchema.index({ name: 'text' })

export default mongoose.models.project || mongoose.model('project', projectSchema)
