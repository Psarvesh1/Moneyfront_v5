import React, {useState, useRef} from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import otpicon from '../../../assets/images/OTP.png';
import OTPTextInput from 'react-native-otp-textinput'

const VerifyOTP = ({navigation}) => {

  const [otp, setOTP] = useState('');

  return (
    <Container>
        <Title>OTP has been send to your registered Phone Number and email address.</Title>
      <IconContainer>
        <LockIcon resizeMode="contain" source={otpicon} />
      </IconContainer>
      <Header>Enter OTP</Header>
      <OTPTextInput 
        defaultValue={otp}
        ref={e => (otpInput = e)} 
        handleTextChange={(otp)=> setOTP(otp)} 
        inputCount={6}
        autoFocus={false}
        containerStyle={{alignSelf: 'center', marginTop: 50}}
        textInputStyle={{borderBottomWidth: 2, width: 30}}
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
        onPress={() => navigation.navigate('BankDetail')}>
        <BtnText>Confirm</BtnText>
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
  marginTop: 30px;
  width: 100%;
  float: left;
`;

const LockIcon = styled.Image`
  margin: 0 auto;
  height: 80px;
`;
const Title = styled.Text`
    marginTop: 70px;
    text-align: center;
    fontSize: 16px;
    width: 80%;
`
const Header = styled.Text`
    fontSize: 22px;
    fontWeight: bold;
    marginTop: 30px;
`
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

export default VerifyOTP;
