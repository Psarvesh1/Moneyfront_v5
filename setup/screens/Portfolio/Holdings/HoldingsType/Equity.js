import React, {useContext} from 'react'
import styled from 'styled-components'
import HoldingsCard from '../../../../components/HoldingsCard'
import { useNavigation } from '@react-navigation/native'
import HoldingsNoData from '../HoldingsNoData'
import UserContext from '../../../../context/UserContext'
import HoldingsBottomSheet from '../HoldingsBottomSheet'
const Equity = () => {
  const navigation = useNavigation()
  let {equityHolding, holdingData, clientHoldingSummary} = useContext(UserContext)
  
  const HoldingData = () => {
    return(
      <Container>
          {equityHolding ? equityHolding.map((item) => (
          <HoldingsCard SchemeName={item.SchemeName} AssetType = {item.AssetType}
            CATEGORY = {item.CATEGORY} Risk = {item.Risk} CurrentValue = {item.MarketValue}
           InvestedAmount = {item.Current_Invested_Amount} item = {item} navigation={navigation}/>
          )) : null
          }
          {
            clientHoldingSummary ? <HoldingsBottomSheet
            MarketValue = {clientHoldingSummary.MarketValue} 
            RealisedGL = {clientHoldingSummary.RealisedGL}
            UnrealisedGL = {clientHoldingSummary.UnrealisedGL}
            DaysGainAmount = {clientHoldingSummary.DaysGainAmount}
            DividendPaidOut = {clientHoldingSummary.DividendPaidOut}
            DividendReinvested = {clientHoldingSummary.DividendReinvested}
            />: null
          }
    </Container>
    )
  }
    if(holdingData === null){
      return <HoldingsNoData/>
    }else {
      return <HoldingData/>
    }
    
}

const Container = styled.View`
    flex: 1;
    padding: 10px 10px;
`

export default Equity