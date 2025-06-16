import { Lecture } from '@/models/type'
import Link from 'next/link'

const getLectures = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/lectures`, {
      cache: 'no-store',
    })
    const data = await res.json()
    return data.lectures
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function Lectures() {
  const lectures = await getLectures()
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
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              マイコース
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">コース一覧</h1>

        {lectures?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">コースが見つかりませんでした</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lectures?.map((lecture: Lecture) => (
              <Link
                key={lecture.id}
                href={`/${lecture.id}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {lecture.lecture_name}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {lecture.teacher_name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
