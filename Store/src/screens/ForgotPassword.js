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
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const {forgotPassword} = useContext(AuthContext);
  const [formError, setFormError] = useState({});

  const onResetPassword = () => {
    let errors = {};
    if (!email ) {
      if (!email) errors.email = true;
    } else {
        forgotPassword(email);
    }
    setFormError(errors);
  };
  return (
    <ImageBackground
      source={require('../img/Captura.png')}
      style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}> {contentText.resetPassword} </Text>

        <View style={styles.ContainerInput}>
          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            secureTextEntry={false}
            placeholderText="Email"
            name="mail"
          />
        </View>
        <FormButton
          buttonTitle={contentText.resetPasswordM}
          backgroundColor={colors.teal}
          color={colors.white}
          onPress={onResetPassword}
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
  ContainerInput: {
    marginTop: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 25,
    color: colors.darkGray,
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
export default ForgotPassword;
