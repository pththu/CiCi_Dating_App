import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screen/login/Login';
import LoginWithPhoneNumberScreen from './screen/login/LoginWithPhoneNumberScreen';
import SignupScreen from './screen/login/SignupScreen';
import Home from './screen/home/Home';
import ChatList from './screen/chat/ChatList';
import ChatDetail from './screen/chat/ChatDetail';
import Likes from './screen/like/Likes';
import Match from './screen/like/Match';
import Profile from './screen/profile/Profile';
import EditProfilt from './screen/profile/EditProfile';
import PlanSetting from './screen/profile/PlanSetting';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginWithPhoneNumberScreen" component={LoginWithPhoneNumberScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="Likes" component={Likes} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfilt" component={EditProfilt} />
        <Stack.Screen name="PlanSetting" component={PlanSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
