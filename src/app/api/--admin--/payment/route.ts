import { NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import Payment from '@/models/payment'

export async function POST(request: Request) {
    const {
        payerName,
        description,
        amount
    }: {
        payerName: string
        description: string
        amount: number
    } = await request.json()

    try {
        await dbConnect()
        const payment = await Payment.create({
            payerName,
            description,
            amount,
            cardNumber: '',
        })

        return NextResponse.json(payment)
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }
}