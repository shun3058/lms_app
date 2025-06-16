import { Lecture } from '@/models/type'
import Link from 'next/link'

const getMyLectures = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/lectures/mine`, {
      cache: 'no-store',
    })
    const data = await res.json()
    return data.my_lectures
  } catch (error) {
    console.log(error)
    return []
  }
}

export default async function Home() {
  const my_lectures = await getMyLectures()

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
              href="/lectures"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              コース一覧
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">マイコース</h1>

        {my_lectures?.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">登録されているコースはありません</p>
            <Link
              href="/lectures"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              コース一覧を見る →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {my_lectures?.map((lecture: Lecture) => (
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
