import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerContent = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.teal}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={styles.titleContiner}>
            <Text style={styles.title}>Vegetablely</Text>
            <Image
              style={styles.shopIcon}
              source={require('../img/ShopIcon.png')}
            />
          </View>

          <DrawerItem
            icon={() => <Icon name="menu" size={30} color="#fff" />}
            label={''}
          />
          <DrawerItem
            icon={() => <Icon name="home" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Home</Text>}
            onPress={() => props.navigation.navigate('CategoryScreen')}
          />
          <DrawerItem
            icon={() => <Icon name="shopping-cart" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>My Orders</Text>}
            onPress={() => {
              // original props.navigation.navigate('MyOrderScreen')
              props.navigation.navigate('OrdersScreen');
            }}
          />
          <DrawerItem
            icon={() => <Icon name="local-offer" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Offers</Text>}
            onPress={() => props.navigation.navigate('Offers')}
          />
          <DrawerItem
            icon={() => <Icon name="notifications" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Notifications</Text>}
            onPress={() => props.navigation.navigate('Notifications')}
          />
          <DrawerItem
            icon={() => <Icon name="store" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Our Brances</Text>}
            onPress={() => props.navigation.navigate('OurBrances')}
          />
          <DrawerItem
            icon={() => <Icon name="call" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Contact Us</Text>}
            onPress={() => props.navigation.navigate('ContactUs')}
          />
          <DrawerItem
            icon={() => <Icon name="sms-failed" size={30} color="#fff" />}
            label={() => <Text style={styles.label}>Feedback</Text>}
            onPress={() => props.navigation.navigate('Feedback')}
          />
          <DrawerItem
            icon={() => (
              <Icon
                name="logout"
                size={30}
                color="#fff"
                style={styles.logOutIcon}
              />
            )}
            label={() => <Text style={styles.label}>Logout</Text>}
            onPress={() => props.navigation.navigate('Logout')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContiner: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  label: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  shopIcon: {
    width: '30%',
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  logOutIcon: {
    transform: [{rotate: '180deg'}],
  },
});

export default DrawerContent;
