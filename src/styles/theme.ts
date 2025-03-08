import { wScale, hScale, fontScale } from '../utils/scaling';

export const SIZES = {
  // Ölçeklendirme fonksiyonları
  wScale,
  hScale,
  fontScale,

  // Önceden tanımlanmış boyutlar (örnek)
  spacing: {
    small: wScale(8),
    medium: wScale(16),
    large: wScale(24),
  },
  fontSize: {
    small: fontScale(12),
    medium: fontScale(16),
    large: fontScale(20),
  },
  borderRadius: {
    default: wScale(8),
  },
};