import { Lecture } from "@/utils/type";
import axios from "axios";
import Link from "next/link";

const getLectures = async () => {
    const res = await axios.get(`${process.env.API_URL}/lectures`);
    return res.data.lectures;
}

export default async function Lectures() {
    const lectures = await getLectures();
    return (
        <div>
            <header className="flex justify-between">
                <Link href="/">LMS</Link>
                <Link href="/">マイコース</Link>
            </header>
            <h1>コース一覧</h1>
            <ul>
                {lectures.map((lecture: Lecture) => (
                    <Link key={lecture.id} href={`/${lecture.id}`}>
                        <li>{lecture.lecture_name}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}