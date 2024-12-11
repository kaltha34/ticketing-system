import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const configureSystem = (config) => api.post('/configure', config);
export const startSystem = () => api.post('/start');
export const stopSystem = () => api.post('/stop');
