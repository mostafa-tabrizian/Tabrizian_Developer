import mongoose from 'mongoose'

export interface IInterestedClient {
   _id: string
   mobileNumber: string
   createdAt: Date
   updatedAt: Date
}

const InterestedClientSchema = new mongoose.Schema({
   mobileNumber: String
})

InterestedClientSchema.set('timestamps', true)

export default mongoose.models.InterestedClient || mongoose.model('InterestedClient', InterestedClientSchema)
