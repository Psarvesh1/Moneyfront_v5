import React, {useContext, useEffect, useState} from 'react'
import { View, SafeAreaView, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import styled from 'styled-components';
import {Button} from 'react-native-paper'
import UserContext from '../../../context/UserContext';
import { getGainLossReport } from '../../../utils/api';
import AuthContext from '../../../context/AuthContext';
import SummaryCard from '../../../components/Collapsible/SummaryCard';
import { GLSummaryCard } from '../../../components/GLSummaryCard';
const GainLossReport = ({navigation}) => {
  let {gainLossTransaction, setGainLossTransaction} = useContext(UserContext)
  let {id, sessionId} = useContext(AuthContext)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedStartDate,setSelectedStartDate] = useState()
  const [selectedEndDate, setSelectedEndDate] = useState()
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false)
  const [gainLossSummary, setGainLossSummary] = useState()
  

  useEffect(() => {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 1);
    setStartDate(currentDate)
    let endDate = new Date()
    endDate.setDate(endDate.getDate() - 1)
    setEndDate(endDate)
  },[])

  const onStartChange = (event, selectedDate) => {
    const day = selectedDate.getDate()
    const month = selectedDate.getMonth() + 1
    const year = selectedDate.getFullYear()
    let formatedMonth = month < 10 ? `0${month}` : month;
    let formatedDay = day < 10 ? `0${day}` : day;
    let newDate = `${year}-${formatedMonth}-${formatedDay}`;
    setSelectedStartDate(newDate)
    console.log(selectedStartDate)
    const currentDate = selectedDate;
    setShow(false);
    setStartDate(currentDate);
  };

  const onEndChange = (event, selectedDate) => {
    const day = selectedDate.getDate()
    const month = selectedDate.getMonth() + 1
    const year = selectedDate.getFullYear()
    let formatedMonth = month < 10 ? `0${month}` : month;
    let formatedDay = day < 10 ? `0${day}` : day;
    let newDate = `${year}-${formatedMonth}-${formatedDay}`;
    setSelectedEndDate(newDate)
    console.log(selectedEndDate)
    const currentDate = selectedDate;
    setShow(false);
    setEndDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleSubmit = async () => {
    setVisible(true)
    try{
      const data = await getGainLossReport({id, sessionId, selectedStartDate, selectedEndDate})
      setGainLossSummary(data.GainLossSummaries)
      setGainLossTransaction(data.GainLossTransactionLists)
      console.log(GainLossSummary)
      setVisible(false)
    }catch(err){
      console.log(err)
      setVisible(false)
    }
  }

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Container>
        <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>Start Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={mode}
          is24Hour={true}
          onChange={onStartChange}
          style={{}}
        />
        </View>
        <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>End Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode={mode}
          is24Hour={true}
          onChange={onEndChange}
          style={{backgroundColor: 'transparent'}}
        />
        </View>
        <Button
        textColor="green"
        mode="outlined"
        style={{
          backgroundColor: '#FFF',
          borderColor: '#FFF',
          marginTop: 20,
          padding: 5,
          borderRadius: 5,
        }}
        onPress={handleSubmit}>
        <BtnText>Get Reports</BtnText>
      </Button>

        {visible ? <ActivityIndicatorElement/> : 
            <FlatList 
              scrollEnabled={true}
              style={{marginBottom: 400}}
              data={gainLossSummary}
              renderItem={({item}) => 
              <View>
              <GLSummaryCard 
              Scheme={item.Scheme_Name}
              TotalAmount={item.Purchase_Amount}
              SellAmount={item.Sell_Amount}
              LTGainLoss = {item.GL_LT_Debt}
              STGainLoss ={item.GL_ST_Debt}
              FolioNo ={item.Folio_Number}
              navigation={navigation}
              />
              </View>
            }
            keyExtractor={item => item.Scheme}
            ListEmptyComponent={<Text>No Data</Text>}
            />
            
        }

      </Container>

    </SafeAreaView>

  )
}

const Container = styled.View`
  padding: 20px;
  alignItems: center;
`
const InputText = styled.Text`
    fontSize: 22px;
    fontWeight: 500;
`
const BtnText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
`;

const ReportContainer = styled.View`

`

const styles = StyleSheet.create({
  dateContainer: {
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
  date: {
    flexDirection: 'row'
  },
  dateTitle: {
    fontSize: 20,
    fontWeight: 600
  },
  activityIndicatorStyle: {
    marginTop: 20
  }
})

export default GainLossReport