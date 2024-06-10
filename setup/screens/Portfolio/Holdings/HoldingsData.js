import styled from "styled-components";
import { Divider } from "react-native-paper";
import React from 'react'
import HoldingsCard from "../../../components/HoldingsCard";
import data from '../../../../utils/data/index.json'
import HoldingsBottomSheet from "./HoldingsBottomSheet";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cash from "./HoldingsType/Cash";
import Debt from "./HoldingsType/Debt";
import Equity from "./HoldingsType/Equity";
import { TabBar } from "react-native-tab-view";
const Tab = createMaterialTopTabNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import HoldingsDetail from "../../../components/HoldingsDetail";

const Stack = createStackNavigator()

const HoldingsData = ({navigation}) => {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          paddingTop: 0,
          marginTop: 0
        },
        // tabBarLabelStyle: {padding: }
        tabBarLabelStyle: {
          margin: 0
        }
      }}
      >
      <Tab.Screen name="Cash" component={Cash} options={{headerShown: false}}/>
      <Tab.Screen name="Debt" component={Debt} options={{headerShown: false}} />
      <Tab.Screen name="Equity" component={Equity} options={{headerShown: false}}/>
      </Tab.Navigator>
  );
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #efefef;
`
const TitleContainer = styled.View`
    padding: 10px 0;
    width: 100%;
    alignItems: center;
    backgroundColor: #667691
`
// const Equity = styled.Text`
//     fontSize: 16px;
//     textAlign: center;
//     width: 100%;
//     color: #fff;
//     fontWeight: 500
// `
const Table = styled.ScrollView`
    width: 100%;
    backgroundColor: #fff
`
const Header = styled.View`
width: 100%;
backgroundColor: #fff ;
   flexDirection: row;

`
const TableHead = styled.View`
    flexDirection: row;
`
const Column = styled.View`
    width: 100%;
    flexDirection: row;
`
const Row = styled.View`
    padding: 14px 10px;
    width: 33%;
    flexDirection: row;
`
const SchemeTitle = styled.Text`
    fontSize: 15px;
    fontWeight: 400;
`
const HeadTitle = styled.Text`;
    fontSize: 16px;
    textAlign: left;
    fontWeight: 400;
`
const HeadColumn = styled.View`
    padding: 10px 10px;
    width: 33%;
    writingDirection: rtl
`
const GainLoss = styled.Text`
    textAlign: center;
    fontSize: 15px;
    color: green;
`
const Value = styled.Text`
    fontSize: 15px;
    fontWeight: 500
`


export default HoldingsData