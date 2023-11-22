

import { Upload } from '@aws-sdk/lib-storage'
import { S3Client, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { NextResponse } from 'next/server'

const s3Client = new S3Client({
   region: 'me-central-1',
   endpoint: process.env.LIARA_ENDPOINT,
   credentials: {
      accessKeyId: process.env.LIARA_ACCESS_KEY || '',
      secretAccessKey: process.env.LIARA_SECRET_KEY || '',
   },
})

export async function POST(req: Request) {
   const reqBody = await req.formData()
   const reqData: {
      image: File | null, folder: string | null, imageName: string | null
   } = {
      image: null, folder: null, imageName: null
   }

   // @ts-ignore
   for (const [key, value] of reqBody.entries()) {
      // @ts-ignore
      reqData[key] = value
   }

   const uniqueId = Math.random().toString(36).substring(2, 7)
   const date = new Date()
   const yearMonth = `${date.getFullYear()}/${date.getMonth() + 1}`
   const imageKey = `${yearMonth}/${uniqueId}-${reqData['imageName']}`
   const Key = `tabrizian_codes/${reqData['folder']}/${imageKey}`

   try {
      const parallelUploads3 = new Upload({
         client: new S3Client({
            region: 'me-central-1',
            endpoint: process.env.LIARA_ENDPOINT as string,
            credentials: {
               accessKeyId: process.env.LIARA_ACCESS_KEY as string,
               secretAccessKey: process.env.LIARA_SECRET_KEY as string,
            },
         }),
         leavePartsOnError: false,
         params: { Bucket: 'tabrizian', Key, Body: reqData['image'] as File },
      })

      parallelUploads3.done()
      return NextResponse.json({ imageKey })
   } catch (err) {
      console.log('err uploadFiles', err)
      return NextResponse.json(null)
   }

}

export async function DELETE(req: Request) {
   const { imageKey, folder } = await req.json()

   const Key = `/tabrizian_codes/${folder}/${imageKey}`

   const params = {
      Bucket: process.env.LIARA_BUCKET_NAME,
      Key,
   }

   const resDelete = await s3Client.send(new DeleteObjectCommand(params))

   return NextResponse.json({ resDelete })
}
