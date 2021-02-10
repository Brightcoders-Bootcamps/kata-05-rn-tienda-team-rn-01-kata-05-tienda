import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            switch (e.code) {
              case 'auth/invalid-email':
                Alert.alert('invalid email');
                break;
              case 'auth/email-already-in-use':
                Alert.alert('email already in use');
                break;
              case 'auth/weak-password':
                Alert.alert('weak password');
                break;
            }
          }
        },
        forgotPassword: async (email) =>{
           try{
             await auth().sendPasswordResetEmail(email);
             Alert.alert('Please check your email...');
           }catch(e){
             console.log(e);
           }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
