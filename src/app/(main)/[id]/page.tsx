import axios from "axios";
import { Lecture } from "@/utils/type";
import Link from "next/link";

const getDetail = async (id: string) => {
    const res = await axios.get(`${process.env.API_URL}/lectures/${id}`);
    return res.data;
}


export default async function MyLecture({params}: {params: {id: string}}) {
    const {id} = await params;
    const lectureData = await getDetail(id);
    const lecture: Lecture = lectureData.lecture;
    return (
        <div>
            <header className="flex justify-between">
                <Link href="/">LMS</Link>
                <div className="flex gap-4">
                    <Link href="/">マイコース</Link>
                    <Link href="/lectures">コース一覧</Link>
                </div>
            </header>
            <h1>{lecture.lecture_name}</h1>
            <p>{lecture.teacher_name}</p>
            <p>{lecture.lecture_description}</p>
        </div>
    )
}