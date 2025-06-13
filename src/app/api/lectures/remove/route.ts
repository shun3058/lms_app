import { prisma } from '@/utils/database'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const { id } = await req.json()

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 })
    }

    const updated = await prisma.lectures.update({
      where: { id: Number(id) },
      data: { my_lecture: false },
    })

    return NextResponse.json(updated, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating lecture', error },
      { status: 500 },
    )
  } finally {
    await prisma.$disconnect()
  }
}
