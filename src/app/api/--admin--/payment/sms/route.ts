import { NextResponse } from 'next/server'

const sendSMS = async (name: string, mobile: string) => {
    const payload = {
        'mobile': mobile,
        'templateId': 100000,
        'parameters': [
            {
                'name': 'Code',
                'value': name
            }
        ]
    }

    const res = await fetch('https://api.sms.ir/v1/send/verify', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': `${process.env.SMS_ACCESS_KEY}`,
        }
    })

    return res.json()
}

export async function POST(req: Request) {
    try {
        const { name, mobileNumber } = (await req.json()) as {
            name: string
            mobileNumber: string
        }

        const smsRes = await sendSMS(name, mobileNumber)

        if (smsRes.status !== 1) return NextResponse.json({
            message: 'smsError'
        })
        else
            return NextResponse.json({
                message: 'codeSent'
            })

    } catch (error) {
        // @ts-ignore
        return NextResponse.json({ status: 500, message: error.message })
    }
}
