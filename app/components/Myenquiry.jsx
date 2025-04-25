import { StyleSheet, Text, View, TouchableOpacity, Image ,Pressable } from 'react-native'
import { MaterialIcons, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


import material from '../../assets/images/hirepeople.png'
import realestate from '../../assets/images/real.png'
import hirepeople from '../../assets/images/hirepeople.png'

export default function Myenquiry() {
    const handlePress = (type) => {
        console.log(`Pressed: ${type}`)
      }
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#1789AE', '#132740']}
        style={styles.header}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>MyEnquiry</Text>
      </LinearGradient>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => handlePress('Material')}>
          <LinearGradient
            colors={['#1789AE', '#132740']}
            style={styles.card}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Image source={material} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardText}>Material</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('Real Estate')}>
          <LinearGradient
            colors={['#1789AE', '#132740']}
            style={styles.card}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Image source={realestate} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardText}>Real Estate</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('Hire People')}>
          <LinearGradient
            colors={['#1789AE', '#132740']}
            style={styles.card}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Image source={hirepeople} style={styles.image} resizeMode="contain" />
            <Text style={styles.cardText}>Hire People</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
  <Pressable style={styles.footerItem} onPress={() => handlePress('Home')}>
    {({ pressed }) => (
      <>
        <Ionicons
          name="home"
          size={24}
          color={pressed ? '#00A4C9' : '#808080'}
        />
        <Text style={[styles.footerText, { color: pressed ? '#00A4C9' : '#808080' }]}>
          Home
        </Text>
      </>
    )}
  </Pressable>
  
  <Pressable style={styles.footerItem} onPress={() => handlePress('My Enquiry')}>
    {({ pressed }) => (
      <>
        <MaterialIcons
          name="assignment"
          size={24}
          color={pressed ? '#007A98' : '#00A4C9'}
        />
        <Text style={[styles.footerText, { color: pressed ? '#007A98' : '#00A4C9' }]}>
          My Enquiry
        </Text>
      </>
    )}
  </Pressable>
</View>


    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 12,
    gap: 12,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 18,
    borderRadius: 0,
    width: '100%',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
  
  
})



