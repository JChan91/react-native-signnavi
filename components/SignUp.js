import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from 'react-native';

const SignUp = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPw, setInputConfirmPw] = useState('');
  const [valid, setValid] = useState(false);

  const onChangeEmail = text => {
    setInputEmail(text);
  };

  const onChangePassword = text => {
    setInputPassword(text);
  };

  const onChangeConFirmPassword = text => {
    setInputConfirmPw(text);
  };

  const checkValid = () => {
    if (inputPassword !== inputConfirmPw) {
      Alert.alert('Wrong', 'Wrong Password', [
        {
          text: 'Go Back',
          onPress: () => {
            setInputConfirmPw('');
          },
        },
      ]);
    }

    if (inputPassword === inputConfirmPw) {
      console.log('Correct');
      if (!valid) {
        setValid(!valid);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
          }}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={inputPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={onChangeConFirmPassword}
          onSubmitEditing={checkValid}
          value={inputConfirmPw}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.btn} disabled={valid ? false : true}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  logoView: {
    flex: 1,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  inputView: {
    height: '50%',
  },

  input: {
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 5,
    color: '#fff',
  },

  btn: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

  check: {
    color: '#fff',
  },
});

export default SignUp;
