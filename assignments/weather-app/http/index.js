import axios from 'axios';
import { API_KEY } from '../config';
const axiosInstance = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
});

// add interceptor to add apiKey to querystring to all requests
axiosInstance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.apikey = API_KEY;
  return config;
});

export default axiosInstance;
