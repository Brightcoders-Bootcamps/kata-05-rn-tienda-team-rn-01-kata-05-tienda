import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryFlatListItem from './CategoryFlatListItem';
import colors from '../utils/Colors';

var json = [
  {
    id: 1,
    name: 'naranja',
    image: require('../img/manzana.jpg'),
    price: 100.0,
    quantity: '1kg',
    category: 'fruit',
  },
  {
    id: 2,
    name: 'naranja',
    image: require('../img/fresa.jpeg'),
    price: 100.0,
    quantity: '1kg',
    category: 'fruit',
  },
  {
    id: 3,
    name: 'naranja',
    image: require('../img/naranja.jpeg'),
    price: 100.0,
    quantity: '1kg',
    category: 'fruit',
  },
];

const CategoryFlatList = () => {
  return (
    <FlatList
      style={styles.flatList}
      data={json}
      renderItem={({item}) => <CategoryFlatListItem props={item} />}
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
    marginBottom: 20,
  },
});

export default CategoryFlatList;
