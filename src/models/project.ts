import mongoose from 'mongoose'

export interface IProject {
   active: boolean
   _id: string
   name: string
   category: string
   frontSrc: string
   backSrc: string
   gallery: [string]
   width: number
   height: number
   createdAt: Date
   updatedAt: Date
}

const projectschema = new mongoose.Schema({
   active: {
      type: Boolean,
      default: true,
   },
   name: String,
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
   },
   frontSrc: String,
   backSrc: String,
   gallery: [String],
   width: Number,
   height: Number,
})

projectschema.set('timestamps', true)

projectschema.index({ name: 'text' })

export default mongoose.models.project || mongoose.model('project', projectschema)
