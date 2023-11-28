import mongoose from 'mongoose'

export interface IPayment {
   _id: string
   client: string
   description: string
   amount: number
   cardNumber: string
   refId: string
   paid: boolean
   createdAt: Date
   updatedAt: Date
}

const PaymentSchema = new mongoose.Schema({
   client: String,
   description: String,
   amount: Number,
   cardNumber: {
      type: String,
      default: ''
   },
   refId: {
      type: String,
      default: ''
   },
   paid: {
      type: Boolean,
      default: false
   }
})

PaymentSchema.set('timestamps', true)

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema)
