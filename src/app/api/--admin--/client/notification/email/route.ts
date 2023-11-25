import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const { email, name, domain, clientId } = (await req.json()) as {
            email: string
            name: string
            domain: string
            clientId: string
        }

        const {
            MAIL_HOST,
            MAIL_PORT,
            MAIL_USER,
            MAIL_PASSWORD
        } = process.env


        const transporter = nodemailer.createTransport({
            host: MAIL_HOST,
            port: MAIL_PORT,
            tls: true,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASSWORD,
            }
        });

        const sendRes = transporter.sendMail({
            from: 'support@mostafatabrizian.ir',
            to: email,
            subject: `تمدید سایت ${domain}`,
            html: `<div style="font-family: system-ui; direction: rtl; font-weight: 600" >
            <p>
               سلام ${name} عزیز. امیدوارم که حالتون خوب باشه. <br /> اعتبار سایت ${domain} رو به اتمام
               هستش. <br />
               لطفا جهت تمدید
               <a
                  style="
                     font-family: system-ui;
                     font-weight: 600;
                     text-decoration: underline;
                     color: #5258ff;
                  "
                  href='https://mostafatabrizian.ir/fa/client/${clientId}'
               >
                  کلیک کنید
               </a>
               <br />
               <br />
               مصطفی تبریزیان
               <p>
                  تلگرام:
                  <a
                     style="
                        font-family: system-ui;
                        font-weight: 600;
                        color: #5258ff;
                     "
                     href='https://t.me/Tabrizian_dev'
                  >
                     @Tabrizian_dev
                  </a>
               </p>
            </p>
         </div>`
        })

        const sendResData = await sendRes

        if (sendResData) {
            return NextResponse.json(200)
        } else {
            return NextResponse.json(sendResData)
        }




    }
    catch (error) {
        // @ts-ignore
        return NextResponse.json({ status: 500, message: error.message })
    }
}
