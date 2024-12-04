import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from './CommonStyles';

export default function TrackingScreen() {
  const [email, setEmail] = useState('');
  const [trackingCode, setTrackingCode] = useState('');

  const handleTrackOrder = () => {
    if (!email || !trackingCode) {
      Alert.alert('Error', 'Please enter both email and tracking code.');
      return;
    }

    // Simulate tracking functionality
    Alert.alert(
      'Tracking Status',
      `Fetching details for:\nEmail: ${email}\nTracking Code: ${trackingCode}`
    );

    // Add actual tracking logic here, such as fetching data from a database
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Order Tracking</Text>
      
      {/* Email Input */}
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Tracking Code Input */}
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter your tracking code"
        value={trackingCode}
        onChangeText={setTrackingCode}
        autoCapitalize="none"
      />

      {/* Track Order Button */}
      <TouchableOpacity
        style={CommonStyles.button}
        onPress={handleTrackOrder}
      >
        <Text style={CommonStyles.buttonText}>Track Order</Text>
      </TouchableOpacity>
    </View>
  );
}