import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryFlatListItem from './CategoryFlatListItem';
import colors from '../utils/Colors';

var json = [
  {
    id: 1,
    name: 'Apple',
    image: require('../img/manzana.jpg'),
    price: 101.0,
    quantity: '1kg',
    category: 'fruit',
    description: 'Poner descripcion',
  },
  {
    id: 2,
    name: 'Strawberry',
    image: require('../img/fresa.jpeg'),
    price: 102.0,
    quantity: '2kg',
    category: 'fruit',
    description: 'Poner descripcion',
  },
  {
    id: 3,
    name: 'Orange',
    image: require('../img/naranja.jpeg'),
    price: 103.0,
    quantity: '3kg',
    category: 'fruit',
    description: 'Poner descripcion',
  },
];

const CategoryFlatList = ({navigation}) => {
  return (
    <FlatList
      style={styles.flatList}
      data={json}
      renderItem={({item}) => (
        <CategoryFlatListItem props={item} navigation={navigation} />
      )}
      numColumns={3}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default CategoryFlatList;
