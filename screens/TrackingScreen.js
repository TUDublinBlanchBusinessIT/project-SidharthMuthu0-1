import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from './CommonStyles';

export default function TrackingScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleTrackOrder = () => {
    if (!email || !trackingCode) {
      Alert.alert('Error', 'Please enter both email and tracking code.');
      return;
    }

    // Mock tracking info
    const mockTrackingData = {
      "trackingCode123": {
        status: "In Transit",
        estimatedDelivery: "2023-12-10 14:00:00",
      },
      "trackingCode456": {
        status: "Delivered",
        estimatedDelivery: "2023-12-05 10:00:00",
      },
    };

    const data = mockTrackingData[trackingCode];

    if (!data) {
      Alert.alert('Error', 'Invalid tracking code.');
      return;
    }

    // Update tracking info
    setTrackingInfo(data);
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Order Tracking</Text>

      {/* Email Input */}
      <TextInput
        style={[CommonStyles.searchInput, styles.spacing]}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Tracking Code Input */}
      <TextInput
        style={[CommonStyles.searchInput, styles.spacing]}
        placeholder="Enter your tracking code"
        value={trackingCode}
        onChangeText={setTrackingCode}
        autoCapitalize="none"
      />

      {/* Track Order Button */}
      <TouchableOpacity style={CommonStyles.button} onPress={handleTrackOrder}>
        <Text style={CommonStyles.buttonText}>Track Order</Text>
      </TouchableOpacity>

      {/* Display Tracking Info */}
      {trackingInfo && (
        <View style={styles.infoContainer}>
          <Text style={CommonStyles.text}>Tracking Details</Text>
          <Text style={styles.infoText}>Status: {trackingInfo.status}</Text>
          <Text style={styles.infoText}>Estimated Delivery: {trackingInfo.estimatedDelivery}</Text>
        </View>
      )}

      {/* Go Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: '#007BFF',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  spacing: {
    marginBottom: 15, // Adds space below each input field
  },
  infoContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
};
