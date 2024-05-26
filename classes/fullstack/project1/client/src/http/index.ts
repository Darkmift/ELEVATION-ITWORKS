import axios from "axios";
import { Pagination } from "../types/pagination";
import { Build } from "../types";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_API_URL
});

export const getBuildsPaginated = async ({ page, limit, sort }: Pagination): Promise<Build[]> => {

  try {
    const response = await axiosInstance.get<Build[]>(`/builds?page=${page}&limit=${limit}&sort=${sort}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return []
  }

}

export default axiosInstance;