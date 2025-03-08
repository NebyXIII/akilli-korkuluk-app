import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SoilState {
  moisture: number;       // Toprak nemi (%)
  temperature: number;    // Toprak sıcaklığı (°C)
}

const initialState: SoilState = {
  moisture: 0,
  temperature: 0,
};

const soilSlice = createSlice({
  name: 'soil',
  initialState,
  reducers: {
    setSoilData: (state, action: PayloadAction<SoilState>) => {
      state.moisture = action.payload.moisture;
      state.temperature = action.payload.temperature;
    },
    resetSoilData: (state) => {
      state.moisture = 0;
      state.temperature = 0;
    },
  },
});

export const { setSoilData, resetSoilData } = soilSlice.actions;
export default soilSlice.reducer;