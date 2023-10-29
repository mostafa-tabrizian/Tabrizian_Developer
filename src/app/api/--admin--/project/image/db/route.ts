import { NextResponse } from 'next/server'

import Project from '@/models/project'
import dbConnect from '@/lib/dbConnect'

interface BodyType {
   type: string
   imageKey: string
   imageDimention: [number, number]
   _id: string
}

export async function POST(req: Request) {
   const { type, imageKey, _id }: BodyType = await req.json()

   await dbConnect()

   let res

   if (type == 'mobile1st') {
      res = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            mobile1stImage: imageKey
         },
      ).exec()
   } else if (type == 'mobile2nd') {
      res = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            mobile2ndImage: imageKey,
         },
      ).exec()
   } else if (type == 'gallery') {
      res = await Project.findOne({ _id: _id }).exec()
      res.gallery.push(imageKey)
      res.save()
   } else if (type == 'lighthouse') {
      res = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            lighthouse: imageKey,
         },
      ).exec()
   }

   return NextResponse.json({ res })
}

export async function DELETE(req: Request) {
   const { type, imageKey, _id }: BodyType = await req.json()

   await dbConnect()

   let res

   if (type == 'mobile1st') {
      res = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            mobile1stImage: '',
         },
      ).exec()
   } else if (type == 'mobile2nd') {
      res = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            mobile2ndImage: '',
         },
      ).exec()
   } else if (type == 'gallery') {
      res = await Project.findOne({ _id: _id }).exec()
      const galleryAfterDelete = res.gallery.filter((item: string) => item !== imageKey)
      res.gallery = galleryAfterDelete
      res.save()
   }

   return NextResponse.json({ res })
}
