// HirepeopleDetails.js
import { StyleSheet, Text, View, TouchableOpacity,FlatList,Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import logoimg from '../../assets/images/veebuilder.png';

const realEstateData = [
    { id: '1', name: 'vengat', place: 'chennai', experience: '0 years of experience', size: '1000 sq ft', price: '49 enquiris answers' },
    
   
  ];

export default function HirepeopleDetails() {
  const router = useRouter();
  const { profession } = useLocalSearchParams(); // <-- Get profession passed


  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={logoimg} style={styles.logo} />
      <View style={{ flex: 1 }}>
        {/* Make the Text Container Touchable */}
        <TouchableOpacity onPress={() => router.push('/components/HirepeopleDetails1')} style={styles.cardTextContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subText}>{item.place}</Text>
          <Text style={styles.subText}>{item.experience}</Text>
          <Text style={styles.subText}>{item.price}</Text>
        </TouchableOpacity>
  
        {/* Buttons inside card */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="call" size={16} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button}>
            <Ionicons name="information-circle" size={16} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Enquiry Now</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-whatsapp" size={16} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>WhatsApp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <LinearGradient
        colors={['#1789AE', '#132740']}
        style={styles.header}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{profession}</Text> {/* Show selected profession */}
      </LinearGradient>


      <FlatList
              data={realEstateData}
              keyExtractor={(item) => item.id}
              renderItem={renderCard}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 10 },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'flex-start',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: 16,
    bottom: 20,
  },
  cardTextContainer: {
    marginBottom: 12,
    left: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  subText: {
    fontSize: 11,
    color: '#555',
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1789AE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 98,
    right:177
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 4,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'flex-start',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginRight: 16,
    bottom: 20,
  },
  cardTextContainer: {
    marginBottom: 12,
    left: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  subText: {
    fontSize: 11,
    color: '#555',
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1789AE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 98,
    right:177
  },
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 4,
  },
});

