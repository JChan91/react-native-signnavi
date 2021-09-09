import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Input from './components/Input';
import SignIn from './components/SignIn';

const App = () => {
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
        <Input />
      </View>

      <View style={styles.btnView}>
        <SignIn />
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
    flex: 1,
  },

  btnView: {
    flex: 1,
  },
});

export default App;
