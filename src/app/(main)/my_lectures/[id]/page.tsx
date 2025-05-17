import axios from "axios";
import { Lecture } from "../../page";

const getLecture = async (id: string) => {
    const res = await axios.get(`${process.env.API_URL}/detail/${id}`);
    return res.data;
}


export default async function MyLecture({params}: {params: {id: string}}) {
    const {id} = await params;
    const lectureData = await getLecture(id);
    const lecture = lectureData.lecture;
    return (
        <div>
            <h1>{lecture.lecture_name}</h1>
            <p>{lecture.lecture_description}</p>
            <p>{lecture.teacher_name}</p>
        </div>
    )
}