import React from 'react';
import Providers from './src/navigation';
import ProductDetails from './src/screens/ProductDetails';
import CategoryScreen from './src/screens/CategoryScreen';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const App = () => {
  return <Providers />;
  //return <CategoryScreen />;
};

export default App;
