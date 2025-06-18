import { Lecture } from '@/models/type'
import Link from 'next/link'

type LectureCardProps = {
  lecture: Lecture
}

export const LectureCard = ({ lecture }: LectureCardProps) => {
  return (
    <Link
      href={`/${lecture.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {lecture.lecture_name}
        </h2>
        <p className="text-gray-600 text-sm">{lecture.teacher_name}</p>
      </div>
    </Link>
  )
}
