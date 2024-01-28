import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

import authOptions from '@/utils/auth'
import User, { IUser } from '@/models/user'
import dbConnect from '@/utils/dbConnect'

export async function GET() {
   const session: { username: string } | null = await getServerSession(authOptions)

   await dbConnect()
   const user = await User.findOne(
      {
         username: session?.username,
      },
      'name',
   )
      .exec()
      .then((res: IUser) => res)

   return NextResponse.json(user)
}
