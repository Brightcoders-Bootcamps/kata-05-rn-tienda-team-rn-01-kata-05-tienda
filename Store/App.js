import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from './src/utils/Colors';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Text style={styles.Title}>Vector Icons</Text>
        <Icon name="shoppingcart" size={60} color={colors.blue} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: colors.blue,
    fontSize: 20,
  },
});

export default App;
