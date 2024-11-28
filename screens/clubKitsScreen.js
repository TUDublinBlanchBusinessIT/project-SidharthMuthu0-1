import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import CommonStyles from './commonstyles2';

const kitsData = [
  {
    id: '1',
    name: 'Club Kit 1',
    price: '$49.99',
    image: 'https://images.prodirectsport.com/ProductImages/Main/283257_Main_Thumb_1410205.jpg', // 
  },
  {
    id: '2',
    name: 'Club Kit 2',
    price: '$59.99',
    image: 'https://res.cloudinary.com/trentbridge/image/upload/ar_1.77,c_fill,w_600,f_auto,q_auto/2020/product_listing_images/1585222367_ss-training-jersey.png', 
  },
  {
    id: '3',
    name: 'Club Kit 3',
    price: '$39.99',
    image: 'https://www.medocmall.co.uk/images/shop_nccc/products/cms//sub_dept_5565Bargains.singlet.png', 
  },
];

export default function ClubKitsScreen() {
  const renderKit = ({ item }) => (
    <View style={CommonStyles.card}>
      <Image source={{ uri: item.image }} style={CommonStyles.cardImage} />
      <Text style={CommonStyles.cardTitle}>{item.name}</Text>
      <Text style={CommonStyles.cardPrice}>{item.price}</Text>
      <TouchableOpacity style={CommonStyles.button}>
        <Text style={CommonStyles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.text}>Browse Club Kits</Text>
      <FlatList
        data={kitsData}
        renderItem={renderKit}
        keyExtractor={(item) => item.id}
        contentContainerStyle={CommonStyles.listContainer}
      />
    </View>
  );
}
