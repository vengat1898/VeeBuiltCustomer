import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Aboutus() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
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
        <Text style={styles.headerTitle}>About Us</Text>
      </LinearGradient>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Who We Are</Text>
          <Text style={styles.paragraph}>
            Welcome to Our Company! We are passionate about delivering innovative digital solutions that empower businesses and individuals. 
            With a focus on excellence, creativity, and cutting-edge technology, we strive to turn ideas into impactful experiences.
          </Text>

          <Text style={styles.title}>Our Mission</Text>
          <Text style={styles.paragraph}>
            Our mission is to bridge the gap between technology and people by providing exceptional services that drive success and innovation. 
            We believe in building long-term relationships based on trust, collaboration, and outstanding performance.
          </Text>

          <Text style={styles.title}>Why Choose Us</Text>
          <Text style={styles.paragraph}>
            With a team of highly skilled professionals, a customer-first mindset, and a track record of success, 
            we are committed to helping you achieve your goals and grow beyond limits.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    height:120
  },
  backButton: {
    marginRight: 10,
    marginTop:20
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#132740',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
    color: '#555',
    marginBottom: 20,
    textAlign: 'justify',
  },
});


