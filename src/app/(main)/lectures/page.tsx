import { getLectures } from '@/actions/lecture'
import { Header } from '@/components/layout/Header'
import { LectureGrid } from '@/components/lecture/LectureGrid'

export default async function Lectures() {
  const lectures = await getLectures()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">コース一覧</h1>
        <LectureGrid
          lectures={lectures}
          emptyMessage="コースが見つかりませんでした"
        />
      </main>
    </div>
  )
}
