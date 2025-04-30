import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HotenquiryForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#1789AE', '#132740']}
        style={styles.header}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hot Enquiry Form</Text>
        </View>
      </LinearGradient>

      {/* Body */}
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter category"
          value={category}
          onChangeText={setCategory}
        />
        
        {/* Upload Image */}
        <TouchableOpacity style={styles.uploadBox}>
          <Ionicons name="cloud-upload-outline" size={24} color="gray" />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Enter your message"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    height: 120,
    paddingTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    top:20
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadBox: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    top:20
  },
  uploadText: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 10,
  },
  continueButton: {
    width: '50%',
    height: 50,
    backgroundColor: '#1789AE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    top:20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


