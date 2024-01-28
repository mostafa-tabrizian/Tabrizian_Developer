import { NextResponse } from 'next/server'

import dbConnect from '@/utils/dbConnect'
import Payment from '@/models/payment'

export async function POST(request: Request) {
    const {
        client,
        description,
        amount
    }: {
        client: string
        description: string
        amount: number
    } = await request.json()

    try {
        await dbConnect()
        const payment = await Payment.create({
            client,
            description,
            amount
        })

        return NextResponse.json(payment)
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }
}