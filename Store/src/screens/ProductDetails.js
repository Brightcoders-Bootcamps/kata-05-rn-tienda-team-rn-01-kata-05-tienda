import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomMenu from './BottomMenu';
import {data} from '../components/OrderData';

let products = data.products;
var order="order1544";


const ProductDetails = ({route}) => {
  let imageSource=route.params.props.image;

  const onRegister =()=>{
    products.push( {
      order: order,
      name: route.params.props.name,
      image:route.params.props.image,
      price: route.params.props.price,
      unit:route.params.props.unit,
      quantity:route.params.props.quantity,
    })
    Alert.alert("agregado");
  }
  console.log(route);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity    onPress={() => route.params.navigation.openDrawer()}>
            <Icon name="menu" size={40} color="#A6BCD0" ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={[styles.strongColor, {fontSize: 25, paddingTop: 6}]}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cart" size={40} color="#A6BCD0"  onPress={() => route.params.navigation.navigate('MyOrderScreen')}  ></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.boxShadow}>
       <Image source={{uri: imageSource}}  style={styles.image}></Image>
        </View>
        <View style={styles.infoDivider}>
          <View>
            <Text style={[styles.strongColor, {fontSize: 20}]}>
              {route.params.props.name}
            </Text>
            <Text style={{marginTop: 5, color: '#A6BCD0'}}>
              {'$' + route.params.props.price}
            </Text>
          </View>
          <View style={styles.infoDivider}>
            <Text style={styles.details}>{route.params.props.description}</Text>
          </View>
          <View style={styles.infoDivider}>
            <View style={styles.amount}>
              <Icon
                name="minus-circle-outline"
                size={45}
                color="#A6BCD0"></Icon>
              <Text
                style={[
                  styles.strongColor,
                  {alignSelf: 'center', marginLeft: 10, marginRight: 10},
                ]}>
                {route.params.props.quantity} {route.params.props.unit}
              </Text>
              <Icon name="plus-circle-outline" size={45} color="#A6BCD0"></Icon>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.cartButton} onPress={onRegister}>
          <Text style={styles.cartTitle}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  strongColor: {
    color: '#748A9D',
    fontWeight: 'bold',
  },
  details: {
    color: '#A6BCD0',
    lineHeight: 25,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  boxShadow: {
    shadowColor: '#5C6EF8',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 9,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 70,
    marginRight: 10,
  },
  infoDivider: {
    marginTop: 30,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  cartButton: {
    backgroundColor: '#3CB3AB',
    paddingTop: 20,
    paddingBottom: 20,
  },
  cartTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
