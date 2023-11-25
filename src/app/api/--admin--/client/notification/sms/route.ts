import { NextResponse } from 'next/server'

const sendSMS = async (name: string, mobile: string, domain: string, clientId: string) => {
    const payload = {
        mobile,
        'templateId': 761341,
        'parameters': [
            { name: 'N', value: name },
            { name: 'D', value: domain },
            { name: 'C', value: clientId }
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
        const { name, mobile, domain, clientId } = (await req.json()) as {
            name: string
            mobile: string
            domain: string,
            clientId: string
        }

        const smsRes = await sendSMS(name, mobile, domain, clientId)



        if (smsRes.status !== 1) return NextResponse.json({
            message: 'smsError'
        })
        else {
            console.error('smsRes', smsRes);
            return NextResponse.json({
                message: 'codeSent'
            })
        }

    } catch (error) {
        // @ts-ignore
        return NextResponse.json({ status: 500, message: error.message })
    }
}
