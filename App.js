import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Terms from './Screens/Terms';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

})
