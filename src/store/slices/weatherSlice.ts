import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  temperature: number; // Sıcaklık (°C)
  humidity: number;    // Nem (%)
  windSpeed: number;   // Rüzgar hızı (km/s)
}

const initialState: WeatherState = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<WeatherState>) => {
      state.temperature = action.payload.temperature;
      state.humidity = action.payload.humidity;
      state.windSpeed = action.payload.windSpeed;
    },
    resetWeatherData: (state) => {
      state.temperature = 0;
      state.humidity = 0;
      state.windSpeed = 0;
    },
  },
});

export const { setWeatherData, resetWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;