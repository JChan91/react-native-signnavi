import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Landing = ({navigation, users}) => {
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

  const checkValid = () => {
    if (
      users.filter(
        user => user.userEmail === userEmail && user.userPw === userPassword,
      ).length
    ) {
      navigation.navigate('Mypage', {userEmail, userPassword});
    } else {
      Alert.alert('Wrong', 'Wrong Email or Password');
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
          style={styles.userInput}
          placeholder="USER EMAIL"
          placeholderTextColor="#fff"
          value={userEmail}
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={onChangeEmail}
        />
        <View style={styles.pwView}>
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
                  style={styles.icon}
                  size={40}
                  color="#fff"
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.btnLayout}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={checkValid}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    // flex: 1,
  },

  userInput: {
    color: '#fff',
    margin: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },

  visibleIcon: {
    position: 'absolute',
    right: 10,
  },

  btnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  btn: {
    height: 50,
    width: 150,
    backgroundColor: '#30A9DE',
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Landing;
