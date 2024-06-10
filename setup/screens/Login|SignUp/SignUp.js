import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import {TextInput, Button, Text, Icon} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import { horizontalScale, verticalScale, moderateScale } from '../../themes/metrics';
import routes from '../../router-manager/routes';


const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  let phoneInput = useRef(<PhoneInput />);

  const validateForm = () => {
    let errors = {};
    const passwordRegex =
      password.length >= 8 &&
      !/[A-Z]/.test(password) &&
      /[^a-zA-Z]/.test(password) &&
      /[0-9]/.test(password);
    const check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$*])/;
    // Validate name field
    if (!name) {
      errors.name = 'Name is required!';
      // setName('Name is required')
    }

    // Validate email field
    if (!email) {
      errors.email = 'Email is required!';
      // setEmail(errors.email)
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid!';
      // setEmail(errors.email)
    }

    // Validate password field
    if (!password) {
      errors.password = 'Password is required!';
      // setPassword(errors.password)
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      // setPassword(errors.password)
    } else if (!password.match(check)) {
      errors.password =
        'Please provide a password of minimum 8 characters, containing one character, one special character and a number ';
    }
    if (!phone) {
      errors.phone = 'phone number is required!';
      // setPhone(errors.phone)
    } else if (phone.length < 10) {
      errors.phone = 'Phone number should be valid';
      // setPhone(errors.phone)
    } else if (phone.length > 10) {
      errors.phone = 'Phone number should be valid';
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    validateForm();
    if (isFormValid) {
      navigation.navigate('EmailVerify');
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
    } else {
      // Form is invalid, display error messages
      console.log('Form has errors. Please correct them.');
    }
  };
  return (
    <LinearGradient
      useAngle
      // angle={-45}
      // start={{x: 1, y: 0}}
      // end={{x: 1, y: 0}}
      colors={['#3d6ea8','#289cc3','#23afd2']}
      style={styles.linearGradient}>
      <Header>Sign Up!</Header>
      <TextInput
        value={name}
        selectionColor="#fff"
        outlineColor="#FFF"
        activeOutlineColor="#fff"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Full Name"
        textColor="#fff"
        onChangeText={name => setName(name)}
        mode="outlined"
        style={[styles.input, styles, {marginTop: 40}]}
      />
      {errors.name ? (
        <ErrorText style={styles.error}>{errors.name}</ErrorText>
      ) : null}
      <TextInput
        value={email}
        selectionColor="#fff"
        outlineColor="#FFF"
        activeOutlineColor="#fff"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Email Address"
        textColor="#fff"
        onChangeText={email => setEmail(email)}
        mode="outlined"
        style={[styles.input, styles]}
      />
      {errors.email ? (
        <ErrorText style={styles.error}>{errors.email}</ErrorText>
      ) : null}
      <PhoneInput
        ref={phoneInput}
        defaultValue={phone}
        defaultCode="IN"
        containerStyle={{
          width: '100%',
          backgroundColor: 'transparent',
          border: '2px solid #fff',
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 1,
          marginTop: 20,
          color: '#fff',
        }}
        numberText={{
          color: '#fff',
        }}
        selectionColor="#fff"
        textInputProps={{placeholderTextColor: '#fff'}}
        textContainerStyle={{
          backgroundColor: 'transparent',
          borderRadius: 5,
          borderColor: '#fff',
          borderLeftColor: 'transparent',
          borderLeftWidth: 0,
        }}
        textInputStyle={{
          color: '#fff',
        }}
        codeTextStyle={{color: '#ffffff'}}
        flagButtonStyle={{width: 10, marginLeft: 15}}
        disabled={false}
        disableArrowIcon={true}
        layout="first"
        onChangeText={text => {
          setPhone(text);
        }}
        renderDropdownImage=<Icon
          source="chevron-down"
          color="#fff"
          size={20}
        />
        onChangeFormattedText={text => {
          setFormattedValue(text);
        }}
        withShadow
        autoFocus
      />
      {errors.phone ? (
        <ErrorText style={styles.error}>{errors.phone}</ErrorText>
      ) : null}
      <TextInput
        value={password}
        selectionColor="#fff"
        outlineColor="#FFF"
        activeOutlineColor="#fff"
        theme={{colors: {onSurfaceVariant: 'white'}}}
        placeholder="Password"
        textColor="#fff"
        secureTextEntry={showPassword}
        right={
          <TextInput.Icon
            icon="eye"
            style={{color: '#fff'}}
            color="#fff"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        onChangeText={password => setPassword(password)}
        mode="outlined"
        style={[styles.input, styles]}
      />
      {errors.password ? (
        <ErrorText style={styles.error}>{errors.password}</ErrorText>
      ) : null}
      {/* <ErrorContainer>
      {Object.values(errors).map((error, index) => (
        <ErrorText key={index} style={styles.error}>
          {error}
        </ErrorText>
      ))}
              </ErrorContainer> */}
      <Button
        textColor="#00451E"
        mode="outlined"
        // disabled={!isFormValid}
        // style={[styles.btnStyle, {opacity: isFormValid ? 1 : 0.5 }
        // ]}
        style={styles.btnStyle}
        onPress={()=> navigation.navigate(routes.VERIFY_OTP)}>
        <BtnText>Sign Up</BtnText>
      </Button>
      <TextContainer>
        <Text style={{color: '#fff'}}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
          <Text style={{color: '#fff', marginLeft: 5, fontWeight: 'bold'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </TextContainer>
    </LinearGradient>
  );
};

const TextContainer = styled.View`
  marginTop: ${verticalScale(20)};
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;
const Header = styled.Text`
  font-size: ${moderateScale(22)};
  font-family: 'ARIAL ROUNDED MT BOLD';
  color: #fff;
  marginTop: ${verticalScale(80)};
  letter-spacing: 0.5px;
`;

const BtnText = styled.Text`
  font-size: ${moderateScale(18)};
  letter-spacing: 1px;
  color: #000
`;

const ErrorText = styled.Text`
  color: #fff;
  marginLeft: ${horizontalScale(4)};
  marginTop: ${verticalScale(4)};
`

const styles = StyleSheet.create({
  input: {
    marginTop: verticalScale(20),
    backgroundColor: 'transparent',
    color: '#fff',
  },
  linearGradient: {
    flex: 1,
    background: 'green',
    alignContent: 'center',
    padding: 20,
  },
  textInputStyle: {
    backgroundColor: 'transparent',
  },
  btnStyle: {
    backgroundColor: '#fff',
    color: '#000',
    marginTop: verticalScale(20),
    padding: 5,
    borderRadius: moderateScale(5)
  }
});

export default SignUp;
