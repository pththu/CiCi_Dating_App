import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './screen/login/Login';
import LoginWithPhoneNumberScreen, { LoginOTP } from './screen/login/LoginWithPhoneNumberScreen';
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
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name='auth' component={AuthNavigation} />
        <Stack.Screen name='inap' component={InapNavigation} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="EditProfilt" component={EditProfilt} />
        <Stack.Screen name="PlanSetting" component={PlanSetting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LoginWithPhoneNumberScreen" component={LoginWithPhoneNumberScreen} />
      <Stack.Screen name="LoginOTP" component={LoginOTP} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}

const InapNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Likes') {
            iconName = 'heart-outline';
          } else if (route.name === 'ChatList') {
            iconName = 'wechat';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }
          return <Icon name={iconName} size={35} color={color} />
        },
        tabBarActiveTintColor: '#AA3FEC',
        tabBarInactiveTintColor: '#000',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          width: '100%',
          height: 69,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }
      })}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Likes' component={Likes} />
      <Tab.Screen name='ChatList' component={ChatList} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
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
