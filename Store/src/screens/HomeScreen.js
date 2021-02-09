import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import colors from '../utils/Colors';
import IconLogout from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.headTitle}>Store </Text>
        <IconLogout
          name="logout"
          style={styles.logOutIcon}
          onPress={() => logout()}
        />
      </View>
      <Text style={styles.title}>Welcome {user.uid} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
  },
  headTitle: {
    color: colors.blue,
    fontSize: 35,
    fontWeight: 'bold',
  },
  logOutIcon: {
    fontSize: 35,
    color: colors.blue,
  },
  title: {
    color: colors.black,
    fontSize: 20,
  },
});

export default HomeScreen;
