import { getMyLectures } from '@/actions/lecture'
import { Header } from '@/components/layout/Header'
import { LectureGrid } from '@/components/lecture/LectureGrid'

export default async function Home() {
  const my_lectures = await getMyLectures()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">マイコース</h1>
        <LectureGrid
          lectures={my_lectures}
          emptyMessage="登録されているコースはありません"
          showEmptyLink={true}
        />
      </main>
    </div>
  )
}
