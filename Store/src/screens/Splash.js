import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <ImageBackground
      source={require('../img/fondo.png')}
      style={styles.image}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Splash;
