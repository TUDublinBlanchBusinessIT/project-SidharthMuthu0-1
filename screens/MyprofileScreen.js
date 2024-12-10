import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { auth } from './firebaseConfig'; 

export default function ProfileScreen({ route, navigation }) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      console.log('Firebase Current User:', currentUser);
      setEmail(currentUser.email || 'No email available');
    } else if (route.params?.user) {
      setEmail(route.params.user.email || 'No email available');
    } else {
      setEmail('Error fetching email');
    }
  }, [route.params]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>My Profile</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Your Email: {email}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: '#007BFF',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
