import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../utils/Colors';

const height = Dimensions.get('window').height;

const OrderPlaced = () => {
  return (
    <ImageBackground source={require('../img/fondo.png')} style={styles.image}>
      <View style={styles.continer}>
        <Image
          style={styles.shopIcon}
          source={require('../img/ShopIcon.png')}
        />
        <Text style={styles.text}>{'Order placed'}</Text>
        <Text style={styles.text}>{'Your order number is'}</Text>
        <Text style={styles.numberOrder}>{'#5678'}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  continer: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: height * 0.13,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  shopIcon: {
    width: '30%',
    height: 90,
    backgroundColor: colors.white,
    borderRadius: 100,
    marginBottom: height * 0.2,
  },
  text: {
    color: colors.gray,
    fontSize: 20,
  },
  numberOrder: {
    color: colors.teal,
    fontSize: 30,
  },
});

export default OrderPlaced;
