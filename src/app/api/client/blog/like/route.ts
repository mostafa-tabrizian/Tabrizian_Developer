import { NextResponse } from 'next/server'

import Blog, { IBlog } from '@/models/blog'
import dbConnect from '@/lib/dbConnect'

export async function POST(req: Request) {
   const { blogId, userIp } = (await req.json()) as {
      blogId: string
      userIp: string
   }

   await dbConnect()
   const blog: IBlog | null = await Blog.findOne({ _id: blogId }).exec()

   if (!blog) return NextResponse.json({ status: 404 })

      if (blog.likes.includes(userIp)) {
         const index = blog.likes.indexOf(userIp)
         blog.likes.splice(index, 1)
         //   @ts-ignore
         blog.save()
      } else {
         blog.likes.push(userIp)
         //   @ts-ignore
         blog.save()
      }

   return NextResponse.json({ message: 'like submitted.' })
}
