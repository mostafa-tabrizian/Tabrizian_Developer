import dbConnect from '@/utils/dbConnect'
import { NextRequest, NextResponse } from 'next/server'
import InterestedClient from '@/models/interested-client'

export async function POST(request: NextRequest) {

    const { mobileNumber } = await request.json()

    try {
        await dbConnect()
        const interestExist = await InterestedClient.findOne({ mobileNumber })

        if (interestExist) return NextResponse.json({ status: 1000 })

        const payload = {
            mobile: '09128521769',
            templateId: 100000,
            parameters: [{ name: 'CODE', value: `کارفرما: ${mobileNumber}` }],
        }

        const res = await fetch('https://api.sms.ir/v1/send/verify', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `${process.env.SMS_ACCESS_KEY}`,
            },
        })

        const resData = await res.json()

        if (resData.status == 1) {
            await InterestedClient.create({ mobileNumber })
        }

        return NextResponse.json({ status: resData.status, message: resData.message })
    } catch (err) {
        console.error('err interested client sms: ', err)
        return NextResponse.json({ status: 500 })
    }
}