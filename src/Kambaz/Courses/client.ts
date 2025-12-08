import axios from "axios";

const HTTP_SERVER = import.meta.env.VITE_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const deleteCourse = async (courseId: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${courseId}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axios.post(COURSES_API, course);
  return data;
};
