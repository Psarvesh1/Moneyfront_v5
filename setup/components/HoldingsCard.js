import styled from "styled-components";
import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useContext } from 'react'
import { View, Text } from "react-native";
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import routes from "../router-manager/routes";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../context/AuthContext";

const HoldingsCard = ({SchemeName, AssetType, CATEGORY, Risk, CurrentValue, InvestedAmount, item}) => {

  let {isAuth} = useContext(AuthContext)
  // console.log(item)
  const navigation = useNavigation()
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routes.HoldingsDetail, {detail: item})}>
        <Container style={{shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3}}>
          <SchemeContainer style={{width: '100%'}}>
          <View style= {{width: '90%'}}>
          <Scheme>{SchemeName}</Scheme>
          </View>
          <View>
          <Icon name='angle-right' size={22} style={{color: 'green'}} />
          </View>
          </SchemeContainer>
          <TypeContainer style={{width: "70%"}}>
            <Type>
            <TypeText>
              {AssetType}
            </TypeText>
            </Type>
            <Type>
            <TypeText>
              {CATEGORY}
            </TypeText>
            </Type>
            <Type>
            <TypeText>
              {Risk}
            </TypeText>
            </Type>
          </TypeContainer>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: '100%', padding: 5}}>
            <InfoContainer style={{width: '45%'}}>
              <InfoTitle>
                Current Value
              </InfoTitle>
              <View style={{flexDirection: "row", alignItems :'center'}}>
              <InfoValue>
                ₹ {CurrentValue}
              </InfoValue>
              {/* <Icon name='caret-up' size={15} style={{marginLeft: 4, color: 'green'}}/> */}
              </View>
            </InfoContainer>
            <InfoContainer style={{width: '45%'}}>
              <InfoTitle>
                Invested Amount
              </InfoTitle>
              <View style={{flexDirection: "row", alignItems :'center'}}>
              <InfoValue>
                ₹ {InvestedAmount}
              </InfoValue>
              {/* <Icon name='caret-up' size={15} style={{marginLeft: 4, color: 'green'}}/> */}
              </View>
            </InfoContainer>
          </View>
        </Container>
        </TouchableOpacity>
    </>
  );
}


const Container = styled.View`
  marginTop: 20px;
  padding: 10px 5px;
  backgroundColor: #fff;
  borderRadius: 5px;
`
const SchemeContainer = styled.View`
  flexDirection: row;
  justifyContent: space-around;
`
const Scheme = styled.Text`
  fontSize: 16px;
  fontWeight: 500;
`
const TypeContainer = styled.View`
  flexDirection: row;
  marginTop: 5px;
  padding: 5px;
  justifyContent: space-between;
`
const Type = styled.View`
  padding: 5px 10px;
  borderRadius: 10px;
  backgroundColor: #f1f5fc;
  flexDirection: row;
`
const TypeText = styled.Text`
  fontWeight: 200
`
const InfoContainer = styled.View`
  flexDirection: column;
  padding: 10px;
  backgroundColor: #f8fafe;
  borderRadius: 10px;
`
const InfoTitle = styled.Text`
  fontSize: 14px;
`
const InfoValue = styled.Text`
  fontSize: 14px;
  marginTop: 5px;
  color: green
`


export default HoldingsCard