import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

export default function TrackingScreen() {
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Order Tracking</Text>
      <Text>Track your order's status here!</Text>
      <Text>Feature under development...</Text>
    </View>
  );
}
