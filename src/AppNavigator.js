import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/modules/Home/index'
const AppNavigator = () => {
  const { Navigator, Screen } = createStackNavigator()


  return (
    <NavigationContainer>
      <Navigator>
        <Screen name ="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator