import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from './firebaseConfig'; // Import your Firebase Auth instance
import { signInWithEmailAndPassword } from 'firebase/auth';
import CommonStyles from './CommonStyles'; // Import your common styles (adjust path if necessary)

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    try {
      // Attempt to sign in with the provided email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      Alert.alert('Success', `Welcome back, ${user.email}!`);
      // Navigate to the "MyAccount" screen after a successful login
      navigation.navigate('MyAccount');
    } catch (error) {
      // Display an alert if login fails (e.g., invalid email/password)
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Login</Text>

      {/* Email Input Field */}
      <TextInput
        style={[CommonStyles.searchInput, styles.spacing]}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Password Input Field */}
      <TextInput
        style={[CommonStyles.searchInput, styles.spacing]}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Login Button */}
      <TouchableOpacity style={CommonStyles.button} onPress={handleLogin}>
        <Text style={CommonStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  spacing: {
    marginBottom: 15, // Adds space below each input field
  },
};

