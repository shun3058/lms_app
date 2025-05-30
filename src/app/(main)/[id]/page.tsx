'use client'

import { Lecture } from '@/models/type'
import axios from 'axios'
import Link from 'next/link'
import { use, useEffect, useState } from 'react'

const getDetail = async (id: string): Promise<Lecture> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/detail`,
    {
      params: {
        id,
      },
    },
  )
  return res.data.lecture
}

const addLecture = async (id: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/add`,
    { id },
  )
  return res.data
}

export default function MyLecture({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [lecture, setLecture] = useState<Lecture | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetail(id)
      setLecture(data)
    }
    fetchData()
  }, [id])

  if (!lecture) return <div>Loading...</div>

  return (
    <div>
      <header className="flex justify-between">
        <Link href="/">LMS</Link>
        <div className="flex gap-4">
          <Link href="/">マイコース</Link>
          <Link href="/lectures">コース一覧</Link>
        </div>
      </header>
      <button onClick={() => addLecture(id)}>マイコースに追加</button>
      <h1>{lecture.lecture_name}</h1>
      <p>{lecture.teacher_name}</p>
      <p>{lecture.lecture_description}</p>
    </div>
  )
}
