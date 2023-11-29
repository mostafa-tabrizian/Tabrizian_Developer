import mongoose from 'mongoose'

export interface IPayment {
   _id: string
   client: string
   price: number
   months: number
   cardNumber: string
   refId: string
   createdAt: Date
   updatedAt: Date
}

const PaymentSchema = new mongoose.Schema({
   client: String,
   price: Number,
   months: Number,
   cardNumber: {
      type: String,
      default: ''
   },
   refId: {
      type: String,
      default: ''
   }
})

PaymentSchema.set('timestamps', true)

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema)
