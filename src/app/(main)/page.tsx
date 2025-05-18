import axios from "axios";
import Link from "next/link";
import { Lecture } from "@/utils/type";

const getLectures = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/lectures`);
    return res.data.lectures;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const lectures = await getLectures();
  console.log(lectures);

  return (
    <div>
      <header>
        <Link href="/">LMS</Link>
      </header>
      <h1>マイコース</h1>
      <ul>
        {lectures.map((lecture: Lecture) => (
          <Link key={lecture.id} href={`/my_lectures/${lecture.id}`}>
            <li>{lecture.lecture_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
