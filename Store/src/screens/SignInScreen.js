import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const SignInScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const {register} = useContext(AuthContext);
  const [formError, setFormError] = useState({});

  const onRegister = () => {
    let errors = {};
    if (!name || !email || !password) {
      if (!name) errors.name = true;
      if (!email) errors.email = true;
      if (!password) errors.password = true;
    } else {
      register(email, password);
    }
    setFormError(errors);
  };

  return (
    <ImageBackground
      source={require('../img/Captura.png')}
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}> {contentText.createAccountM} </Text>

        <View style={styles.ContainerInput}>
          <FormInput
            labelValue={name}
            onChangeText={(userName) => setName(userName)}
            secureTextEntry={false}
            placeholderText="Full Name"
            name="user"
          />

          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            secureTextEntry={false}
            placeholderText="Email"
            name="mail"
          />

          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPasword(userPassword)}
            secureTextEntry={true}
            source={true}
            placeholderText="Password"
            name="lock"
          />
        </View>

        <FormButton
          buttonTitle={contentText.createAccount}
          onPress={onRegister}
          backgroundColor={colors.teal}
          color={colors.white}
        />
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.goToSignIn}> {contentText.SigInTitleM} </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 490,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    fontSize: 25,
    color: colors.darkGray,
    marginBottom: 10,
  },
  ContainerInput: {
    marginTop: 20,
    marginBottom: 10,
  },
  goToSignIn: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  login: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default SignInScreen;
