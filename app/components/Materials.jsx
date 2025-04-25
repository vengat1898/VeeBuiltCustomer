import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import mostenquired1 from '../../assets/images/most1.jpg';
import mostenquired2 from '../../assets/images/most2.jpg';
import mostenquired3 from '../../assets/images/most3.jpg';
import mostenquired4 from '../../assets/images/most4.jpg';
import mostenquired5 from '../../assets/images/most5.jpg';
import mostenquired6 from '../../assets/images/most6.jpg';
import mostenquired7 from '../../assets/images/most7.jpg';

import trending1 from '../../assets/images/trending1.jpg';
import trending2 from '../../assets/images/trending2.jpg';
import trending3 from '../../assets/images/trending3.jpg';
import trending4 from '../../assets/images/trending4.jpg';
import trending5 from '../../assets/images/trending5.jpg';
import trending6 from '../../assets/images/trending6.jpg';
import trending7 from '../../assets/images/trending7.jpg';

export default function Materials({ navigation }) {
  const [showTrending, setShowTrending] = useState(false); // State to toggle trending images
  const router = useRouter()

  const trendingImages = [
    { img: trending1, label: 'sand' },
    { img: trending2, label: 'Brisk' },
    { img: trending3, label: 'cement' },
    { img: trending4, label: 'Blocks' },
    { img: trending5, label: 'Jalli' },
    { img: trending6, label: 'Steel' },
    { img: trending7, label: 'Stone' },
  ];

  return (
    <View style={styles.container}>
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
        <Text style={styles.headerText}>Materials</Text>
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

      {/* Container for materials and trending images */}
      <View style={styles.mainContent}>
        {/* Materials Section */}
        <View style={styles.boxContainer}>
          <Text style={styles.boxButtonText}>All</Text>
          <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            {[ 
              { img: mostenquired1, label: 'Building Materils' },
              { img: mostenquired2, label: 'Hardwares' },
              { img: mostenquired3, label: 'Blumbing' },
              { img: mostenquired4, label: 'Sanitary wares' },
              { img: mostenquired5, label: 'Electricals' },
              { img: mostenquired6, label: 'Flooring' },
              { img: mostenquired7, label: 'Paint' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imageBox}
                onPress={() => {
                  if (item.label === 'Building Materils') {
                    setShowTrending(!showTrending); // Toggle trending images on Item 1 press
                  }
                  if (item.label === 'Hardwares') {
                    setShowTrending(!showTrending); 
                  }
                  if (item.label === 'Blumbing') {
                    setShowTrending(!showTrending); 
                  }
                  if (item.label === 'Sanitary wares') {
                    setShowTrending(!showTrending); 
                  }
                  if (item.label === 'Electricals') {
                    setShowTrending(!showTrending); 
                  }
                  if (item.label === 'Flooring') {
                    setShowTrending(!showTrending); 
                  }
                }}
              >
                <Image source={item.img} style={styles.imageStyle} />
                <Text style={styles.imageLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Trending Images Section */}
        {showTrending && (
          <View style={styles.trendingContainer}>
            <Text style={styles.trendingHeader}>Buildings and materials</Text>
            <ScrollView contentContainerStyle={styles.trendingScrollContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.trendingImagesContainer}>
                {trendingImages.map((item, index) => (
                  <LinearGradient
                    key={index}
                    colors={['#1789AE', '#132740']}
                    style={styles.trendingBox}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <View style={styles.trendingItem}>
                      <Image source={item.img} style={styles.trendingImage} />
                      <Text style={styles.trendingLabel}>{item.label}</Text>
                    </View>
                  </LinearGradient>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
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
    bottom: 14,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  mainContent: {
    flexDirection: 'row',
    marginTop: 16,
  },
  boxContainer: {
    backgroundColor: '#F9F9F9',
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 80,
    height: 600,
    bottom: 40,
    right: 10,
  },
  boxButtonText: {
    fontSize: 16,
    width: 50,
    height: 50,
    color: '#132740',
    fontWeight: '500',
    marginBottom: 40,
    borderWidth: 0.2,
    borderRadius: 100,
    textAlign: 'center',
    lineHeight: 50,
    alignSelf: 'center',
    backgroundColor: "#FFFFFF",
  },
  imageBox: {
    marginBottom: 30,
    alignItems: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 6,
  },
  imageLabel: {
    fontSize: 12,
    color: '#132740',
    marginTop: 4,
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  trendingContainer: {
    flex: 1,
    marginLeft: 5,
    marginTop: 20,
    width: 200, // Set the width for the trending section
    bottom: 50,
  },
  trendingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trendingScrollContainer: {
    flexDirection: 'column',
  },
  trendingImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trendingBox: {
    width: '48%', 
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  trendingItem: {
    alignItems: 'center',
  },
  trendingImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  trendingLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
  },
});





