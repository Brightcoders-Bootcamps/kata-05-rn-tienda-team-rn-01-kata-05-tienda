import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import DrawerMenu from './DrawerMenu';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import Splash from '../screens/Splash';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [Initializing, setInitializing] = useState(true);
  const [isReady, setReady] = useState(false);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (Initializing) setInitializing(false);
  };
  useEffect(() => {
    const suscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return suscriber;
  }, []);

  if (Initializing) return null;

  if (!isReady) {
    setTimeout(() => {
      setReady(true);
    }, 2000);
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        {user ? <DrawerMenu /> : <AuthStack />}
      </NavigationContainer>
    );
  }
};

export default Routes;
