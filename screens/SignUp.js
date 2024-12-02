import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CommonStyles from './CommonStyles'; // Reuse shared styles if applicable

export default function SignUp({ navigation }) {
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Sign Up</Text>
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter Email"
      />
      <TextInput
        style={CommonStyles.searchInput}
        placeholder="Enter Password"
        secureTextEntry
      />
      <TouchableOpacity
        style={CommonStyles.button}
        onPress={() => alert('Sign-Up Logic Here')}
      >
        <Text style={CommonStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: '#007BFF', marginTop: 20 }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
