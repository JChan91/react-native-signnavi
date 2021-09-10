import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Mypage = ({route}) => {
  const {userEmail, userPassword} = route.params;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>My Page</Text>

      <View style={styles.profileView}>
        <Image
          style={styles.profileImg}
          source={{
            uri: 'https://www.nicepng.com/png/full/12-120709_png-file-human-icon-png.png',
          }}
        />
      </View>

      <View style={styles.userInfoView}>
        <View style={styles.userInfoSection}>
          <Text style={styles.userInfo}>{userEmail}</Text>
          <Icon name="cycle" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: 200,
  },

  profileView: {
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 90,
    width: 150,
    height: 150,
    backgroundColor: '#fff',
  },

  profileImg: {
    width: '100%',
    height: '100%',
  },

  userInfoView: {
    flex: 1,
    marginTop: 10,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    padding: 10,
  },

  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderBottomWidth: 1,
  },

  icon: {
    color: '#fff',
    fontSize: 25,
    position: 'absolute',
    right: 0,
  },

  userInfo: {
    width: '95%',
    margin: 5,
    padding: 5,
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Mypage;
