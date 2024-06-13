import React, {useContext, useEffect, useState} from 'react'
import SnapCard from './SnapCard';
import styled from 'styled-components'
import { View, Text, SafeAreaView } from "react-native";
import data from '../../../../utils/data/index.json'
import PieChart from 'react-native-pie-chart'
import AuthContext from '../../../context/AuthContext';
import { snapshotApi } from '../../../utils/api';
import {ActivityIndicator, StyleSheet} from 'react-native';
import SnapNoData from './SnapNoData';
import UserContext from '../../../context/UserContext';

const SnapData = () => {
  const widthAndHeight = 190
  
  let { id, sessionId, authToken } = useContext(AuthContext)
  let { clientActualPortfolio,
    clientPortfolio,
    clientSuggestedPortfolio,
    setClientPortfolio,
    setClientActualPortfolio,
    setClientSuggestedPortfolio } = useContext(UserContext)

  const [hasInvestment, setHasInvestment] = useState(false)
  const [pie, setPie] = useState([])
  const [flag, setFlag] = useState(false)
  const [sliceColor, setSliceColor] = useState(null)
  const [pieData, setPieData] = useState(null)

  const fetchData = async () => {
    try {
      const data = await snapshotApi({ id, sessionId, authToken })
      console.error(data.ClientPortfolio)
      {
        setClientPortfolio(data.ClientPortfolio)
        setClientActualPortfolio(data.ClientActualPortfolio.Actual)
        setClientSuggestedPortfolio(data.ClientSuggestedPortfolio)
        setPie(data.ClientActualPortfolio.Actual)
        setHasInvestment(true)
        setFlag(true)
        console.log(data.ClientActualPortfolio.Actual)
      }
    } catch (err) {
      console.log(err)
    }
  }
  function roundNumbers(array) {

    // Find the lowest number and round it to the nearest whole value
    let lowestIndex = 0;
    let lowest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < lowest) {
        lowest = array[i];
        lowestIndex = i;
      }
    }
    array[lowestIndex] = Math.round(lowest);

    // Find the highest number and remove the decimals
    let highestIndex = 0;
    let highest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > highest) {
        highest = array[i];
        highestIndex = i;
      }
    }
    array[highestIndex] = Math.trunc(highest);

    // Round all numbers in the array to the nearest whole value
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.round(array[i]);
    }

    return array;
  }

  useEffect(() => {
    if (clientActualPortfolio === null) {
      fetchData()
    }else{
      loadPie()
    }
  }, [])

  const loadPie = () => {
    const arr1 = ['Equity', 'Debt', 'Cash']
    const result = clientActualPortfolio.filter(item => arr1.includes(item.AssetType));
    console.error(result)
    let i;
    let color = []
    let series = []
    for (i = 0; i < clientActualPortfolio.length; i++) {
      if (result[i].AssetType === 'Equity') {
        color.push('#00688e')
        series.push(result[i].AllocationPercentage)
      } else if (result[i].AssetType === 'Debt') {
        color.push('#ff7300')
        series.push(result[i].AllocationPercentage)
      } else if (result[i].AssetType === 'Cash') {
        color.push('#1aaa2f')
        series.push(result[i].AllocationPercentage)
      }
    }
    console.log(series)

    let roundedArray = roundNumbers(series)

    setPieData(roundedArray)
    setSliceColor(color)

  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };
  const Snapshot = () => {
    return (
      <Container showsVerticalScrollIndicator={false}>
        <Title>Good Afternoon, Ketan!</Title>
        <Title style={{ marginTop: 10, marginBottom: 30 }}>Account #489050</Title>

        <SnapCard
          first_title='Amount Invested'
          first_value={clientPortfolio.AmountInvested}
          second_title='Current Value'
          second_value={clientPortfolio.CurrentValue}
          title='Overall - Total'
          flag={true}
        />
        <SnapCard
          first_title={`Today's Gain`}
          first_value={`${clientPortfolio.DaysGainPercentage.toString().replace(/-/g, "")} %`}
          second_title={`Today's Gain AMT`}
          second_value={clientPortfolio.DaysGainValue.toString().replace(/-/g, "")}
          title={`Today's Change`}
          flag={false}
        />
        <SnapCard
          first_title='Realised  Gain/Loss'
          first_value={clientPortfolio.RealisedGainLoss}
          second_title='Unrealised  Gain/Loss'
          second_value={numberWithCommas(clientPortfolio.UnRealisedGainLoss)}
          title='Gain/Loss'
          flag={false}
        />
        <SnapCard
          first_title='Dividend Re-invested'
          first_value={clientPortfolio.DividendReinvest}
          second_title='Dividend Paid Out'
          second_value={clientPortfolio.DividendPaidOut}
          title='Dividends'
          flag={false}
        />
        <SnapCard
          first_title='Absolute Return'
          first_value={`${clientPortfolio.AbsoluteReturn} %`}
          second_title='Annualized Return'
          second_value={`${clientPortfolio.AnnualisedReturn} %`}
          title='Returns'
          flag={false}
        />
        <SnapCard
          first_title='Annualized Savings'
          first_value={`Rs. ${clientPortfolio.AbsoluteReturn}`}
          second_title='Cumulative Savings '
          second_value={`Rs. ${clientPortfolio.AnnualisedReturn}`}
          title='Savings'
          flag={false}
        />
        <Profile>
          <View style={{ backgroundColor: '#8392ab', padding: 12 }}>
            <Head>Profile Allocation</Head>
          </View>
          
          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
          {sliceColor && <PieChart
            widthAndHeight={widthAndHeight}
            series={pieData}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#fff'}
            style={{ alignSelf: 'center', marginTop: 20, marginLeft: 30, width: 300,
              height: 300, }}

          />}
            <View style={{ flexDirection: 'column' , marginLeft: 30}}>
              {sliceColor &&
                sliceColor.map((item) => (
                  <Legend style={{ borderRadius: 10, backgroundColor: item, marginTop: 10 }} />
                ))}
            </View>
            <View style={{ flexDirection: 'column' }}>
              {clientActualPortfolio && clientActualPortfolio.map((item) => (
                <LegendContainer>
                  <Text style={{ textAlign: 'center', marginLeft: 5, marginTop: 10 }}>{item.AssetType} : {item.AllocationPercentage}</Text>
                </LegendContainer>
              ))}
            </View>
          </View>
          <MetaContainer>
            <Meta>Recommended:</Meta>
            {clientSuggestedPortfolio && clientSuggestedPortfolio.Suggested.map((item) => (
              <>
                <Meta> {item.AllocationPercentage} %</Meta>
                <Meta> {item.AssetType} |</Meta>
              </>
            ))}
          </MetaContainer>
          <View
            style={{ flexDirection: 'row', marginBottom: 30, alignSelf: 'center' }}>
            <Info>Risk Profile :</Info>
            <Info style={{ color: '#0d6da3' }}> Aggressive</Info>
          </View>
        </Profile>
      </Container>
    )
  }
  if (clientActualPortfolio && clientActualPortfolio !== null) {
    return <Snapshot />
  } else if (clientActualPortfolio && clientActualPortfolio === null) {
    return <SnapNoData />
  } else {
    return <ActivityIndicatorElement />
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

const Container = styled.ScrollView`
    backgroundColor: #fff;
`

const Title = styled.Text`
    fontSize: 22px;
    marginTop: 30px;
    textAlign: center;
    color: #05445E;
`

const Legend = styled.View`
  width: 20;
  height: 20;
`

const LegendContainer = styled.View`
  width: 120;
  alignSelf: center;
  flexDirection: row;
  marginTop: 2px;
  marginBottom: 2px;
  alignSelf: center;
`

const Profile = styled.View`
  flexDirection: column;
  height: 400px;
`
const Head = styled.Text`
  fontSize: 18px;
  textAlign: center;
  alignSelf: center;
  color: white;
`
const Meta = styled.Text`
  fontSize: 14px;
  textAlign: center;
`
const MetaContainer = styled.View`
  marginTop: 20px;
  paddingLeft: 20px;
  paddingRight: 20px;
  flexDirection: row;
  justifyContent: center;
`
const Info = styled.Text`
  fontSize: 14px;
  marginTop: 10px;
`

export default SnapData