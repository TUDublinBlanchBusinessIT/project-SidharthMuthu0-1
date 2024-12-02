
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import CustomiseJerseyScreen from './screens/CustomiseJerseyScreen';
import ClubKitsScreen from './screens/clubKitsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import SalesScreen from './screens/SalesScreen';
import SignUp from './screens/SignUp';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Customise Jerseys" component={CustomiseJerseyScreen} />
        <Stack.Screen name="Club Kits" component={ClubKitsScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Sales" component={SalesScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
