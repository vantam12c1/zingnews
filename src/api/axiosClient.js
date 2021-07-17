import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:7777/',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(function (response) {   
    return response.data;
  }, function (error) {   
    return Promise.reject(error);
  }
);

export default axiosClient;