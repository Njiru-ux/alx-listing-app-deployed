// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // Changed this - just use '/api' instead of full URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;