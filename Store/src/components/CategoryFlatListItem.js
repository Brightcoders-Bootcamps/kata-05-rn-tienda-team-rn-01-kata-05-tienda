import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import colors from '../utils/Colors';

const CategoryFlatListItem = ({props}) => {
  return (
    <View style={styles.itemContainer}>
      <Card>
        <Card.Image source={props.image} style={styles.image}>
          <Text style={styles.quantityText}>{props.quantity}</Text>
        </Card.Image>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nameAndPriceText}>{props.name}</Text>
          <Text style={styles.nameAndPriceText}>{'$' + props.price}</Text>
          <TouchableOpacity>
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
    fontSize: 13,
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
