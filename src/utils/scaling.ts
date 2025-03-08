import { Dimensions } from 'react-native';

// Ekran boyutlarını al
const { width, height } = Dimensions.get('window');

// Tasarım referans boyutları (örnek: iPhone 14 Pro)
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

// Genişlik ölçeklendirme
export const wScale = (size: number) => (width / guidelineBaseWidth) * size;

// Yükseklik ölçeklendirme
export const hScale = (size: number) => (height / guidelineBaseHeight) * size;

// Yazı boyutu ölçeklendirme (opsiyonel)
export const fontScale = (size: number, factor = 0.5) => {
  return size + (wScale(size) - size) * factor;
};