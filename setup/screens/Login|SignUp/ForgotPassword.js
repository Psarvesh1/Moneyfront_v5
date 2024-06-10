import React, {useState} from 'react';
import { Text, TextInput, Button} from 'react-native-paper';
import { StyleSheet} from 'react-native';
import styled from 'styled-components';
import forgot from '../../../assets/images/forget_password.png';

const ForgotPassword = ({navigation}) => {
  const {email, setEmail} = useState('');
  return (
    <Container>
      <IconContainer>
        <LockIcon resizeMode="contain" source={forgot} />
      </IconContainer>
      <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 30}}>
        Forgot Password?
      </Text>
      <Text style={{fontSize: 20, fontWeight: 400, marginTop: 10}}>
        Enter email to receive OTP
      </Text>
      <TextInput
        theme={{colors: {placeholder: 'blue'}}}
        label='Email Address'
        placeholder="enter your email"
        left={<TextInput.Icon icon="email-outline" color='grey'/>}
        style={{width: '90%', marginTop: 30, backgroundColor: 'transparent'}}
        activeUnderlineColor='#3c94b0'
        underlineStyle={{borderColor: '#000'}}
        onChange={(email)=> setEmail('email')}
      />
      <Resend>Resend</Resend>
      <Button
        style={{
          marginTop: 20,
          width: '100%',
          padding: 5,
          borderRadius: 5,
          backgroundColor: '#649e3e',
        }}
        buttonColor="#fff"
        mode="contained"
        onPress={() => navigation.navigate('VerifyOTP')}>
        <BtnText>Send OTP</BtnText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`;
const IconContainer = styled.View`
  marginTop: 100px;
  width: 100%;
  float: left;
`;

const LockIcon = styled.Image`
  margin: 0 auto;
  height: 80px;
`;

const Resend = styled.Text`
  align-self: flex-end;
  margin-top: 15px;
  font-size: 16px;
  color: #3c94b0;
`;
const BtnText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
  },
});
export default ForgotPassword;
