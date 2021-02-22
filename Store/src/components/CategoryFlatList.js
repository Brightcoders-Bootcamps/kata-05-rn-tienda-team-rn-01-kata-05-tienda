import React,{useEffect,useState} from 'react';
import {FlatList, StyleSheet,Alert} from 'react-native';
import CategoryFlatListItem from './CategoryFlatListItem';
import colors from '../utils/Colors';

import firestore from '@react-native-firebase/firestore';


const CategoryFlatList = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [loadData, setLoadData] = useState(false);
  
  useEffect(() => {
    firestore()
      .collection('Products')
      .get()
      .then((e) => {
        const productArray = [];
        e.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          productArray.push(data);
        });
        setProducts(productArray);
      })
      .catch(function (error) {
        Alert.alert('Error Reload Data');
      });
    setLoadData(false);
  }, [loadData]);
  

  return (
    <FlatList
      style={styles.flatList}
      data={products}
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
