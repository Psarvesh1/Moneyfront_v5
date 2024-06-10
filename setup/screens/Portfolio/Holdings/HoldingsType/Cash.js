import React, {useEffect, useContext, useState} from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import HoldingsCard from '../../../../components/HoldingsCard'
import AuthContext from '../../../../context/AuthContext'
import { holdingsApi } from '../../../../utils/api'
import {ActivityIndicator, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import HoldingsNoData from '../HoldingsNoData'
import UserContext from '../../../../context/UserContext'
import HoldingsBottomSheet from '../HoldingsBottomSheet'
const Cash = () => {
  const navigation = useNavigation()
  let {id, sessionId, authToken} = useContext(AuthContext)
  const [flag, setFlag] = useState(false)
  const [cash, setCash] = useState([])
  const [hasInvestment, setHasInvestment] = useState(false)
  let {setCashHolding, setDebtHolding, setEquityHolding, holdingsData, setHoldingsData, cashHolding, setClientHoldingSummary, clientHoldingSummary} = useContext(UserContext)

  const fetchData = async () => {
      try{
        const data = await holdingsApi({id,sessionId,authToken})
        setHoldingsData(data.ClientHoldingDetails)
        setClientHoldingSummary(data.ClientHoldingSummary[0])
        setFlag(true)
        let i;
        let cashFilter = [];
        let debtFilter = [];
        let equityFilter = [];

        for(i = 0; i < data.ClientHoldingDetails.length; i++){
            if(data.ClientHoldingDetails[i].AssetType === 'Cash'){
              cashFilter.push(data.ClientHoldingDetails[i])
              console.log('I ran')
            }
            if(data.ClientHoldingDetails[i].AssetType === 'Debt'){
              debtFilter.push(data.ClientHoldingDetails[i])
            }
            if(data.ClientHoldingDetails[i].AssetType === 'Equity'){
              equityFilter.push(data.ClientHoldingDetails[i])
            }
        }
        console.log(cashFilter)
        setCashHolding(cashFilter)
        setEquityHolding(equityFilter)
        setDebtHolding(debtFilter)
        setHasInvestment(true)
      }catch(err){
        console.log(err)
      }
  }

  useEffect(()=> {
    fetchData()
  }, [])
  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };
  const HoldingData = () => {
    return(
      <Container>
          {cashHolding ? cashHolding.map((item) => (
          <HoldingsCard SchemeName={item.SchemeName} AssetType = {item.AssetType}
            CATEGORY = {item.CATEGORY} Risk = {item.Risk} CurrentValue = {item.MarketValue}
           InvestedAmount = {item.Current_Invested_Amount} item = {item} navigation={navigation}/>
          )) : null
          }
          <HoldingsBottomSheet 
          MarketValue = {clientHoldingSummary.MarketValue} 
          RealisedGL = {clientHoldingSummary.RealisedGL}
          UnrealisedGL = {clientHoldingSummary.UnrealisedGL}
          DaysGainAmount = {clientHoldingSummary.DaysGainAmount}
          DividendPaidOut = {clientHoldingSummary.DividendPaidOut}
          DividendReinvested = {clientHoldingSummary.DividendReinvested}
          />
    </Container>
    )
  }
    if(cashHolding && cashHolding !== null){
      return <HoldingData/>
    }else if(cashHolding && cashHolding === null){
      return <HoldingsNoData/>
    }else{
      return <ActivityIndicatorElement/>
    }  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

const Container = styled.View`
    flex: 1;
    padding: 10px 10px;
`

export default Cash