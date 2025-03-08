import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import soilReducer from './slices/soilSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    soil: soilReducer,
  },
});

// RootState ve AppDispatch tiplerini tanımla
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;