import mongoose from 'mongoose'

export interface IProject {
   active: boolean
   _id: string
   titleEn: string
   titleFa: string
   mobile1stImage: string
   mobile2ndImage: string
   desktopImage: string
   gallery: [string]
   createdAt: Date
   updatedAt: Date
   clientEn: string
   clientFa: string
   descriptionEn: string
   descriptionFa: string
   live: string
   technologies: string
}

const projectSchema = new mongoose.Schema({
   active: {
      type: Boolean,
      default: true,
   },
   titleEn: String,
   titleFa: String,
   mobile1stImage: String,
   mobile2ndImage: String,
   desktopImage: String,
   gallery: [String],
   clientEn: String,
   clientFa: String,
   descriptionEn: String,
   descriptionFa: String,
   live: String,
   technologies: String
})

projectSchema.set('timestamps', true)

projectSchema.index({ titleEn: 'text', titleFa: 'text' })

export default mongoose.models.project || mongoose.model('project', projectSchema)
