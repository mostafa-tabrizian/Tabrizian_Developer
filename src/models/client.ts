import mongoose from 'mongoose'

export interface IClient {
   _id: string
   name: string
   mobileNumber: string
   email: string
   telegramId: string
   active: boolean
   paymentDate: { month: number, day: number }
   lastPayment: Date
   createdAt: Date
   updatedAt: Date
}

const PaymentSchema = new mongoose.Schema({
   name: String,
   mobileNumber: String,
   email: String,
   telegramId: String,
   active: Boolean,
   paymentDate: { month: Number, day: Number },
   lastPayment: Date
})

PaymentSchema.set('timestamps', true)

export default mongoose.models.Client || mongoose.model('Client', PaymentSchema)
