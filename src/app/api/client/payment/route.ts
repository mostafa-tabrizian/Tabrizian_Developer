import { NextRequest, NextResponse } from 'next/server'
import Payment, { IPayment } from '@/models/payment';

export async function POST(request: NextRequest) {

    const { clientName, monthRenewal, clientPrice } = await request.json()

    try {
        const amount = monthRenewal * clientPrice

        const res = await fetch('https://api.zarinpal.com/pg/v4/payment/request.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // eslint-disable-next-line camelcase
                merchant_id: process.env.ZARINPAL_MERCHANT_ID,
                amount,
                currency: 'IRT',
                // eslint-disable-next-line camelcase
                callback_url: `${process.env.API_URL}/api/client/payment?Amount=${amount}`,
                description: `تمدید ${clientName} به مدت ${monthRenewal.toLocaleString(
                    'fa',
                )} ماه به قیمت ${amount.toLocaleString('fa')} تومان`,
            }),
        })

        const resData = await res.json()

        return NextResponse.json({ authority: resData.data.authority })
    } catch (err) {
        console.log('err Zarinpal: ', err)
        return NextResponse.json(false)
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