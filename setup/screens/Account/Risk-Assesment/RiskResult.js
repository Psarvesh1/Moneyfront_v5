import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { verticalScale, moderateScale } from '../../../themes/metrics'
const RiskResult = () => {
  const navigation = useNavigation()
  return (
    <Container>
        <Title>
            Hello User,
        </Title>
        <Meta>
        Your current risk profile is :
        </Meta>
        <ResultText>
            Moderately Conservative
        </ResultText>
        <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '100%',
          padding: 5,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: verticalScale(200)
        }}
        labelStyle={{fontSize: moderateScale(18)}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('account')}>
        Close
      </Button>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 20px 16px
`
const Title = styled.Text`
    fontSize: ${moderateScale(26)};
    fontWeight: bold;
    marginTop: ${verticalScale(10)};
`
const Meta = styled.Text`
    fontSize: ${moderateScale(16)};
    marginTop: ${verticalScale(10)};
`
const ResultText = styled.Text`
    fontSize: ${moderateScale(25)};
    fontWeight: 700;
    alignSelf: center;
    marginTop: ${verticalScale(200)};
`
export default RiskResult