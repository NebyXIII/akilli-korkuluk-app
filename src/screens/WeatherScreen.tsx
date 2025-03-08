import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { wScale } from '../utils/scaling';
import { getWeatherData } from '../services/weatherService';
import ForecastScreen from '../components/ForecastCard/ForecastCard';

interface WeatherData {
  list: {
    dt: number;
    main: {
      temp: number;
      humidity: number;
      pressure: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
  }[];
}

const WeatherScreen = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const location = 'Istanbul';
        const data = await getWeatherData(location);
        setWeather(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Bilinmeyen bir hata oluştu');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const currentWeather = weather?.list[0];

  return (
    <View style={styles.container}>
      <ForecastScreen
        loading={loading}
        error={error}
        temperature={currentWeather?.main.temp ?? 0}
        humidity={currentWeather?.main.humidity ?? 0}
        windSpeed={currentWeather?.wind.speed ?? 0}
        weatherCondition={currentWeather?.weather[0].main ?? 'Clear'} // Hava durumu bilgisi
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wScale(20),
  },
});

export default WeatherScreen;
