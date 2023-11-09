import { NextResponse } from 'next/server'

import Project from '@/models/project'
import Blog from '@/models/blog'
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
         { _id },
         {
            mobile1stImage: imageKey
         },
      ).exec()
   } else if (type == 'mobile2nd') {
      res = await Project.findOneAndUpdate(
         { _id },
         {
            mobile2ndImage: imageKey,
         },
      ).exec()
   } else if (type == 'gallery') {
      res = await Project.findOne({ _id }).exec()
      res.gallery.push(imageKey)
      res.save()
   } else if (type == 'lighthouse') {
      res = await Project.findOneAndUpdate(
         { _id },
         {
            lighthouse: imageKey,
         },
      ).exec()
   } else if (type == 'thumbnail') {
      res = await Project.findOneAndUpdate(
         { _id },
         {
            thumbnail: imageKey,
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
         { _id },
         {
            mobile1stImage: '',
         },
      ).exec()
   } else if (type == 'mobile2nd') {
      res = await Project.findOneAndUpdate(
         { _id },
         {
            mobile2ndImage: '',
         },
      ).exec()
   } else if (type == 'thumbnail') {
      res = await Project.findOneAndUpdate(
         { _id },
         {
            thumbnail: '',
         },
      ).exec()
   } else if (type == 'gallery') {
      res = await Project.findOne({ _id }).exec()
      const galleryAfterDelete = res.gallery.filter((item: string) => item !== imageKey)
      res.gallery = galleryAfterDelete
      res.save()
   } else if (type == 'blogs/thumbnail') {
      res = await Blog.findOneAndUpdate(
         { _id },
         {
            thumbnail: '',
         },
      ).exec()
   }

   return NextResponse.json({ res })
}
