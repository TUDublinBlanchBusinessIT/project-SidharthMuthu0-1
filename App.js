import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

// Create Stack Navigator
const Stack = createStackNavigator();

// HomeScreen Component
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
      </View>

      {/* Sale Text */}
      <Text style={styles.saleText}>Big Sale on 50% OFF</Text>

      {/* Banner Image */}
      <Image
        source={{ uri: '' }} // Replace with your image URL
        style={styles.bannerImage}
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Customise Jerseys')}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Club Kits')}>
        <Text style={styles.buttonText}>Customized Kits</Text>
      </TouchableOpacity>
    </View>
  );
}

// CustomiseJerseyScreen Component
function CustomiseJerseyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customize your Jersey Here!</Text>
    </View>
  );
}

// ClubKitsScreen Component
function ClubKitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Browse Club Kits!</Text>
    </View>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Customise Jerseys" component={CustomiseJerseyScreen} />
        <Stack.Screen name="Club Kits" component={ClubKitsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styling for the screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  saleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20, // Adds space below the image
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
