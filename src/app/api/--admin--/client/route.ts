import { NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import Client from '@/models/client'

export async function POST(request: Request) {
    const {
        name,
        mobileNumber,
        email,
        telegramId,
        active,
        paymentDay,
        paymentMonth
    }: {
        name: string
        mobileNumber: string
        email: string
        telegramId: string
        active: boolean
        paymentDay: number
        paymentMonth: number
    } = await request.json()

    try {
        await dbConnect()
        const client = await Client.create({
            name,
            mobileNumber,
            email,
            telegramId,
            active,
            paymentDate: { month: paymentMonth, day: paymentDay }
        })

        return NextResponse.json(client)
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }
}