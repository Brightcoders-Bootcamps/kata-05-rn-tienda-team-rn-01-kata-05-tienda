import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

import TabNavigation from './TabNavigation';

const Offers = () => {
  return (
    <View>
      <Text>Offers</Text>
    </View>
  );
};

const Orders = () => {
  return (
    <View>
      <Text>Orders</Text>
    </View>
  );
}

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

const OurBrances = () => {
  return (
    <View>
      <Text>Our Brances</Text>
    </View>
  );
};

const ContactUs = () => {
  return (
    <View>
      <Text>Contact Us</Text>
    </View>
  );
};

const Feedback = () => {
  return (
    <View>
      <Text>Feedback</Text>
    </View>
  );
};

const Logout = () => {
  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'BottomMenu'}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={'BottomMenu'} component={TabNavigation} />
      <Drawer.Screen name={'Offers'} component={Offers} />
      <Drawer.Screen name={'Orders'} component={Orders} />
      <Drawer.Screen name={'Notifications'} component={Notifications} />
      <Drawer.Screen name={'OurBrances'} component={OurBrances} />
      <Drawer.Screen name={'Contact Us'} component={ContactUs} />
      <Drawer.Screen name={'Feedback'} component={Feedback} />
      <Drawer.Screen name={'Logout'} component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
