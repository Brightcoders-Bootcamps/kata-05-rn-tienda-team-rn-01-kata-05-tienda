import React, {useContext, useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/Colors';
import contentText from '../utils/Constants';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  const {login} = useContext(AuthContext);
  const [formError, setFormError] = useState({});

  const onLoginValidate = () => {
    let errors = {};
    if (!email || !password) {
      if (!email) errors.email = true;
      if (!password) errors.password = true;
    } else {
      login(email, password);
    }
    setFormError(errors);
  };

  return (
    <ImageBackground
      source={require('../img/Captura.png')}
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}> {contentText.SigInTitle} </Text>
        <View style={styles.ContainerInput}>
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
            placeholderText="Password"
            name="lock"
          />
        </View>
        <Text style={styles.forgotPassword}>
          {' '}
          {contentText.forgotPassword}{' '}
        </Text>
        <FormButton
          buttonTitle="SIGN IN"
          backgroundColor={colors.teal}
          color={colors.white}
          onPress={onLoginValidate}
        />
      </View>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.goToSignIn}> {contentText.createAccount} </Text>
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
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ContainerInput: {
    marginTop: 20,
    marginBottom: 10,
  },
  formInputtext: {
    color: colors.black,
    fontSize: 15,
  },
  goToSignIn: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
  },
  login: {
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  textLogIn: {
    fontSize: 16,
    color: colors.darkGray,
  },
  textError: {
    fontSize: 13,
    color: colors.red,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  forgotPassword: {
    fontSize: 18,
    color: colors.darkGray,
    marginBottom: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default LogInScreen;
