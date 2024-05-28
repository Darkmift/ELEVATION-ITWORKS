import axios from 'axios';
import { Pagination } from '../types/pagination';
import { Admin, Build, BuildCountWeekly } from '../types';
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export const getBuildsPaginated = async ({ page, limit, sort }: Pagination): Promise<{ builds: Build[]; totalCount: number }> => {
  const response = await axiosInstance.get<{ builds: Build[]; totalCount: number }>(`/builds?page=${page}&limit=${limit}&sort=${sort}`);
  return response.data;
};

//login
export const attemptLogin = async (username: string, password: string): Promise<Admin> => {
  console.log('🚀 ~ attemptLogin ~ password:', password);
  console.log('🚀 ~ attemptLogin ~ username:', username);
  const response = await axiosInstance.post<Admin>('/auth/login', { username, password });
  return response.data;
};

//create build (credentials required)
export const createBuild = async (build: Build): Promise<Build> => {
  const response = await axiosInstance.post<Build>('/builds', build);
  return response.data;
};

export const getBuildGroupedByWeek = async (): Promise<BuildCountWeekly> => {
  const response = await axiosInstance.get<BuildCountWeekly>(`/builds/grouped`);
  return response.data;
};

export const getBuildById = async (stringId: string): Promise<Build | null> => {

  try {
    // ! ID needs to be passed 
    // const response = await axiosInstance.get<Build>(`/single/${stringId}`); 
    const response = await axiosInstance.get<Build>(`/builds/single/66542ff2158ee7cf7471494e`); 
    return response.data;
  } catch (error) {
    console.error(error);
    return null
  }

}
export default axiosInstance;