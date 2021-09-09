import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Landing = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [pwVisible, setPwVisible] = useState(false);

  const onChangeEmail = text => {
    setUserEmail(text);
  };

  const onChangePassword = text => {
    setUserPassword(text);
  };

  const onPressVisible = () => {
    setPwVisible(!pwVisible);
  };

  const onPressBtn = () => {
    console.log('BUTTON');
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
          style={styles.userInput}
          placeholder="USER EMAIL"
          placeholderTextColor="#fff"
          value={userEmail}
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={styles.userInput}
          placeholder="USER PASSWORD"
          placeholderTextColor="#fff"
          secureTextEntry={pwVisible ? true : false}
          value={userPassword}
          onChangeText={onChangePassword}
        />

        <View style={styles.visibleIcon}>
          <TouchableOpacity>
            <Text onPress={onPressVisible}>
              <Icon
                name={pwVisible ? 'eye-with-line' : 'eye'}
                size={40}
                color="#fff"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    flex: 2,
  },

  userInput: {
    color: '#fff',
    margin: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },

  visibleIcon: {
    flexDirection: 'row',
  },

  btnView: {
    flex: 1,
  },

  btn: {
    height: '20%',
    backgroundColor: '#30A9DE',
    margin: 8,
    borderRadius: 10,
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },

});

export default Landing;
