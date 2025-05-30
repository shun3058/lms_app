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
    <div>
      <header className="flex justify-between">
        <Link href="/">LMS</Link>
        <Link href="/">マイコース</Link>
      </header>
      <h1>コース一覧</h1>
      <ul>
        {lectures?.map((lecture: Lecture) => (
          <Link key={lecture.id} href={`/${lecture.id}`}>
            <li>{lecture.lecture_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
