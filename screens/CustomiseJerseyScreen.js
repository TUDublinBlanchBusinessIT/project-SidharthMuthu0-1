import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CommonStyles from './CommonStyles';

function CustomiseJerseyScreen() {
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const availableSizes = ['S', 'M', 'L', 'XL'];

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Customize Your Jersey</Text>

      <Image
        source={{
          uri: 'https://images.prodirectsport.com/ProductImages/Main/222532_Main_0864538.jpg',
        }}
        style={CommonStyles.bannerImage}
      />

      <Text style={CommonStyles.sectionTitle}>Select Size:</Text>
      <View style={CommonStyles.sizeContainer}>
        {availableSizes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              CommonStyles.sizeButton,
              size === item && CommonStyles.sizeButtonSelected,
            ]}
            onPress={() => setSize(item)}
          >
            <Text style={[CommonStyles.sizeText, size === item && CommonStyles.sizeTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={CommonStyles.sectionTitle}>Select Quantity:</Text>
      <View style={CommonStyles.quantityContainer}>
        <TouchableOpacity
          style={CommonStyles.quantityButton}
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Text style={CommonStyles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={CommonStyles.quantityValue}>{quantity}</Text>
        <TouchableOpacity
          style={CommonStyles.quantityButton}
          onPress={() => setQuantity(quantity + 1)}
        >
          <Text style={CommonStyles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={CommonStyles.button}>
        <Text style={CommonStyles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomiseJerseyScreen;
