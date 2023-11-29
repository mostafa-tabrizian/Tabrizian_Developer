import { NextRequest, NextResponse } from 'next/server'
import Payment from '@/models/payment';
import Client from '@/models/client';

export async function POST(request: NextRequest) {

    const { clientId, clientName, monthRenewal, clientPrice } = await request.json()

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
                callback_url: `${process.env.API_URL}/api/client/payment?Client=${clientId}&Price=${clientPrice}&Months=${monthRenewal}`,
                description: `تمدید ${clientName} به مدت ${monthRenewal.toLocaleString(
                    'fa',
                )} ماه به قیمت ${amount.toLocaleString('fa')} تومان`,
            }),
        })

        const resData = await res.json()

        return NextResponse.json({ authority: resData.data.authority })
    } catch (err) {
        console.error('err Zarinpal: ', err)
        return NextResponse.json(false)
    }
}

// ZARIN PALL
export async function GET(req: NextRequest) {
    const status = req.nextUrl.searchParams.get('Status')
    const authority = req.nextUrl.searchParams.get('Authority')
    const client = req.nextUrl.searchParams.get('Client') as string
    const price = req.nextUrl.searchParams.get('Price') as string
    const months = req.nextUrl.searchParams.get('Months') as string

    if (status == 'OK' && authority?.length == 36) {
        const verifyPayment = async () => {
            const res = await fetch('https://api.zarinpal.com/pg/v4/payment/verify.json', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'merchant_id': process.env.ZARINPAL_MERCHANT_ID,
                    amount: parseInt(price) * parseInt(months),
                    authority
                })
            })

            const resData = await res.json()

            return resData.data
        }

        const verifyRes = await verifyPayment()

        if (verifyRes.code == 100 || verifyRes.code == 101) {  // 100=success, 101=verified successs before

            const payment = await Payment.create({
                client,
                price,
                months,
                cardNumber: verifyRes.card_pan,
                refId: verifyRes.ref_id
            })

            const clientData = await Client.findById(client)

            const currentRenewalEnd = new Date(clientData.renewalEnd).getTime()
            const increaseMonths = parseInt(months) * 30 * 24 * 60 * 60 * 1000

            clientData.renewalEnd = new Date(currentRenewalEnd + increaseMonths)
            clientData.save()

            return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=OK&ID=${payment._id}&RefId=${payment.refId}&RenewalEnd=${currentRenewalEnd + increaseMonths}`)
        } else {
            return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)
        }
    } else {
        return NextResponse.redirect(`${process.env.API_URL}/fa/payment/result?Status=NOK`)
    }
}