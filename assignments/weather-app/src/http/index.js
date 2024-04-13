import axios from 'axios';
import { ACCUWEATHER_API_KEY } from '../config';

const baseURL = 'http://dataservice.accuweather.com/locations/v1/';

const axiosInstance = axios.create({
  baseURL,
});

// Adding an interceptor to append the API key to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Using URLSearchParams to handle the query string
    const params = new URLSearchParams(config.params || '');
    params.append('apikey', ACCUWEATHER_API_KEY);
    config.params = params;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
