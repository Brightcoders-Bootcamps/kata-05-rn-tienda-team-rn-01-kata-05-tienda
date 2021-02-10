import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogInScreen from '../screens/LogInScreen';
import SignInScreen from '../screens/SignInScreen';
import  ForgotPassword from '../screens/ForgotPassword';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{header: () => null}}
      />
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
