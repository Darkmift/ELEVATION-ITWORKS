import axios from 'axios';
import { API_KEY } from '../config';

const axiosInstance = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${API_KEY}`,
});

export default axiosInstance;
