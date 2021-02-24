import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import BottomMenu from './BottomMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/Colors';
import {Dimensions} from 'react-native';
import CategoryFlatList from '../components/CategoryFlatList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../img/fondo2.png')} style={styles.image}>
     <View style={styles.topButtons}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={40} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.text}>{'Home'}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MyOrderScreen')}>
          <Icon name="shopping-cart" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <CategoryFlatList navigation={navigation} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.05,
    marginHorizontal: windowWidth * 0.05,
    marginBottom: windowHeight * 0.05,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
