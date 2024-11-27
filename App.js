import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text, TextInput, Image, TouchableOpacity, Modal, StyleSheet, Pressable,} from 'react-native';

const Stack = createStackNavigator();

// HomeScreen Component
function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Sale Text */}
      <Text style={styles.saleText}>Big Sale on 50% OFF</Text>

      {/* Banner Image */}
      <Image
        source={{
          uri: 'https://images.prodirectsport.com/ProductImages/Main/283254_Main_Thumb_1410187.jpg',
        }}
        style={styles.bannerImage}
      />

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Customise Jerseys')}
      >
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://images.prodirectsport.com/ProductImages/Main/283258_Main_Thumb_1410207.jpg',
        }}
        style={styles.secondaryImage}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Club Kits')}
      >
        <Text style={styles.buttonText}>Customized Kits</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.homeButtonText}>🏠</Text>
      </TouchableOpacity>

      {/* Menu Button */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Menu Options</Text>

            <Pressable
              style={styles.modalOption}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Checkout');
              }}
            >
              <Text style={styles.modalOptionText}>Checkout</Text>
            </Pressable>

            <Pressable
              style={styles.modalOption}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Sales');
              }}
            >
              <Text style={styles.modalOptionText}>Sales</Text>
            </Pressable>

            <Pressable
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Other Screens
function CustomiseJerseyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Customize your Jersey Here!</Text>
    </View>
  );
}

function ClubKitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Browse Club Kits!</Text>
    </View>
  );
}

function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Payment Page</Text>
    </View>
  );
}

function SalesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sales Page</Text>
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
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
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
    width: '60%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  secondaryImage: {
    width: '60%',
    height: 140,
    borderRadius: 8,
    marginVertical: 20,
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
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#007BFF',
    borderRadius: 0,
    padding: 10,
  },
  homeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  menuButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    padding: 10,
  },
  menuButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#000',
  },
});


