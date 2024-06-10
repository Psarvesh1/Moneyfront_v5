import React from 'react'
import routes from './routes'
import Landing from '../screens/Landing/Landing'
import SignIn from '../screens/Login|SignUp/SignIn'
import ForgotPassword from '../screens/Login|SignUp/ForgotPassword'
import VerifyOTP from '../screens/Login|SignUp/VerifyOTP'

const MainNavigation = (Stack) => {
  return (
      <>
      <Stack.Screen name={routes.Landing} component={Landing} options={{
        headerShown: false
      }} />
      <Stack.Screen name={routes.LOGIN} component={SignIn} options={{
        headerShown: false
      }} />
      <Stack.Screen name={routes.VERIFY_OTP} component={VerifyOTP} options={{
        headerShown: false
      }} />
      <Stack.Screen
        name={routes.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{ headerShown: true, headerTitle: '', headerBackTitle: 'Back', headerTintColor: '#068015' }}
      />
      </>
  )
}
export default MainNavigation
