import connect, { prisma } from '@/utils/database'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    await connect()
    const id = await req.nextUrl.searchParams.get('id')
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 })
    }
    const lecture = await prisma.lectures.findUnique({
      where: {
        id: parseInt(id),
      },
    })
    console.log(lecture)

    return NextResponse.json({ lecture }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Failed to fetch lecture' },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
