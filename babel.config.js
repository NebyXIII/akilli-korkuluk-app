module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'react-native-iconify/babel',
      {
        icons: [
          'mdi:home',       // Ana Sayfa ikonu
          'mdi:cloud',      // Hava Durumu ikonu
          'mdi:camera',     // Kamera ikonu
          'mdi:cog',        // Ayarlar ikonu
          'mdi:thermometer', // Sıcaklık ikonu
          'mdi:leaf',       // Toprak Nemi ikonu
          'mdi:fire',       // Toprak Sıcaklığı ikonu
          'mdi:weather-windy', 
          'mdi:check',
          'mdi:water',
          'mdi:alert',
          'mdi:chevron-down',
          'mdi:bell',
          'mdi:translate',
          'mdi:account-cog',
          'mdi:chevron-right',
          'mdi:map-marker',
          'mdi:calendar',
          'mdi:crop',
          'mdi:water',
          'mdi:certificate',
          'mdi:wrench',
          'mdi:seed',
          'mdi:phone',
          'mdi:email',
          "mdi:weather-sunny",
          "mdi:weather-rainy",
          "mdi:weather-cloudy",
          "mdi:weather-lightning",
          "mdi:weather-snowy",
          'mdi:theme-light-dark',
          'mdi:bell-outline',
          'mdi:map-marker',
          'mdi:calendar',
          'mdi:crop',
          'mdi:water',
          'mdi:certificate',
          'mdi:wrench',
          'mdi:seed',
          'mdi:phone',
          'mdi:email',
          'mdi:account-circle',
          'mdi:lock-outline',
          'mdi:shield-lock',
          'mdi:delete-outline',
          'mdi:logout',
          "mdi:weather-fog",
          "mdi:weather-partly-cloudy",
          "mdi:water-percent",
          'mdi:flask',
          "mdi:weather-windy",
          'mdi:weather-sunny',
          'ic:baseline-warning',
          'ic:baseline-air',
          'ic:baseline-thermostat',
          'ic:baseline-error',
          'ic:baseline-check-circle'

           // Hava Nemi ikonu
          // Rüzgar Hızı ikonu
        ],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};