import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-paper'
import { verticalScale, moderateScale } from '../../../themes/metrics'
import routes from '../../../router-manager/routes'
const RiskHome = ({navigation}) => {
  return (
    <Container>
        <Title>
            Hello User,
        </Title>
        <Meta>
        Your current risk profile is :
        </Meta>
        <Button
        mode="contained"
        style={{
          borderRadius: moderateScale(5),
          width: '100%',
          padding: 5,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: verticalScale(450)
        }}
        labelStyle={{fontSize: moderateScale(18)}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate(routes.Annual_Income)}>
        Take Retest
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
export default RiskHome