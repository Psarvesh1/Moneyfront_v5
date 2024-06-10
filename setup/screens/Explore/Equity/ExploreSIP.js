import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { PaperProvider, Button, Divider } from 'react-native-paper';
import { View, TextInput, Text } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../../themes/metrics'
import DPicker from '../../../components/DPicker';
import Icon from 'react-native-vector-icons/FontAwesome'
import Picker from '../../../components/Picker';
const ExploreSIP = () => {
  const folio = [
    {
        label: 'New Folio',
        value: 'New Folio'
    }
  ]
  const duration = [
    {
        label: '13',
        value: '13'
    },
    {
        label: '14',
        value: '14'
    },
    {
        label: '15',
        value: '15'
    }
  ]
  const [months, setMonths] = useState(duration[0].value)
  const [folioName, setFolioName] = useState(folio[0].value)
  const [sDate, setSDate] = useState()
  const getFolio = (data) => {
    console.log('coming from picker' + data)
    setFolioName(data)
  }
  const getDuration = (data) => {
    console.log(data)    
    setMonths(data)
  }
  const giveDate = (data) => {
    console.log(data)
    const day = data.getDate()
    const month = data.getMonth() + 1
    const year = data.getFullYear()
    const fullDate = day +" "+ month + " "+ year;
    setSDate(fullDate)
  }
  useEffect(() => {
    console.log(sDate)
  },[sDate])
  return (
    <View>
    <Container>
      <PaperProvider>
        <TitleContainer>
          <Title>
            Axis Global Equity Alpha Fund of Fund Growth Direct Plan
          </Title>
        </TitleContainer>
        <InputContainer>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="rupee"
              size={22}
              style={{alignSelf: 'center', marginLeft: 10}}
            />
            <TextInput
              style={{fontSize: moderateScale(22), marginLeft: horizontalScale(10), fontWeight: 'bold'}}
              placeholder="Enter Amount"
              placeholderTextColor="#899499"
              inputMode="numeric"
            />
          </View>

          <View style={{alignSelf: 'center', marginRight: horizontalScale(4)}}>
            <Text style={{fontWeight: 'bold', fontSize: moderateScale(12), color: '#899499'}}>
              Min Amt:
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: moderateScale(12), color: '#899499'}}>
              500
            </Text>
          </View>
        </InputContainer>
        <Dropdown>
          <Text style={{fontSize: moderateScale(17), color: '#807d7d'}}>Folio</Text>
          <Picker 
          placeholder={{label: 'Select Folio', value: '12'}} 
          data={folio} 
          setState={getFolio}
          align= {'center'}
          />
        </Dropdown>
        <DateContainer>
          <Label>Start Date</Label>
          <DPicker giveDate={giveDate}/>
          <View style={{
            flexDirection: "row", 
            width: '80%',
            justifyContent: 'space-between',
            marginTop: verticalScale(10)
            }}>
            <Label>Duration (in months)</Label>
            <Label>Frequency</Label>
          </View>
          <View style={{width: '50%'}}>
            <Picker 
            placeholder={{label: '12', value: null}} 
            data={duration}
            setState={getDuration}
            />
            </View>
        </DateContainer>
        <View style={{marginTop: verticalScale(20)}}>
          <Row>
            <Column>
              <Label>NAV Rs.</Label>
              <Value>16.0143</Value>
            </Column>
            <Column style={{marginRight: horizontalScale(50)}}>
              <Label>NAV Date</Label>
              <Value>23 Feb 2024</Value>
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Type</Label>
              <Value>Tax Saver</Value>
            </Column>
            <Column style={{marginRight: horizontalScale(90)}}>
              <Label>ExitLoad</Label>
              <Value>Nil</Value>
            </Column>
          </Row>
          <Divider />

          <Divider />
        </View>
        <View style={{backgroundColor: '#fff', padding: horizontalScale(10), height: verticalScale(200)}}>
          <Button
            mode="contained"
            style={{
              borderRadius: 5,
              width: '80%',
              padding: 2,
              shadowColor: '#171717',
              shadowOffset: {width: -2, height: 3},
              shadowOpacity: 0.2,
              shadowRadius: 3,
              alignSelf: 'center',
              marginTop: verticalScale(40),
            }}
            labelStyle={{fontSize: 18}}
            buttonColor="#649e3e"
            onPress={() => navigation.navigate('mandate_form')}>
            Add to Basket
          </Button>
        </View>
      </PaperProvider>
    </Container>
    </View>
  );
}

const Container = styled.ScrollView`
`

const TitleContainer = styled.View`
    alignItems: center;
    padding: 16px;
    backgroundColor: #627593;
`
const Title = styled.Text`
    fontSize: ${moderateScale(18)};
    fontWeight: 400;
    color: #fff;
    textAlign: center;
`
const InputContainer = styled.View`
    backgroundColor: #fff;
    padding: 20px 4px;
    flexDirection: row;
    marginTop: ${verticalScale(10)};
    justifyContent: space-between;
`

const Dropdown = styled.View`
    backgroundColor: #fff;
    padding: 12px 10px;
    marginTop: ${verticalScale(10)};
`

const Row = styled.View`
    padding: 10px 10px;
    flexDirection: row;
    justifyContent: space-between;
    backgroundColor: #fff;
`

const Column = styled.View`
    height: ${verticalScale(50)};
    justifyContent: space-between
`

const Label = styled.Text`
    fontSize: ${moderateScale(17)};
    color: #899499;
    alignSelf: flex-start
`
const Value = styled.Text`
    fontSize: ${moderateScale(18)};
    alignSelf: flex-start
`
const DateContainer = styled.View`
    marginTop: 10px;
    padding: 10px;
    backgroundColor: #fff;
`

export default ExploreSIP