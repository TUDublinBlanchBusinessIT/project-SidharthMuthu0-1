import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet } from 'react-native';
import { auth } from './firebaseConfig';  // Ensure auth is from firebase@8.x.x style config

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setMessage('Please fill in both fields.');
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // userCredential.user is the logged-in user
        setMessage('Login successful!');
        Alert.alert('Success', `Welcome back, ${userCredential.user.email}!`);
        // You could navigate to another screen here if you have navigation set up
        // navigation.navigate('MyAccount');
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  message: {
    marginTop: 16,
    textAlign: 'center',
    color: 'red',
  },
});

