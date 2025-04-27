// Hirepeople.js
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Hirepeople() {
  const router = useRouter();

  const professions = [
    'Engineer', 'Architect', 'Mason', 'Plumber', 'Interior Designer', 'Helper', 'Welder', 'Carpenter', 
    'Electrician', 'Surveyor', 'Iron Worker', 'Heavy Equipment Operator', 'Roofer', 'Tiles Setter', 
    'Painter', 'Brick Layer'
  ];

  const goToDetails = (profession) => {
    router.push({ pathname: '/components/HirepeopleDeatils', params: { profession } });
  };

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
        <Text style={styles.headerText}>Hire People</Text>
      </LinearGradient>

      {/* Scrollable list */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {professions.map((profession, index) => (
          <TouchableOpacity key={index} style={styles.professionItem} onPress={() => goToDetails(profession)}>
            <Text style={styles.professionText}>{profession}</Text>
            <Ionicons name="chevron-forward" size={20} color="#1789AE" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 80,
    paddingTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: { marginRight: 10 },
  headerText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  professionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'space-between',
    paddingVertical: 12, 
    marginBottom: 15,
  },
  professionText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
});

