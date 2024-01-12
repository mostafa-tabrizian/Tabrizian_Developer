import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const {
        imageName,
        folderName
    }: {
        imageName: string
        folderName: string
    } = await req.json()

    const s3 = new S3Client({
        region: 'me-central-1',
        endpoint: process.env.LIARA_ENDPOINT as string,
        credentials: {
            accessKeyId: process.env.LIARA_ACCESS_KEY as string,
            secretAccessKey: process.env.LIARA_SECRET_KEY as string,
        },
    });

    const getSign = async () => {
        const uniqueId = Math.random().toString(36).substring(2, 7)
        const date = new Date()
        const yearMonth = `${date.getFullYear()}/${date.getMonth() + 1}`
        const imageKey = `${yearMonth}/${uniqueId}-${imageName}`
        const Key = `tabrizian_codes/${folderName}/${imageKey}`

        const url = await getSignedUrl(
            s3,
            new PutObjectCommand({
                Bucket: 'tabrizian',
                Key
            }),
            { expiresIn: 3600 }
        );

        return { url, imageKey }
    }

    const signUrlAndImageKey = await getSign()

    return NextResponse.json({ ...signUrlAndImageKey })
}
