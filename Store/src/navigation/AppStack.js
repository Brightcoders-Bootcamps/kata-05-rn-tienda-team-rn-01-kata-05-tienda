import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import ProductDetails from '../screens/ProductDetails';
import orderPlaced from '../screens/OrderPlaced';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="orderPlaced"
        component={orderPlaced}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
