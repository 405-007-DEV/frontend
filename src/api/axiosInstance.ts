import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN } from '@/constants/auth';
import { BASE_API_URL } from '@/constants/env';
import { CustomInstance } from './types';

const publicAxios: CustomInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

publicAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const privateAxios: CustomInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

privateAxios.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get(ACCESS_TOKEN);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export { publicAxios, privateAxios };
