import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BottomMenu from './BottomMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/Colors';
import {Dimensions} from 'react-native';
import CategoryFlatList from '../components/CategoryFlatList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoryScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.teal,
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
