import axios from 'axios';
import { NextResponse } from 'next/server'

const sendTelegram = async (telegramId: string, name: string, domain: string, clientId: string) => {

    // const tunnelAgent = tunnel.httpsOverHttp({
    //     proxy: {
    //         host: '46.4.96.137',
    //         port: 8080,
    //     },
    // });

    // const proxyConfig = {
    //     host: '138.197.148.215',
    //     port: 80, // Replace with the actual port
        // auth: {
        //     username: 'your-username',
        //     password: 'your-password',
        // },
    // };


    const payload = {
        // eslint-disable-next-line camelcase
        chat_id: telegramId,
        text: `سلام ${name} عزیز. امیدوارم که حالتون خوب باشه.
        اعتبار سایت ${domain} رو به اتمام هستش. لطفا جهت تمدید از لینک زیر اقدام کنید:
        https://mostafatabrizian.ir/fa/payment/client/${clientId}`,
    }

    console.log('send telegram api telegramId', telegramId);

    const res = await axios.post(`https://api.telegram.org/${process.env.TELEGRAM_TOKEN}/sendMessage`, {
        ...payload
    }, {
        // httpsAgent: tunnelAgent,
        // proxy: proxyConfig
    })

    console.log('`https://api`', `https://api.telegram.org/${process.env.TELEGRAM_TOKEN}/sendMessage`);

    console.log('res', res);

    return res
}

export async function POST(req: Request,) {
    try {
        const { telegramId, name, domain, clientId } = (await req.json()) as {
            telegramId: string
            name: string
            domain: string
            clientId: string
        }

        const telegramRes = await sendTelegram(telegramId, name, domain, clientId)

        console.log('telegramRes', telegramRes)


        if (telegramRes.status !== 1)
            return NextResponse.json({
                message: 'smsError',
            })
        else
            return NextResponse.json({
                message: 'codeSent',
            })
    } catch (error) {
        // @ts-ignore
        return NextResponse.json({ status: 500, message: error.message })
    }
}
