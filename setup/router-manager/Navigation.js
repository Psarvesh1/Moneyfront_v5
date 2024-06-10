import React, { useState, useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthContext, { AuthProvider } from '../context/AuthContext'
import AuthNavigation from './AuthNavigation'
import MainNavigation from './MainNavigation'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Stack = createStackNavigator()

const Navigation = () => {
  let { id } = useContext(AuthContext)
  const handleRouting =  id ? AuthNavigation(Stack) : MainNavigation(Stack)

  return(
      <NavigationContainer>
        <Stack.Navigator>
        {/* {MainNavigation(Stack)}
        {AuthNavigation(Stack)} */}
        {handleRouting}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation