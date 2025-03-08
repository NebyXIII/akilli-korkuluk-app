import React from 'react';
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import Icon from 'react-native-iconify';
import { styles } from './ForecastCard.style';
import { formatTemperature, formatHumidity, formatWindSpeed } from '../../utils/helpers';

interface ForecastScreenProps {
  loading: boolean;
  error: string | null;
  temperature: number;
  humidity: number;
  windSpeed: number;
  weatherCondition: string; // Hava durumu türü (Clear, Rain, Clouds vs.)
}

const weatherIcons: { [key: string]: string } = {
  Clear: 'mdi:weather-sunny',
  Rain: 'mdi:weather-rainy',
  Clouds: 'mdi:weather-cloudy',
  Thunderstorm: 'mdi:weather-lightning',
  Snow: 'mdi:weather-snowy',
  Mist: 'mdi:weather-fog',
};

const backgroundImages: { [key: string]: any } = {
  Clear: require('../../assets/sunny.jpg'),
  Rain: require('../../assets/rainy.jpg'),
  Clouds: require('../../assets/cloudy.jpg'),
  Thunderstorm: require('../../assets/storm.jpg'),
  Snow: require('../../assets/snow.jpg'),
  Mist: require('../../assets/mist.jpg'),
};

const ForecastScreen = ({ loading, error, temperature, humidity, windSpeed, weatherCondition }: ForecastScreenProps) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFC107" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Hata: {error}</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={backgroundImages[weatherCondition] || require('../../assets/default-weather.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Icon icon={weatherIcons[weatherCondition] || 'mdi:weather-partly-cloudy'} size={100} color="#FFF" />
        <Text style={styles.temperature}>{formatTemperature(temperature)}</Text>
        <Text style={styles.weatherCondition}>{weatherCondition}</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Icon icon="mdi:water-percent" size={30} color="#FFF" />
            <Text style={styles.detailText}>Nem: {formatHumidity(humidity)}</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon icon="mdi:weather-windy" size={30} color="#FFF" />
            <Text style={styles.detailText}>Rüzgar: {formatWindSpeed(windSpeed)}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ForecastScreen;   