import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import Mypage from './components/Mypage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [users, setUsers] = useState([{}]);
  const [isLogin, setIsLogin] = useState(false);

  const handleUsers = (userEmail, userPw) => {
    setUsers([
      ...users,
      {id: Math.random(), userEmail: userEmail, userPw: userPw},
    ]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerStyle: {backgroundColor: '#1F2124'},
          headerTintColor: '#fff',
        }}>

        <Stack.Screen name="Landing">
          {props => <Landing {...props} users={users} />}
        </Stack.Screen>
        <Stack.Screen name="Mypage">
          {props => <Mypage {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp">
          {props => <SignUp {...props} handleUsers={handleUsers} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
