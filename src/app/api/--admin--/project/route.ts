import { NextRequest, NextResponse } from 'next/server'

import dbConnect from '@/lib/dbConnect'
import Project from '@/models/project'

export async function GET(request: NextRequest) {
   try {
      await dbConnect()

      const projectId = request.nextUrl.searchParams.get('id')
      const projects = await Project.find({ project: projectId })

      return NextResponse.json(projects)
   } catch (error) {
      return NextResponse.json({ status: 500, message: error })
   }
}

export async function POST(request: Request) {
   const {
      titleEn,
      titleFa,
      active,
   }: {
      titleEn: string
      titleFa: string
      active: boolean
   } = await request.json()

   try {
      await dbConnect()
      const project = await Project.create({
         titleEn,
         titleFa,
         gallery: [],
         active: active,
      })

      return NextResponse.json(project)
   } catch (error) {
      return NextResponse.json({ status: 500, message: error })
   }
}

export async function PATCH(request: Request) {
   const {
      _id,
      titleEn,
      titleFa,
      active,
   }: {
      _id: string
      titleEn: string
      titleFa: string
      active: boolean
   } = await request.json()

   try {
      await dbConnect()
      const project = await Project.findOneAndUpdate(
         {
            _id: _id,
         },
         {
            titleEn,
            titleFa,
            active: active,
         },
      )

      return NextResponse.json(project)
   } catch (error) {
      // @ts-ignore
      if (error.code == 11000) {
         return NextResponse.json({ message: 'notUnique' })
      } else {
         return NextResponse.json({ status: 500, message: error })
      }
   }
}

export async function DELETE(req: Request) {
   try {
      const { _id } = await req.json()

      await dbConnect()
      const project = await Project.findOneAndDelete({ _id })

      return NextResponse.json(project)
   } catch (error) {
      console.error('Error deleting project:', error)
      return NextResponse.json({ status: 500, message: error })
   }
}
