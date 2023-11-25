import { NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import Client from '@/models/client'

export async function POST(request: Request) {
    const {
        name,
        price,
        domain,
        mobileNumber,
        email,
        telegramId,
        active,
        paymentDay,
        paymentMonth
    }: {
        name: string
        price: number
        domain: string
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
            price,
            domain,
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

export async function PATCH(request: Request) {
    const {
        _id,
        name,
        price,
        domain,
        mobileNumber,
        email,
        telegramId,
        active,
        paymentDay,
        paymentMonth
    }: {
        _id: string
        name: string
        price: number
        domain: string
        mobileNumber: string
        email: string
        telegramId: string
        active: boolean
        paymentDay: number
        paymentMonth: number
    } = await request.json()

    try {
        await dbConnect()
        const client = await Client.findOneAndUpdate({ _id }, {
            name,
            price,
            domain,
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