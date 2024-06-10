import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import DPicker from '../../../components/DPicker'
import Collapsible from 'react-native-collapsible';
import AccordionView from '../../../components/Accordion';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import SummaryCard from '../../../components/Collapsible/SummaryCard';
import { InvestedCard } from '../../../components/Collapsible/InvestedCard';
import { getPortfolioSummary } from '../../../utils/api';
import AuthContext from '../../../context/AuthContext';
import UserContext from '../../../context/UserContext';
import DatePicker from 'react-native-date-picker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const PortfolioSummary = () => {

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [freshDate, setFreshDate] = useState()
  let { id, sessionId, authToken } = useContext(AuthContext)

  let { portfolioSummary,
    setPortfolioSummary,
    portfolioTransactions,
    setPortfolioTransactions } = useContext(UserContext)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  const fetchData = async () => {
    setFlag(false)
    console.error('ran')
    day = date.getDate()
    month = date.getMonth() + 1
    year = date.getFullYear()
    let formatedMonth = month < 10 ? `0${month}` : month;
    let formatedDay = day < 10 ? `0${day}` : day;
    let newDate = `${year}-${formatedMonth}-${formatedDay}`;
    setFreshDate(newDate)

    try {
      const data = await getPortfolioSummary({id, sessionId, newDate})
      let transact = data.Transactions
      let summaryData = data.Summary
      if(transact.length!== null && summaryData.length !== null){
          setPortfolioSummary(summaryData)
          setPortfolioTransactions(transact)
          setFlag(true)
        }else{
          setPortfolioSummary(null)
          setTransactions(null)
        }
    } catch (err) {
      console.log(err)
    }
  }

  const changeDate = async (date) => {
    setOpen(false)
    let d = date.getDate()
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let formatedMonth = m < 10 ? `0${m}` : m;
    let formatedDay = d < 10 ? `0${d}` : d;
    const freshDate = `${y}-${formatedMonth}-${formatedDay}`;
    setFreshDate(freshDate)
    console.log()
    // console.log(date)
    setDate(date)
        console.log(date)
    await fetchData()
  }
  useEffect(() => {
      fetchData()

  }, [])

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };

  const fullDate = () => (
    <View style={{ flexDirection: 'row' }}>
      {day < 10 ? <InputText>0{day}-</InputText> : <InputText>{day}-</InputText>}
      {month < 10 ? <InputText>0{month}-</InputText> : <InputText>{month}-</InputText>}
      <InputText>{year}</InputText>
    </View>
  )

  const OnLoad = () => {
    if (portfolioTransactions === null && transactions.length !== 0) {
    return <Text>Data not found</Text>
    } else {
    if (portfolioTransactions && flag) {
      return <SummaryData />
    } else {
      return <ActivityIndicatorElement />
    }
    }
  }

  const PortfolioSummary = () => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
            <Container>
            <TouchableOpacity onPress={() => setOpen(true)} style={[styles.datePicker]}>
            <View>
              <Text style={styles.placeholder}>View Portfolio As On:</Text>
              {fullDate()}
            </View>
            <View>
              <Icon name='calendar-month-outline' size={30} color='#0047AB' />
            </View>
          </TouchableOpacity>
          <DatePicker
            modal
            mode='date'
            open={open}
            date={date}
            onConfirm={(date)=> changeDate(date)}
            onCancel={() => {
              setOpen(false)
            }}
            locale='en-GB'
            // onDateChange={(newDate) => console.error(newDate)}
          />
          {OnLoad()}
          </Container>
      </SafeAreaView>
    )
  }
  const SummaryData = () => {
    return(
      <>
      {portfolioSummary ? <SummaryCard
            InvestedAmount={portfolioSummary[0].InvestedAmount}
            GainLoss={portfolioSummary[0].UnRealisedGainLoss}
            AnnualizedReturn={portfolioSummary[0].XIRR}
            MarketValue={portfolioSummary[0].PresentValue}
            AbsoluteReturn={portfolioSummary[0].AbsoluteReturn}
            WeightedAvgDays={portfolioSummary[0].WeightedAvgDays}
      />: null}
      {
        portfolioTransactions ? <FlatList
        style={{paddingBottom: 200}}
        data={portfolioTransactions}
        ListEmptyComponent={<Text>No Data</Text>}
        renderItem={({ item }) =>
          <InvestedCard
            Scheme={item.Scheme}
            TotalAmount={item.TotalAmount}
            InvestedAmount={item.InvestedAmount}
            RedeemedAmount={item.RedeemedAmount}
            PresentUnits={item.PresentUnits}
            AvgPrice={item.AvgPrice}
            PresentValue={item.PresentValue}
            UnRealisedGainLoss={item.UnRealisedGainLoss}
            RealisedGainLoss={item.RealisedGainLoss}
            XIRR={item.XIRR}
            AbsoluteReturn={item.AbsoluteReturn}
            WeightedAvgDays={item.WeightedAvgDays}
          />
        }
        keyExtractor={item => item.Scheme}
      /> : null
      }
      </>
    )
  }
  // if (portfolioTransactions === null && transactions.length !== 0) {
  //   return <></>
  // } else {
  //   if (portfolioTransactions) {
  //     return <SummaryData />
  //   } else {
  //     return <ActivityIndicatorElement />
  //   }
  // }
  return <PortfolioSummary />
}

const Container = styled.View`
    padding: 20px;
    paddingBottom: 200px;
`
const InputText = styled.Text`
    fontSize: 14px;
    fontWeight: 500;
`

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
    datePicker: {
      padding: 10,
      backgroundColor: 'transparent',
      borderRadius: 5,
      width: '100%',
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6,
      borderColor: '#0047AB',
      borderWidth: 1
  },
  placeholder: {
    fontWeight: '600',
    color: 'gray'
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4
  }

  });
export default PortfolioSummary