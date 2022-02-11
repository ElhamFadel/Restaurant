import { StyleSheet, Text, View } from 'react-native'
import {  createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import StartScreen from "../screens/StartScreen"
import RegisterScreen from "../screens/RegisterScreen"
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

const ResturantStack = createStackNavigator()
const Navigation = () => {
  return (
    <>
    <NavigationContainer>
    <ResturantStack.Navigator>
      <ResturantStack.Screen
      name="Start"
      component={StartScreen}
      options={{
          headerShown: false
        }}
      />
      <ResturantStack.Screen
        name="Restaurants"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <ResturantStack.Screen
       name="Login"
      component={LoginScreen}
      options={{
          headerShown: false
        }}
      />
      
      <ResturantStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
          headerShown: false
        }}
      />
    </ResturantStack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default Navigation

const styles = StyleSheet.create({})