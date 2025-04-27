import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
import logoimg from '../../assets/images/veebuilder.png';

const realEstateData = [
    { id: '1', title: 'Minsway', place: 'chennai', experience: '0 years in bussiness', size: '1000 sq ft', price: '49 enquiris answers' },
    { id: '2', title: 'Minsway', place: 'chennai', experience: '0 years in bussiness', size: '1000 sq ft', price: '49 enquiris answers' },
    { id: '3', title: 'Minsway', place: 'chennai', experience: '0 years in bussiness', size: '1000 sq ft', price: '49 enquiris answers' },
   
  ];

export default function Shop() {
    const router = useRouter();

     const renderCard = ({ item }) => (
        <View style={styles.card}>
          <Image source={logoimg} style={styles.logo} />
          <View style={{ flex: 1 }}>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subText}>{item.place}</Text>
              <Text style={styles.subText}>{item.experience}</Text>
              <Text style={styles.subText}>{item.size}</Text>
              <Text style={styles.subText}>{item.price}</Text>
            </View>
    
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

          <View style={styles.container}>
            {/* Header */}
            <LinearGradient
              colors={['#1789AE', '#132740']}
              style={styles.header}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <TouchableOpacity onPress={() => router.back('/components/Materials')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.headerText}>Shop</Text>
            </LinearGradient>
                  {/* Search Input */}
                  <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                    <TextInput
                      placeholder="Search materials..."
                      style={styles.searchInput}
                      placeholderTextColor="#888"
                    />
                  </View>

                  <View style={styles.dropdownContainer}>
  <Ionicons name="list" size={20} color="#888" style={styles.dropdownIcon} />
  <Text style={styles.dropdownText}>type</Text>
  <Ionicons name="chevron-down" size={20} color="#888" style={styles.dropdownArrow} />
</View>

<FlatList
        data={realEstateData}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />



       </View>      
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        height: 80,
        paddingTop: 20,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButton: {
        marginRight: 10,
      },
      headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      searchContainer: {
        flexDirection: 'row',
        borderWidth: 0.2,
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        margin: 16,
        paddingHorizontal: 12,
        borderRadius: 4,
        width: 346,
        right: 10,
        bottom: 12,
      },
      searchIcon: {
        marginRight: 8,
      },
      searchInput: {
        flex: 1,
        height: 40,
        color: '#000',
      },
      dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.2,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        marginBottom: 14,
        paddingHorizontal: 12,
        borderRadius: 4,
        height: 50,
        position: 'relative',
        width:120
      },
      dropdownIcon: {
        marginRight: 8,
      },
      dropdownText: {
        flex: 1,
        color: '#000',
        
      },
      dropdownArrow: {
        marginRight: 8,
       
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
      
})
