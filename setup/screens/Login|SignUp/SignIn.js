import React, {useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import {TextInput, Button, Text} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { horizontalScale, verticalScale, moderateScale } from '../../themes/metrics';
import routes from '../../router-manager/routes';
import 'text-encoding-polyfill'
import AuthContext from '../../context/AuthContext';
import axiosInstance from '../../utils/axiosInstance';
import showError from '../../utils/helperFunctions';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import Encrypt from '../../constant/Encrypt';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [showPassword, setShowPassword] = useState(true);
  const [errors, setErrors] = useState({}); 
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const {generateToken} = useContext(AuthContext)
  const {loginApi} = useContext(AuthContext)
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const validateForm = () => { 
    let errors = {}; 
    const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/
    // Validate email field 
    if (!email) { 
        errors.email = 'Email is required!'; 
        showError(errors.email)
        // setEmail(errors.email)
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
        errors.email = 'Email is invalid!'; 
        showError(errors.email)
        // setEmail(errors.email)
    }
    else if (!password) { 
        errors.password = 'Password is required!'; 
        showError(errors.password)
        // setPassword(errors.password)
    } else if (password.length < 6) { 
        errors.password = 'Password must be at least 6 characters.';
        showError(errors.password)
        // setPassword(errors.password) 
    } else if(!password.match(check)){
      errors.password = 'password should contain '
      showError(errors.password)
    }else{
      setIsFormValid(true)
    }
    // setErrors(errors); 
    // if(errors){
    //   setIsFormValid(false)
    // }else{
    //   setIsFormValid(true)
    // }
}; 

const handleSubmit = async () => {
  await validateForm();
  if(isFormValid) {
      setIsLoading(true)
      const token = await generateToken()
      const [sId, Id, status] = await loginApi({email, password, token})
      console.error(Id)
      if(!sId){
        showError('Invalid Email or Password')
      }
      setIsLoading(false)
      console.error(Id)
    
      const encryptedData = Encrypt(data, process.env.key);
    
      console.error(encryptedData)
      // setIsAuth(true)
      // navigation.navigate(routes.HOME)
  } else { 
      // Form is invalid, display error messages 
      console.log('Form has errors. Please correct them.'); 
  } 
  };
  return (  
    <LinearGradient
      useAngle
      angle={45}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#3d6ea8','#289cc3','#23afd2']}
      style={styles.linearGradient}>
        <FlashMessage 
          position={'top'}
        />
      <Header>“Time is the friend of the wonderful company, the enemy of the mediocre”</Header>
      <HeadMeta>- Warren Buffet</HeadMeta>
      <TextInput
        value={email}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Email Address"
        textColor="#fff"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={[styles.input, styles, {marginTop: 40}]}
      />
      {/* {errors.email ? 
        <ErrorText style={styles.error}>
          {errors.email}
      </ErrorText>: null} */}
      <TextInput
        value={password}
        selectionColor="#fff"
        outlineColor="#FFF"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Password"
        textColor="#fff"
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            icon="eye"
            color="#fff"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={password => setPassword(password)}
        mode="outlined"
        style={[styles.input, styles]}
      />
      {/* {errors.password ? 
        <ErrorText style={styles.error}>
          {errors.password}
      </ErrorText>
      : null } */}
      <Button
        textColor="green"
        mode="outlined"
        style={{
          backgroundColor: '#FFF',
          borderColor: '#FFF',
          marginTop: 20,
          padding: 5,
          borderRadius: 5,
        }}
        onPress={handleSubmit}>
        {isLoading ? <ActivityIndicator size={'small'} color={'green'} />:<BtnText>Log In</BtnText>}
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate(routes.FORGOT_PASSWORD)}>
        <Text style = {{color: '#fff', marginTop: 15, fontWeight: 'bold'}}>Forgot Password?</Text>
      </TouchableOpacity>
      <TextContainer>
      <Text style = {{color: '#fff'}}>
        Are you new to MoneyFront? 
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate(routes.REGISTER)}>
            <Text style = {{color: '#fff', marginLeft: 5, fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </TextContainer>
      
    </LinearGradient>
  );
};
const Container = styled.View`
  flex: 1;
  background: green;
  align-content: center;
  padding: 20px;
`;
const TextContainer = styled.View`
    marginTop: ${verticalScale(20)};
    flex: 1;
    flex-direction: row;
    justify-content: center;
`
const ErrorText = styled.Text`
  color: #fff;
  marginLeft: ${horizontalScale(4)};
  marginTop: ${verticalScale(4)};
`
const Header = styled.Text`
  font-size: ${moderateScale(22)};
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: ${verticalScale(80)};
  letter-spacing: 0.5px;
  text-align: center;
`;
const HeadMeta = styled.Text`
  fontSize: ${moderateScale(18)};
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: ${verticalScale(16)};
  text-align: center;
`
const BtnText = styled.Text`
  font-size: ${moderateScale(18)};
  letter-spacing: 1px;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    background: 'green',
    alignContent: 'center',
    padding: 20,
  },
  input: {
    marginTop: verticalScale(20),
    backgroundColor: 'transparent',
    color: '#fff',
  },
});

export default SignIn;
