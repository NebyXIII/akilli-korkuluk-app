import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-iconify';
import { wScale, hScale } from '../utils/scaling';

const Profile = () => {
  // Örnek kullanıcı verisi
  const userData = {
    name: 'Köylü Kemal',
    profileImage: require('../assets/profile.jpg'),
    farmLocation: 'Ankara, Türkiye',
    experience: '10 yıl',
    certifications: ['Çiftçilik Belgesi', 'Organik Tarım Sertifikası', 'Sulama Teknikleri Eğitimi'],
    ownedEquipment: ['Traktör', 'Harman Makinesi', 'Sulama Sistemi', 'Seracılık Ekipmanları'],
    plantedCrops: ['Buğday', 'Mısır', 'Domates', 'Ayçiçeği', 'Patates'],
    farmSize: '50 dönüm',
    irrigationSystem: 'Damlama Sulama',
    contact: {
      phone: '+90 555 123 4567',
      email: 'koylukemal@example.com',
    },
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profil Resmi ve İsim */}
      <View style={styles.profileHeader}>
        <Image source={userData.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{userData.name}</Text>
        <Text style={styles.profileLocation}>
          <Icon icon="mdi:map-marker" size={18} color="#014A4E" /> {userData.farmLocation}
        </Text>
      </View>

      {/* Genel Bilgiler */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Genel Bilgiler</Text>
        <Text style={styles.infoText}>
          <Icon icon="mdi:calendar" size={18} color="#146551" /> Deneyim: {userData.experience}
        </Text>
        <Text style={styles.infoText}>
          <Icon icon="mdi:crop" size={18} color="#146551" /> Tarla Büyüklüğü: {userData.farmSize}
        </Text>
        <Text style={styles.infoText}>
          <Icon icon="mdi:water" size={18} color="#146551" /> Sulama Sistemi: {userData.irrigationSystem}
        </Text>
      </View>

      {/* Sertifikalar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sertifikalar</Text>
        {userData.certifications.map((cert, index) => (
          <Text key={index} style={styles.badge}>
            <Icon icon="mdi:certificate" size={16} color="#FFF" /> {cert}
          </Text>
        ))}
      </View>

      {/* Ekipmanlar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sahip Olduğu Ekipmanlar</Text>
        {userData.ownedEquipment.map((equipment, index) => (
          <Text key={index} style={styles.listItem}>
            <Icon icon="mdi:wrench" size={16} color="#146551" /> {equipment}
          </Text>
        ))}
      </View>

      {/* Ekilen Tohumlar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ekilen Tohumlar</Text>
        {userData.plantedCrops.map((crop, index) => (
          <Text key={index} style={styles.listItem}>
            <Icon icon="mdi:seed" size={16} color="#146551" /> {crop}
          </Text>
        ))}
      </View>

      {/* İletişim Bilgileri */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>İletişim Bilgileri</Text>
        <Text style={styles.contactText}>
          <Icon icon="mdi:phone" size={18} color="#146551" /> {userData.contact.phone}
        </Text>
        <Text style={styles.contactText}>
          <Icon icon="mdi:email" size={18} color="#146551" /> {userData.contact.email}
        </Text>
      </View>
    </ScrollView>
  );
};

// **TÜM STİLLER BURADA**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: wScale(16),
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: hScale(20),
  },
  profileImage: {
    width: wScale(120),
    height: wScale(120),
    borderRadius: wScale(60),
    borderWidth: 3,
    borderColor: '#146551',
  },
  profileName: {
    fontSize: wScale(24),
    fontWeight: 'bold',
    marginTop: hScale(10),
  },
  profileLocation: {
    fontSize: wScale(16),
    color: '#666',
    marginTop: hScale(4),
  },
  section: {
    backgroundColor: '#FFF',
    padding: wScale(16),
    borderRadius: wScale(10),
    marginBottom: hScale(12),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: wScale(18),
    fontWeight: 'bold',
    marginBottom: hScale(10),
    color: '#146551',
  },
  infoText: {
    fontSize: wScale(16),
    color: '#333',
    marginBottom: hScale(6),
  },
  badge: {
    fontSize: wScale(14),
    color: '#FFF',
    backgroundColor: '#146551',
    paddingVertical: hScale(4),
    paddingHorizontal: wScale(10),
    borderRadius: wScale(8),
    overflow: 'hidden',
    marginBottom: hScale(6),
  },
  listItem: {
    fontSize: wScale(16),
    color: '#333',
    marginBottom: hScale(6),
  },
  contactText: {
    fontSize: wScale(16),
    color: '#146551',
    fontWeight: '600',
    marginTop: hScale(4),
  },
});

export default Profile;
