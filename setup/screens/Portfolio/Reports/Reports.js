import React, { useState } from "react"
import styled from "styled-components"
import {SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import DPicker from "../../../components/DPicker"
import { TouchableOpacity } from "react-native-gesture-handler"
import routes from "../../../router-manager/routes"
const Reports = ({navigation}) => {
  const [date, giveDate] = useState()
  return(
    <SafeAreaView style={{flex: 1}}>
    <Container>
      <Title>What types of Reports would you like to receive?</Title>
      <CardContainer>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.Portfolio_Summary)}>
        <ReportCard title='Portfolio Summary' icon='file-document-outline'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.GainLossReport)}>
        <ReportCard title='Gain / Loss Report' icon='timeline'/>
        </TouchableOpacity>
      </CardContainer>
    </Container>
    </SafeAreaView>
  );
}

const ReportCard = ({ title, icon }) => {
  return (
    <Card style={{paddingTop: 20, paddingLeft: 15, paddingRight: 30, paddingBottom: 50}}>
      {
        icon === 'file-document-outline' ? <Icon2 name={icon} size={36} color='#0047AB' /> : <Icon name={icon} size={36} color='#0047AB' />
      }
      <CardTitle>{title}</CardTitle>
    </Card>
  )
}


const Container = styled.View`
  padding: 20px; 
  backgroundColor: #f1f5fd; 
  flex: 1
`
const Title = styled.Text`
  fontSize: 18px;
  fontWeight: 500;
  color: gray;
`
const Card = styled.View`
  borderRadius: 10px;
  backgroundColor: #fff;
  flexDirection: column;
`
const CardContainer = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  marginTop: 20px;
`

const CardTitle = styled.Text`
  fontSize: 14px;
  fontWeight: 500;
  marginTop: 20
`

export default Reports