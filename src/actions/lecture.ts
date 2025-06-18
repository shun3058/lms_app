import { Lecture } from '@/models/type'
import axios from 'axios'

export const getMyLectures = async (): Promise<Lecture[]> => {
  try {
    const res = await fetch(`${process.env.API_URL}/lectures/mine`, {
      cache: 'no-store',
    })
    const data = await res.json()
    return data.my_lectures
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getLectures = async (): Promise<Lecture[]> => {
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

export const getDetail = async (id: string): Promise<Lecture> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/detail`,
    {
      params: {
        id,
      },
    },
  )
  return res.data.lecture
}

export const addLecture = async (id: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/add`,
    { id },
  )
  return res.data
}

export const removeLecture = async (id: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/lectures/remove`,
    { id },
  )
  return res.data
}
