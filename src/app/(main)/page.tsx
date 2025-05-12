import axios from "axios";

const getLectures = async () => {
  try {
    const res = await axios.get(`${process.env.API_URL}/lectures`);
    return res.data.lectures;
  } catch (error) {
    console.error(error);
  }
}

type Lecture = {
  id: number;
  my_lecture: boolean;
  lecture_name: string;
  lecture_description: string;
  teacher_name: string;
  created_at: string;
}

export default async function Home() {
  const lectures = await getLectures();
  console.log(lectures);

  return (
    <div>
      <h1>マイコース</h1>
      <ul>
        {lectures.map((lecture: Lecture) => (
          <li key={lecture.id}>{lecture.lecture_name}</li>
        ))}
      </ul>
    </div>
  );
}
