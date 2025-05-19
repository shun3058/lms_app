import axios from "axios";
import Link from "next/link";
import { Lecture } from "@/utils/type";

const getMyLectures = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/lectures/mine`);
    return res.data.my_lectures;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const my_lectures = await getMyLectures();
  console.log(my_lectures);

  return (
    <div>
      <header className="flex justify-between">
        <Link href="/">LMS</Link>
        <Link href="/lectures">コース一覧</Link>
      </header>
      <h1>マイコース</h1>
      <ul>
        {my_lectures.map((lecture: Lecture) => (
          <Link key={lecture.id} href={`/${lecture.id}`}>
            <li>{lecture.lecture_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
