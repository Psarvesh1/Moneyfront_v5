import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-paper'
import {StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { verticalScale, moderateScale, horizontalScale } from '../themes/metrics'
const TransactCard = ({title, units, market_value}) => {
    const navigation = useNavigation()
  return (
    <Container>
      <TitleView>
        <Title>{title}</Title>
      </TitleView>
      <OptionView>
        <FirstOption>
          <Box>
            <Name>{units}</Name>
            <Meta>Units</Meta>
          </Box>
          <Box>
            <Name>{market_value}</Name>
            <Meta>Market Value</Meta>
          </Box>
        </FirstOption>
        <Button
          mode="outlined"
          style={{
            borderRadius: 5,
            borderColor: '#2d9be6',
            shadowColor: '#171717',
            padding: 6,
            paddingLeft: horizontalScale(20),
            paddingRight: horizontalScale(20),
            shadowOffset: {width: -2, height: 3},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          labelStyle={[
            styles.btn,
            {
              fontSize: moderateScale(16),
              color: '#2d9be6',
              marginHorizontal: 0,
              marginVertical: 0,
            },
          ]}
          onPress={() => navigation.navigate('Results')}>
          Buy
        </Button>
      </OptionView>
    </Container>
  );
}

const styles = StyleSheet.create({
    btn: {
        padding: '20px 10px'
    }
})

const Container = styled.View`
    flex:1;
    marginBottom: ${verticalScale(30)};
`
const TitleView = styled.View`
    backgroundColor: #627593;
    padding: 10px 10px;
    borderTopLeftRadius: 10px;
    borderTopRightRadius: 10px;
`
const Title = styled.Text`
    color: #fff;
    fontSize: ${moderateScale(18)};
`
const FirstOption = styled.View`
    width: 60%;
    flexDirection: row;
    justifyContent: space-between;
`
const OptionView = styled.View`
    backgroundColor: #fff;
    borderBottomLeftRadius: 10px;
    borderBottomRightRadius: 10px;
    padding: 10px 10px;
    flexDirection: row;
    justifyContent: space-between;
`
const Box = styled.View`
    flexDirection: column;
`

const Name = styled.Text`
    fontSize: ${moderateScale(16)};
    fontWeight: 500;
`
const Meta = styled.Text`
    color: #98a2a9;
    fontSize: ${moderateScale(16)};
    marginTop: ${verticalScale(5)};
`

export default TransactCard