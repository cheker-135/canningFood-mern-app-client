import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL, // Base URL from .env
 withCredentials: true, // Include cookies if needed
});

// Optionally, add interceptors for requests or responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Add custom headers or authentication tokens if needed
    // Example: config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
