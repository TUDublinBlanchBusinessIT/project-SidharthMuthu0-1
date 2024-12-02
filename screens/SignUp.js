import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from './CommonStyles';

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    // Simulate successful sign-up
    Alert.alert('Success', 'Sign-Up Successful!');
    navigation.navigate('Home'); // Navigate to the Home Screen
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Sign Up</Text>
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={CommonStyles.button} onPress={handleSignUp}>
        <Text style={CommonStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
