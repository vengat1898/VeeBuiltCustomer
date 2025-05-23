import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Search() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStoreList = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://veebuilds.com/mobile/searchlist.php');
      if (response.data.result === 'Success') {
        const uniqueStoreList = Array.from(
          new Map(response.data.storeList.map((item) => [item.id, item])).values()
        );
        setStoreList(uniqueStoreList);
      } else {
        setError('Failed to load store list');
      }
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreList();
  }, []);

  const filteredStoreList = storeList.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </LinearGradient>

      {/* Search Input with Icon */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Show loading or error messages */}
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Show filtered list only after typing */}
      {searchQuery.length > 0 && (
        <FlatList
          data={filteredStoreList}
          keyExtractor={(item) => `${item.id}-${item.name}-${item.type}`}  
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => {
                // Example action: replace with navigation or custom behavior
                console.log('Tapped store:', item);
                // navigation.navigate('StoreDetail', { store: item });
              }}
            >
              <Text style={styles.listItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.noResultsText}>No results found</Text>
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ff0000',
    marginTop: 20,
  },
});







