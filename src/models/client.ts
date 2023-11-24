import mongoose from 'mongoose'

export interface IClient {
   _id: string
   name: string
   price: number
   domain: string
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
   name: {
      type: String,
      require
   },
   price: Number,
   domain: String,
   mobileNumber: {
      type: String,
      default: ''
   },
   email: {
      type: String,
      default: ''
   },
   telegramId: {
      type: String,
      default: ''
   },
   active: Boolean,
   paymentDate: { month: Number, day: Number },
   lastPayment: Date
})

PaymentSchema.set('timestamps', true)

export default mongoose.models.Client || mongoose.model('Client', PaymentSchema)
