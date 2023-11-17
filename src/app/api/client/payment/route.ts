import { NextRequest, NextResponse } from 'next/server'
import Payment, { IPayment } from '@/models/payment';

// PAYPING
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

    if (!successPayment) return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)

    const paymentData: IPayment | null = await Payment.findById(reqData.clientrefid)

    if (!paymentData) return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)

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
        paymentData['refId'] = reqData.refid as string
        paymentData['paid'] = true
        // @ts-ignore
        paymentData.save()
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=OK`)
    } else {
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)
    }

}


// ZARIN PALL
export async function GET(req: NextRequest) {
    const status = req.nextUrl.searchParams.get('Status')
    const authority = req.nextUrl.searchParams.get('Authority')
    const amount = req.nextUrl.searchParams.get('Amount')
    const paymentId = req.nextUrl.searchParams.get('PaymentId')

    if (status == 'OK' && authority?.length == 36) {

        const paymentData: IPayment | null = await Payment.findById(paymentId)

        if (!paymentData) return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)

        const verifyPayment = async () => {
            const res = await fetch('https://api.zarinpal.com/pg/v4/payment/verify.json', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'merchant_id': process.env.ZARINPAL_MERCHANT_ID,
                    amount,
                    authority
                })
            })

            const resData = await res.json()

            return resData.data
        }

        const verifyRes = await verifyPayment()


        if (verifyRes.code == 100 || verifyRes.code == 101) {  // 100=success, 101=verified successs before
            paymentData['cardNumber'] = verifyRes.card_pan as string
            paymentData['refId'] = verifyRes.ref_id as string
            paymentData['paid'] = true
            // @ts-ignore
            paymentData.save()
            return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=OK`)
        } else {
            return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)
        }
    } else {
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)
    }
}