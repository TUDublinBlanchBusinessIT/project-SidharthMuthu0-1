import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import CommonStyles from './CommonStyles';

function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={CommonStyles.container}>
      {/* Search Bar */}
      <View style={CommonStyles.searchContainer}>
        <TextInput placeholder="Search" style={CommonStyles.searchInput} />
      </View>

      {/* Sale Text */}
      <Text style={CommonStyles.text}>Big Sale on 50% OFF</Text>

      {/* Banner Image */}
      <Image
        source={{
          uri: 'https://images.prodirectsport.com/ProductImages/Main/283254_Main_Thumb_1410187.jpg',
        }}
        style={CommonStyles.bannerImage}
      />

  
      {/* Buttons */}
      <TouchableOpacity
        style={CommonStyles.button}
        onPress={() => navigation.navigate('Customise Jerseys')}
      >
        <Text style={CommonStyles.buttonText}>Customise Jerseys</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://images.prodirectsport.com/ProductImages/Main/283258_Main_Thumb_1410207.jpg',
        }}
        style={CommonStyles.bannerImage}
      />

      <TouchableOpacity
        style={CommonStyles.button}
        onPress={() => navigation.navigate('Club Kits')}
      >
        <Text style={CommonStyles.buttonText}>Club Kits</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity
        style={CommonStyles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={CommonStyles.homeButtonText}>🏠</Text>
      </TouchableOpacity>

      {/* Menu Button */}
      <TouchableOpacity
        style={CommonStyles.menuButton}
        onPress={() => setMenuVisible(true)}
      >
        <Text style={CommonStyles.menuButtonText}>☰</Text>
      </TouchableOpacity>

      {/* Menu Modal */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={CommonStyles.modalContainer}>
          <View style={CommonStyles.modalContent}>
            <Text style={CommonStyles.modalTitle}>Menu Options</Text>

            <Pressable
              style={CommonStyles.modalOption}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Checkout');
              }}
            >
              <Text style={CommonStyles.modalOptionText}>Checkout</Text>
            </Pressable>

            <Pressable
              style={CommonStyles.modalOption}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate('Sales');
              }}
            >
              <Text style={CommonStyles.modalOptionText}>Sales</Text>
            </Pressable>

            <Pressable
              style={CommonStyles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={CommonStyles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default HomeScreen;