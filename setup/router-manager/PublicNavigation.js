import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from './routes'
import Landing from '../screens/Landing/Landing'
import SignUp from '../screens/Login|SignUp/SignUp'
import SignIn from '../screens/Login|SignUp/SignIn'
import ForgotPassword from '../screens/Login|SignUp/ForgotPassword'
import VerifyOTP from '../screens/Login|SignUp/VerifyOTP'
import { AuthProvider } from '../context/AuthContext'
const Stack = createNativeStackNavigator()

const PublicNavigation = () => {
return(
  <AuthProvider>
    
    </AuthProvider>
  )
}

export default PublicNavigation