import { NextResponse } from 'next/server'

// @ts-ignore
export async function POST(req) {


    const reqBody = await req.formData();
    const reqData: {
        code: null | string
        refid: null | string
        clientrefid: null | string
        cardnumber: null | string
        cardhashpan: null | string
    } = {
        code: null,
        refid: null,
        clientrefid: null,
        cardnumber: null,
        cardhashpan: null
    }

    for (const [key, value] of reqBody.entries()) {
        // @ts-ignore
        reqData[key] = value
    }

    const successPayment = reqData['cardnumber'] && reqData['cardhashpan']

    const verifyPayment = async () => {
        const res = await fetch('https://api.payping.ir/v2/pay/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.PAYPING_TOKEN}`,
            },
            body: JSON.stringify({
                'refId': reqData.refid,
                'amount': (reqData.clientrefid as string).split('-')[1]
            })
        })

        const resData = await res.json()
        return resData.amount
    }

    const verifyRes = await verifyPayment()

    if (successPayment && verifyRes) {
        // save in db with clientRefId
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/success`)
    } else {
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/fail`)
    }

}
