import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppStack from './AppStack';
import MyOrderScreen from '../screens/MyOrderScreen';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/Colors';
import ProductDetails from '../screens/ProductDetails';
import OrdersScreen from '../screens/OrdersScreen';
import OrderPlaced from '../screens/OrderPlaced';

const relleno1 = () => {
  return <Text>"Relleno 1"</Text>;
};

const relleno2 = () => {
  return <Text>"Relleno 2"</Text>;
};

const relleno3 = () => {
  return <Text>"Relleno 3"</Text>;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 70},
        activeTintColor: colors.teal,
        inactiveTintColor: colors.gray,
      }}
      initialRouteName={'AppStack'}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'AppStack') {
            return (
              <Icon name="storefront-outline" size={30} color={color}></Icon>
            );
          } else if (route.name === 'OrdersScreen') {
            return (
              <Icon
                name="star-box-multiple-outline"
                size={30}
                color={color}></Icon>
            );
          } else if (route.name === 'ProductDetails') {
            return (
              <Icon
                name="plus-circle"
                size={70}
                color={color}
                style={styles.circleIcon}></Icon>
            );
          } else if (route.name === 'MyOrderScreen') {
            return <Icon name="cart-outline" size={30} color={color}></Icon>;
          } else if (route.name === 'relleno3') {
            return <Icon name="bell-outline" size={30} color={color}></Icon>;
          }
        },
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen name={'AppStack'} component={AppStack} />
      <Tab.Screen name={'OrdersScreen'} component={OrdersScreen} />
      <Tab.Screen name={'ProductDetails'} component={ProductDetails} />
      <Tab.Screen name={'MyOrderScreen'} component={MyOrderScreen} />
      <Tab.Screen name={'relleno3'} component={relleno3} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  circleIcon: {
    borderBottomColor: colors.teal,
    borderBottomWidth: 10,
  },
});
