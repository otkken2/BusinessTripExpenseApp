import axios from "axios";

// const useFetch = async (baseURL: string,suffix: string) => {
const useFetch = async <T>(URL: string,property: string):Promise<T> => {
  const response = await axios.get(`${URL}`);
  const data: T = JSON.parse(JSON.stringify(response.data));
  return data;
}

export default useFetch;