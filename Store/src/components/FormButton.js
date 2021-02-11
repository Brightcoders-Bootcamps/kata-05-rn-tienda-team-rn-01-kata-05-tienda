import React from 'react';
import {Text, TouchableOpacity, Button, View, StyleSheet} from 'react-native';
import {windowHeight, windowWith} from '../utils/Dimensions';
import colors from '../utils/Colors';

import IconArrow from 'react-native-vector-icons/AntDesign';

const FormButton = ({buttonTitle, backgroundColor, color, ...rest}) => {
  let bgcolor = backgroundColor;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {backgroundColor: bgcolor, flexDirection: 'row'},
      ]}
      {...rest}>
      <IconArrow name="arrowright" style={styles.IconArrow} />
      <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '85%',
    height: windowHeight / 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  IconArrow: {
    fontSize: 25,
    color: colors.white,
    marginRight: 10,
  },
});

export default FormButton;
