import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrdersScreen = ({navigation}) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      key: "1",
      order: 'Order#123',
      //delivery could be static
      delivery: 134,
      details: [
        {
          name: 'Apple',
          price: 12,
          quantity: 5,
          metric: 'kg',
        },
        {
          name: 'Orange',
          price: 14,
          quantity: 1,
          metric: 'kg',
        },
        {
          name: 'Eggs',
          price: 12,
          quantity: 3,
          metric: 'kg',
        },
      ],
      // somewhere else on the app needs to get the sum of all the products
      // so we have the static calculated value here
      total_price: 110,
    },
    {
      key: "2",
      order: 'Order#1235',
      delivery: 124,
      details: [
        {
          name: 'Watermelon',
          price: 20,
          quantity: 1,
          metric: 'kg',
        },
        {
          name: 'Salt',
          price: 4,
          quantity: 500,
          metric: 'g',
        },
        {
          name: 'Eggs',
          price: 12,
          quantity: 5,
          metric: 'kg',
        },
      ],
      total_price: 82,
    },
    {
      key: "3",
      order: 'Order#125',
      delivery: 190,
      details: [
        {
          name: 'Watermelon',
          price: 20,
          quantity: 1,
          metric: 'kg',
        },
        {
          name: 'Salt',
          price: 4,
          quantity: 500,
          metric: 'g',
        },
        {
          name: 'Eggs',
          price: 12,
          quantity: 5,
          metric: 'kg',
        },
      ],
      total_price: 82,
    },
  ];

  const Order = ({order, details, delivery, total, onPress, show}) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: colors.darkGray, fontSize: 17}}>{order}</Text>
        <Icon
          name="chevron-down"
          color={colors.gray}
          style={{alignSelf: 'center'}}></Icon>
      </View>
      <View
        style={[show ? {display: 'flex'} : {display: 'none'}, {marginTop: 10}]}>
        <FlatList
          data={details}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => (
            <View style={[styles.accordionItem, {flexDirection: 'row'}]}>
              <Text style={{fontSize: 16, color: colors.darkGray}}>
                {item.name}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.gray,
                    marginRight: 30,
                  }}>
                  {item.quantity} {item.metric}
                </Text>
                <Text style={{fontSize: 16, color: colors.darkGray}}>
                  ${item.price}
                </Text>
              </View>
            </View>
          )}
        />
        <View style={{marginTop: 30}}>
          <View
            style={[
              styles.accordionItem,
              {flexDirection: 'row', justifyContent: 'flex-end'},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, color: colors.gray, marginRight: 30}}>
                Delivery
              </Text>
              <Text style={{fontSize: 16, color: colors.darkGray}}>
                ${delivery}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.accordionItem,
              {flexDirection: 'row', justifyContent: 'flex-end'},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 16, color: colors.gray, marginRight: 30}}>
                Total
              </Text>
              <Text style={{fontSize: 16, color: colors.darkGray}}>
                ${total + delivery}
              </Text>
            </View>
          </View>
          <View style={{marginTop: -30}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="check-circle"
                  color={colors.teal}
                  style={{fontSize: 30, marginRight: 20}}></Icon>
                <Text style={{fontSize: 16, color: colors.teal}}>Shipped</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const RenderOrders = ({item}) => {
    const show = item.key === selectedOrder ? true : false;
    return (
      <View style={styles.accordion}>
        <Order
          onPress={() => setSelectedOrder(item.key)}
          show={show}
          order={item.order}
          details={item.details}
          delivery={item.delivery}
          total={item.total_price}
        />
      </View>
    );
  };

  return (
    <>
      <Text style={styles.title}> Your Orders </Text>
      <FlatList
        data={orders}
        renderItem={RenderOrders}
        keyExtractor={(item) => item.key}
        extraData={selectedOrder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: colors.darkGray,
    padding: 20,
    marginBottom: 20,
  },
  accordion: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 13,
    elevation: 20,
  },
  accordionItem: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
});

export default OrdersScreen;
