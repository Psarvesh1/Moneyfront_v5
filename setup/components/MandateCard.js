import React from 'react'
import styled from 'styled-components'
import { Divider } from 'react-native-paper'

const MandateCard = ({amount, account, date, bank}) => {
  return (
      <Card>
        <Col1>
            <Label>{bank}</Label>
            <Desc>Bank Name</Desc>
            <Label>{account}</Label>
            <Desc>Bank Name</Desc>
        </Col1>
        <Col2>
          <Flag>Active</Flag>
          <Label>{amount}</Label>
            <Desc>Amount</Desc>
            <Label>{date}</Label>
            <Desc>Date of Reg.</Desc>
        </Col2>
      </Card>
  )
}



const Card = styled.View`
  backgroundColor: #fff;
  padding: 10px 10px 40px 10px;
  width: 100%;
  flexDirection: row;
  marginTop: 16px;
`
const Col1 = styled.View`
  width: 70%;
  flexDirection: column;
  justifyContent: space-evenly;
  marginTop: 20px;
`
const Col2 = styled.View`
  width: 30%;
  flexDirection: column;
  marginTop: 20px;
`
const Flag = styled.Text`
    fontSize: 15px;
    color: green;
    position: absolute;
`
const Label = styled.Text`
    fontSize: 15px;
    fontWeight: 600;
    marginTop: 30px;
`
const Desc = styled.Text`
    fontSize: 14px;
`

export default MandateCard