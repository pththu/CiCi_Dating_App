import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Login from './screen/Login';

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login"
      >
      <Stack.Screen name="Login" component={Login} options={{title: "Login"}} />
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
