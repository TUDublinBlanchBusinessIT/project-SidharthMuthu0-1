import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import CommonStyles from './commonstyles2';

const salesData = [
  {
    id: '1',
    name: 'Discounted Club Jersey',
    originalPrice: '$59.99',
    salePrice: '$39.99',
    image: 'https://images.prodirectsport.com/ProductImages/Main/283254_Main_Thumb_1410187.jpg',
  },
  {
    id: '2',
    name: 'Home Jersey (Sale)',
    originalPrice: '$69.99',
    salePrice: '$49.99',
    image: 'https://images.prodirectsport.com/ProductImages/Main/283257_Main_Thumb_1410205.jpg',
  },
  {
    id: '3',
    name: 'Training Jersey',
    originalPrice: '$39.99',
    salePrice: '$29.99',
    image: 'https://res.cloudinary.com/trentbridge/image/upload/ar_1.77,c_fill,w_600,f_auto,q_auto/2020/product_listing_images/1585222367_ss-training-jersey.png',
  },
];

export default function SalesScreen() {
  const renderSaleItem = ({ item }) => (
    <View style={CommonStyles.card}>
      {/* Image */}
      <Image source={{ uri: item.image }} style={CommonStyles.cardImage} />

      {/* Item Details */}
      <Text style={CommonStyles.cardTitle}>{item.name}</Text>
      <Text style={CommonStyles.cardPrice}>
        <Text style={{ textDecorationLine: 'line-through', color: 'red' }}>
          {item.originalPrice}{' '}
        </Text>
        {item.salePrice}
      </Text>

      {/* Add to Cart Button */}
      <TouchableOpacity style={CommonStyles.button}>
        <Text style={CommonStyles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Sales & Discounts</Text>
      <FlatList
        data={salesData}
        renderItem={renderSaleItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={CommonStyles.listContainer}
      />
    </View>
  );
}
