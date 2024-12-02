import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import CommonStyles from './commonstyles2';

const cartItems = [
  {
    id: '1',
    name: 'Discounted Club Jersey',
    price: 39.99,
    quantity: 1,
    image: 'https://images.prodirectsport.com/ProductImages/Main/283254_Main_Thumb_1410187.jpg',
  },
  {
    id: '2',
    name: 'Home Jersey (Sale)',
    price: 49.99,
    quantity: 2,
    image: 'https://images.prodirectsport.com/ProductImages/Main/283257_Main_Thumb_1410205.jpg',
  },
];

export default function CheckoutScreen() {
  const [cart, setCart] = useState(cartItems);

  // Calculate Total Price
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Handle Checkout Action
  const handleCheckout = () => {
    Alert.alert('Checkout Successful', `Total: $${calculateTotal()}`, [
      { text: 'OK', onPress: () => console.log('Order Confirmed') },
    ]);
  };

  // Render Cart Items
  const renderCartItem = ({ item }) => (
    <View style={CommonStyles.card}>
      <Image source={{ uri: item.image }} style={CommonStyles.cardImage} />
      <Text style={CommonStyles.cardTitle}>{item.name}</Text>
      <Text style={CommonStyles.cardPrice}>
        ${item.price.toFixed(2)} x {item.quantity}
      </Text>
      <Text style={CommonStyles.cardPrice}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Checkout</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={CommonStyles.listContainer}
      />
      <View style={CommonStyles.summaryContainer}>
        <Text style={CommonStyles.summaryText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity style={CommonStyles.button} onPress={handleCheckout}>
          <Text style={CommonStyles.buttonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
