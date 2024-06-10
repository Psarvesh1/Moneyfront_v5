import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, verticalScale } from '../../../themes/metrics';
import routes from '../../../router-manager/routes';
const Approach = () => {
    const navigation = useNavigation()
    const [sliderValue, setSliderValue] = useState()
    console.log(sliderValue)
  return (
    <Container>
      <Title>Investment Approach</Title>
      <Meta>On a scale of 1-5, how would you describe your approach to investment?</Meta>
      <SliderContainer>
        <TitleContainer>
          <SliderText>Conservative</SliderText>
          <SliderText>Aggressive</SliderText>
        </TitleContainer>
        <Slider
          style={{width: '100%', height: verticalScale(40), marginTop: verticalScale(10)}}
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#649e3e"
          maximumTrackTintColor="#a9a9a9"
          inverted={false}
          value={sliderValue}
          step={1}
          onValueChange={(value) =>setSliderValue(value)}
        />
        <SliderValue>
            <Value>1</Value>
            <Value>2</Value>
            <Value>3</Value>
            <Value>4</Value>
            <Value>5</Value>

        </SliderValue>
      </SliderContainer>
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '100%',
          alignSelf: 'center',
          padding: 0,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: verticalScale(200),
        }}
        labelStyle={{fontSize: moderateScale(18)}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate(routes.Risk_Result)}>
        Next
      </Button>
    </Container>
  );
};

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 30px 14px;
    justifyContent: 'center'
`

const Title = styled.Text`
    fontSize: ${moderateScale(20)};
    fontWeight: 600;
    
`
const Meta = styled.Text`
    fontSize: ${moderateScale(18)};
    marginTop: ${verticalScale(16)};
`
const SliderContainer = styled.View`
    marginTop: ${verticalScale(100)};
    width: 90%;
    alignContent: center;
    alignSelf: center;
`
const TitleContainer = styled.View`
    justifyContent: space-between;
    width: 100%;
    flexDirection: row;
`
const SliderText = styled.Text`
    fontSize: ${moderateScale(15)};
`
const SliderValue = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    width: 92%;
    alignSelf:center;
`

const Value = styled.Text`
    fontSize: ${moderateScale(16)};
    fontWeight: 600;
`

export default Approach