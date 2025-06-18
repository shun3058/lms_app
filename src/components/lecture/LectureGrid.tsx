import { Lecture } from '@/models/type'
import Link from 'next/link'
import { LectureCard } from './LectureCard'

type LectureGridProps = {
  lectures: Lecture[]
  emptyMessage: string
  showEmptyLink?: boolean
}

export const LectureGrid = ({
  lectures,
  emptyMessage,
  showEmptyLink = false,
}: LectureGridProps) => {
  if (lectures.length === 0) {
    //コースが0件の場合は空のメッセージを表示
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{emptyMessage}</p>
        {showEmptyLink && ( //マイコースが0件の場合はコース一覧のリンクを表示
          <Link
            href="/lectures"
            className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
          >
            コース一覧を見る →
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {lectures.map((lecture) => (
        <LectureCard key={lecture.id} lecture={lecture} />
      ))}
    </div>
  )
}
