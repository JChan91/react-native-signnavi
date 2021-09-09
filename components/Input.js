import React, {useState} from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Input = () => {
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

  return (
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
  );
};

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
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
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
});

export default Input;
