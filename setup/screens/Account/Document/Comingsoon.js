import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import Coming_soon from '../../../../assets/images/Coming_soon.png';
 
 const Coming_soon=(){
    return(
    <Container>
    <image source={Coming_soon}/>
    <Text>
    We're excited to have you try our Beta Version!
    In the meantime, you can complete your investment by visiting our website at
    </Text>
    <text  onPress={() => Linking.openURL('https://www.moneyfront.in/. ')}/>
    </Container>
 )}
const Container = styled.View`
flex: 1;
width: 100%;
`
export default Coming_soon;