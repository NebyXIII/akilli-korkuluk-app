// src/services/weatherService.ts
import api from './api';

// OpenWeatherMap API key'inizi buraya ekleyin
const API_KEY = 'c9477515a280cd49f074f5140f5541d9';

/**
 * OpenWeatherMap API'sinden hava durumu verilerini çeker.
 * @param location Şehir adı veya koordinatlar (örneğin: "Istanbul" veya "41.0082,28.9784")
 * @returns Hava durumu verileri
 */
export const getWeatherData = async (location: string) => {
  try {
    // Lokasyonun şehir adı mı yoksa koordinatlar mı olduğunu kontrol et
    const isCoordinates = location.includes(',');

    // API endpoint'i belirle
    const endpoint = isCoordinates
      ? `/data/2.5/forecast?lat=${location.split(',')[0]}&lon=${location.split(',')[1]}&appid=${API_KEY}&units=metric`
      : `/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;

    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Hava durumu verileri alınamadı:', error);
    throw error;
  }
};