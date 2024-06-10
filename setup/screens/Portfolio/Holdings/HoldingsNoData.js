import styled from "styled-components";
import { Button } from "react-native-paper";
import React from 'react'
import {StyleSheet} from 'react-native'
const HoldingsNoData = () => {
  return (
    <Container>
      <Invest>There are no investments on your profile currently</Invest>
      <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '90%',
          marginTop: 40,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}
        labelStyle={{fontSize: 18}}
        buttonColor="#649e3e"
        onPress={() => console.log('Pressed')}>
        Start Investing Now
      </Button>
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    backgroundColor: #efefef;
`
const Invest = styled.Text`
    fontSize: 20px;
    marginTop: 30px;
    textAlign: center;
    width: 80%;
`

export default HoldingsNoData