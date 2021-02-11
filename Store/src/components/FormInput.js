import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {windowHeight, windowWith} from '../utils/Dimensions';
import colors from '../utils/Colors';
import Icons from 'react-native-vector-icons/AntDesign';

const FormInput = ({
  placeholderText,
  labelValue,
  secureTextEntry,
  name,
  ...rest
}) => {
  return (
    <View style={styles.Container}>
      <Icons name={name} style={styles.icons} />

      <View style={styles.inputContainer}>
        <TextInput
          value={labelValue}
          style={[styles.errorInput, labelValue && styles.input]}
          placeholder={placeholderText}
          secureTextEntry={secureTextEntry}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 2,
    height: windowHeight / 10,
    borderColor: colors.black,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginLeft: 7,
  },
  input: {
    height: windowHeight / 10,
    marginBottom: 2,
    width: '90%',
    fontSize: 16,
    color: colors.black,
    borderColor: colors.white,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  icons: {
    fontSize: 35,
    color: colors.darkGray,
  },
  errorInput: {
    height: windowHeight / 15,
    marginBottom: 2,
    width: '100%',
    fontSize: 16,
    color: colors.black,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
});

export default FormInput;
