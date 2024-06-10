import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import whitelogo from '../../../assets/brands/white-logo.png'
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, View, Linking} from 'react-native';
import BottomSheetModal from './LandingBottomSheet';
import { horizontalScale, verticalScale, moderateScale } from '../../themes/metrics'
import routes from '../../router-manager/routes';
const Landing = ({navigation}) => {  
  const openURI = async () => {
    const url = "https://www.moneyfront.in/sign-up.aspx"
    const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
    if (supported) {
    await Linking.openURL(url); // It will open the URL on browser.
    } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }
  return (
    <View style={{flex: 1}}>
      <LinearGradient
      useAngle
      angle={45}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
      colors={['#3d6ea8','#289cc3','#23afd2']}
      >
        <Logo source={whitelogo} alt="moneyfront logo" />
        <Header>
          Welcome to Moneyfront.
        </Header>
        <Button
          style={{marginTop: 70, width: 300, padding: 5, borderRadius: 40}}
          buttonColor="#fff"
          mode="contained"
          onPress={openURI}
          >
          <BtnText style= {{color: '#6e9656'}}>Create Account</BtnText>
        </Button>
        <Button
          textColor="#fff"
          mode="outlined"
          style={{borderColor: '#fff', marginTop: 20, width: 300, padding: 5, borderRadius: 40}}
          onPress={() => navigation.navigate(routes.LOGIN)
          }>
          <BtnText>Log In</BtnText>
        </Button>
        <Condition>
        Mutual fund investments are subject to market risks. Please read all Scheme Information Documents (SID) /Key Information Memorandum (KIM) and addendums issued thereto from time to time information and other related documents carefully before investing. 
        </Condition>
       
        </LinearGradient>
      <BottomSheetModal/>
    </View>
  );
};

const Header = styled.Text`
  fontSize: ${moderateScale(22)};
  color: #fff;
  fontWeight: bold;
  alignSelf: center;
  marginTop: ${verticalScale(25)};
  letter-Spacing: 1px;
`;
const Logo = styled.Image`
  width: ${horizontalScale(60)};
  height: ${verticalScale(60)};
  alignSelf: center;
  marginTop: ${verticalScale(50)};
`;

const BtnText = styled.Text`
  fontSize: ${moderateScale(18)};
`

const Condition = styled.Text`
  fontSize: ${moderateScale(13)};
  color: #fff;
  marginTop: ${verticalScale(200)};
  textAlign: center
`;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding: horizontalScale(10)
  }
})

export default Landing;
