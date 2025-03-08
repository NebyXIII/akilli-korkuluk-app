// src/utils/helpers.ts

/**
 * Sıcaklık değerini formatlar.
 * @param temperature Sıcaklık değeri (Celsius olarak)
 * @returns Formatlanmış sıcaklık değeri
 */
export function formatTemperature(temperature: number): string {
    return `${temperature.toFixed(1)}°C`;
  }
  
  /**
   * Nem değerini formatlar.
   * @param humidity Nem değeri (yüzde olarak)
   * @returns Formatlanmış nem değeri
   */
  export function formatHumidity(humidity: number): string {
    return `${humidity}%`;
  }
  
  /**
   * Rüzgar hızını formatlar.
   * @param windSpeed Rüzgar hızı (m/s olarak)
   * @returns Formatlanmış rüzgar hızı
   */
  export function formatWindSpeed(windSpeed: number): string {
    return `${windSpeed.toFixed(1)} m/s`;
  }