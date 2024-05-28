import axios from "axios";
import { Pagination } from "../types/pagination";
import { Admin, Build } from "../types";
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export const getBuildsPaginated = async ({ page, limit, sort }: Pagination): Promise<{ builds: Build[]; totalCount: number }> => {
  const response = await axiosInstance.get<{ builds: Build[]; totalCount: number }>(`/builds?page=${page}&limit=${limit}&sort=${sort}`);
  return response.data;
}

//login
export const attemptLogin = async (username: string, password: string): Promise<Admin> => {
  console.log("🚀 ~ attemptLogin ~ password:", password)
  console.log("🚀 ~ attemptLogin ~ username:", username)
  const response = await axiosInstance.post<Admin>('/auth/login', { username, password });
  return response.data;
}

//create build (credentials required)
export const createBuild = async (build: Build): Promise<Build> => {
  const response = await axiosInstance.post<Build>('/builds', build);
  return response.data;
}


export default axiosInstance;