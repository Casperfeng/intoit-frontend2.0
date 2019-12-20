import axios from 'axios';

export async function fetchCourse(id: string) {
  const response = await axios.get(
    `https://ace-restapi.herokuapp.com/subjects/${id}`
  );
  console.log(response.data);
  return response.data;
}
