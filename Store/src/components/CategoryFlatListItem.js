import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Card} from 'react-native-elements';
import colors from '../utils/Colors';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';
import {data} from '../components/OrderData';

let products = data.products;
var order = 'order1544';

const CategoryFlatListItem = ({props, navigation}) => {
 let imageSource= props.image;

  const {user} = useContext(AuthContext);
  const onRegister = () => {
    products.push({
      order: order,
      name: props.name,
      name: props.name,
      image:props.image,
      price:props.price,
      unit:props.unit,
      quantity:props.quantity,
    });
    Alert.alert('agregado');
  };

  return (
    <View style={styles.itemContainer}>
      <Card>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {props: props, navigation:navigation })}>
          <Card.Image 
          source={{uri: imageSource}} 
          style={styles.image}>
            <Text style={styles.quantityText}>{props.quantity}</Text>
          </Card.Image>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nameAndPriceText}>{props.name}</Text>
          <Text style={styles.nameAndPriceText}>{'$' + props.price}</Text>
          <TouchableOpacity onPress={onRegister}>
            <Text style={styles.addToCardText}>{'Add to cart'}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginTop: 20,
  },
  image: {height: 70},
  nameAndPriceText: {
    color: colors.gray,
    fontSize: 12,
  },
  addToCardText: {
    color: colors.gray,
    fontSize: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 5,
    marginTop: 10,
  },
  quantityText: {
    backgroundColor: '#AC9F43',
    alignSelf: 'flex-end',
    borderRadius: 10,
    color: colors.white,
  },
});

export default CategoryFlatListItem;
