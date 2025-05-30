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
    console.error(error)
    return []
  }
}

export default async function Home() {
  const my_lectures = await getMyLectures()

  return (
    <div>
      <header className="flex justify-between">
        <Link href="/">LMS</Link>
        <Link href="/lectures">コース一覧</Link>
      </header>
      <h1>マイコース</h1>
      <ul>
        {my_lectures?.map((lecture: Lecture) => (
          <Link key={lecture.id} href={`/${lecture.id}`}>
            <li>{lecture.lecture_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
