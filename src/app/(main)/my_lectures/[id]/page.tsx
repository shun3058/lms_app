import axios from "axios";
import { Lecture } from "@/utils/type";
import Link from "next/link";

const getLecture = async (id: string) => {
    const res = await axios.get(`${process.env.API_URL}/detail/${id}`);
    return res.data;
}


export default async function MyLecture({params}: {params: {id: string}}) {
    const {id} = await params;
    const lectureData = await getLecture(id);
    const lecture: Lecture = lectureData.lecture;
    return (
        <div>
            <header>
                <Link href="/">LMS</Link>
            </header>
            <h1>{lecture.lecture_name}</h1>
            <p>{lecture.teacher_name}</p>
            <p>{lecture.lecture_description}</p>
        </div>
    )
}