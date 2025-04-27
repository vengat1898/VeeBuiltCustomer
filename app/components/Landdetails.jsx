import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import logoimg from '../../assets/images/veebuilder.png'; // Make sure the path is correct

export default function Landdetails() {
  const router = useRouter();

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
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Land Details</Text>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.nameText}>Minsway</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Land Area:</Text>
          <Text style={styles.valueText}>Home</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Land mark:</Text>
          <Text style={styles.valueText}>Pallavaram</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Land Size:</Text>
          <Text style={styles.valueText}>1000 sq ft</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Connection:</Text>
          <Text style={styles.valueText}>Water</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Site Image:</Text>
          <Image source={logoimg} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Property Type:</Text>
          <Text style={styles.valueText}>Personal</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Cost per sq ft:</Text>
          <Text style={styles.valueText}>1000</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Total Cost:</Text>
          <Text style={styles.valueText}>10,00,000</Text>
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
          <Text style={styles.buttonText}>Enquiry</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    paddingTop: 30,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1789AE',
  },
  backButton: {
    padding: 8,
    marginRight: 10,
    borderRadius: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // push the title to center
    marginRight: 40, // balance the center because of back button width
  },
  content: {
    padding: 20,
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  valueText: {
    fontSize: 16,
    color: '#555',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1789AE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 100,
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




