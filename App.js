import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './setup/router-manager/Navigation';
import { LogBox } from 'react-native';
import { AuthProvider } from './setup/context/AuthContext';
import { UserProvider } from './setup/context/UserContext';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  const IGNORED_LOGS = [
    'Non-serializable values were found in the navigation state',
  ];
  
  LogBox.ignoreLogs(IGNORED_LOGS);
  
  LogBox.ignoreAllLogs()
  // LogBox.ignoreLogs(['Warning: ...'])
  console.disableYellowBox = true
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <UserProvider>
        <Navigation/>
        <FlashMessage 
          position={'top'}
        />
        </UserProvider>
      </AuthProvider>
    </GestureHandlerRootView>
)
}

export default App