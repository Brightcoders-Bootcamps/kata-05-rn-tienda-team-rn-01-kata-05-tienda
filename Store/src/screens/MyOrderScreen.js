import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/Colors';
import TrashIcon from 'react-native-vector-icons/Entypo';
import BottomMenu from './BottomMenu';

const MyOrderScreen = ({navigation}) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([
    {
      key: 1,
      name: 'Apple',
      price: '10',
      quantity: '1 kg',
      ruta: require('../img/manzana.jpg'),
    },
    {
      key: 2,
      name: 'Dried',
      price: '20',
      quantity: '1 kg',
      ruta: require('../img/manzana.jpg'),
    },
    {
      key: 1,
      name: 'Cabbage',
      price: '15',
      quantity: '1 kg',
      ruta: require('../img/manzana.jpg'),
    },
  ]);

  return (
    <ImageBackground source={require('../img/fondo.png')} style={styles.image}>
      <View style={styles.title}>
        <Icon
          name="menu"
          size={40}
          color={colors.white}
          onPress={() => navigation.openDrawer()}
        />
        <Text style={{fontSize: 20, color: colors.white}}>My Order</Text>
        <TouchableOpacity>
          <Icon name="cart" size={40} color={colors.white}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={{color: colors.white}}>Sub Total = {total}$</Text>
        <TouchableOpacity>
          <Text style={styles.CheckOut}>Check Out Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView style={styles.scrollproducts}>
          {products.map((product, index) => {
            return (
              <View key={index} style={styles.productDetails}>
                <View style={styles.mainText}>
                  <View>
                    <Image
                      source={product.ruta}
                      style={styles.imageProduct}></Image>
                  </View>

                  <View style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <View>
                      <View style={styles.productName}>
                        <Text style={{color: colors.gray}}>{product.name}</Text>
                        <TouchableOpacity>
                          <TrashIcon
                            name="trash"
                            size={40}
                            style={styles.trashIcon}
                          />
                        </TouchableOpacity>
                      </View>
                      <Text style={{color: colors.gray}}>
                        {product.quantity}
                      </Text>
                      <Text style={{color: colors.gray}}>
                        $ {product.price}
                      </Text>
                    </View>

                    <View style={styles.amount}>
                      <Icon
                        name="minus-circle-outline"
                        size={40}
                        color={colors.gray}></Icon>
                      <Text style={styles.amountText}>2 kg</Text>
                      <Icon
                        name="plus-circle-outline"
                        size={40}
                        color={colors.gray}></Icon>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <BottomMenu />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 22,
    marginBottom: 90,
    height: 500,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollproducts: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 38,
  },
  mainText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  imageProduct: {
    width: 145,
    height: 145,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 3,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 25,
  },
  trashIcon: {
    color: colors.gray,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  CheckOut: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.white,
    color: colors.white,
  },
  productName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  amountText: {
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    color: colors.gray,
  },
});

export default MyOrderScreen;
