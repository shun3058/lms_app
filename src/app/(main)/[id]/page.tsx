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

const removeLecture = async (id: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/remove`,
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

  const handleToggleLecture = async () => {
    if (lecture?.my_lecture) {
      await removeLecture(id)
    } else {
      await addLecture(id)
    }
    const updatedLecture = await getDetail(id)
    setLecture(updatedLecture)
  }

  if (!lecture)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-500"
            >
              LMS
            </Link>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                マイコース
              </Link>
              <Link
                href="/lectures"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                コース一覧
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {lecture.lecture_name}
              </h1>
              <p className="text-gray-600">講師: {lecture.teacher_name}</p>
            </div>
            <button
              onClick={handleToggleLecture}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                lecture.my_lecture
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              {lecture.my_lecture ? 'マイコースから削除' : 'マイコースに追加'}
            </button>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              コース概要
            </h2>
            <p className="text-gray-600 whitespace-pre-wrap">
              {lecture.lecture_description}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
