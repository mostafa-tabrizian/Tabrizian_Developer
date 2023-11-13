import { NextResponse } from 'next/server'
import Payment, { IPayment } from '@/models/payment';

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

    if (!successPayment) return NextResponse.redirect(`${process.env.API_URL}/fa/payment/fail`)

    const paymentData: IPayment | null = await Payment.findById(reqData.clientrefid)

    if (!paymentData) return NextResponse.redirect(`${process.env.API_URL}/fa/payment/fail`)

    const verifyPayment = async () => {
        const res = await fetch('https://api.payping.ir/v2/pay/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.PAYPING_TOKEN}`,
            },
            body: JSON.stringify({
                'refId': reqData.refid,
                'amount': paymentData.amount
            })
        })

        const resData = await res.json()
        return resData.amount
    }

    const verifyRes = await verifyPayment()

    if (verifyRes) {
        paymentData['cardNumber'] = reqData.cardnumber as string
        paymentData['paid'] = true
        // @ts-ignore
        paymentData.save()
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/success`)
    } else {
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/fail`)
    }

}
