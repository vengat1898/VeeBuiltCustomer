import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import logoimg from '../../assets/images/veebuilder.png'; 

export default function HirepeopleDetails1() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Quick Info'); // active tab state

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
        <Text style={styles.headerText}>Shop Details</Text>
      </LinearGradient>

      {/* Scrollable Body */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Box with image only */}
        <View style={styles.box}>
          <Image source={logoimg} style={styles.logo} />
        </View>

        {/* All Text outside the box */}
        <Text style={styles.nameText}>Naveen</Text>
        <Text style={styles.locationText}>Old Pallavaram</Text>

        <View style={styles.ratingRow}>
          <View style={styles.ratingBox}>
            <Ionicons name="star" size={16} color="white" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
        </View>

        <Text style={styles.experienceText}>12 years of experience</Text>
        <View style={styles.separator} />

        <Text style={styles.addressHeading}>Address</Text>
        <Text style={styles.addressText}>
          No 204, Ralammal Nagar, Rajalakshmi Street, Chennai 27733
        </Text>
        <View style={styles.separator} />

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          {['Quick Info', 'Overview', 'Photos'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab Content Section */}
        <View style={styles.tabContent}>
          {activeTab === 'Quick Info' && (
            <>
              <Text style={styles.infoHeading}>Mobile</Text>
              <Text style={styles.infoText}>8797785643</Text>

              <Text style={styles.infoHeading}>Profession</Text>
              <Text style={styles.infoText}>Mason</Text>

              <Text style={styles.infoHeading}>Years of Experience</Text>
              <Text style={styles.infoText}>12 years</Text>
            </>
          )}
          {activeTab === 'Overview' && (
            <>
              <Text style={styles.infoHeading}>Minimum Cost per Sq Ft</Text>
              <Text style={styles.infoText}>₹1500</Text>

              <Text style={styles.infoHeading}>Agreement Type</Text>
              <Text style={styles.infoText}>Contractor Labour</Text>
            </>
          )}
          {activeTab === 'Photos' && (
           <View style={styles.photoContainer}>
             <Image source={logoimg} style={styles.photoImage} />
           </View>
)}

        </View>

               
      </ScrollView>
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
  );
}

const styles = StyleSheet.create({
  header: {
    height: 120,
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
    marginTop:30
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:30
  },
  scrollContent: {
    padding: 16,
    alignItems: 'flex-start',
  },
  box: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    alignItems: 'flex-start',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingBox: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 8,
  },
  ratingText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 4,
  },
  locationText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  experienceText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  addressHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
  },
  addressText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: '#1789AE', // Blue underline when active
  },
  tabText: {
    fontSize: 16,
    color: '#777',
  },
  activeTabText: {
    color: '#1789AE',
    fontWeight: 'bold',
  },
  tabContent: {
    width: '100%',
    paddingVertical: 16,
  },
  infoHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  photoContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 1,
    height:150
  },
  photoImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },


  buttonRow: {
    flexDirection: 'row',
    alignItems:"center",
    marginTop: 15,
    gap: 8,
    marginBottom:20,
    marginLeft:15
    
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1789AE',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: 98,
    marginLeft:10
    
  },
  buttonText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 4,
  },
  
});





 
