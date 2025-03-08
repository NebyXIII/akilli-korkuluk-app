// src/services/api.ts
import axios from 'axios';

// OpenWeatherMap API base URL
const BASE_URL = 'http://api.openweathermap.org';

// Axios instance oluşturma
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 100000, // 10 saniye timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;