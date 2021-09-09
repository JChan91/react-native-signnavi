import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const SignIn = () => {
  const onPressBtn = () => {
    console.log('BUTTON');
  };

  return (
    <View style={styles.btnView}>
      <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
        <Text style={styles.btnText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
})

export default SignIn;