import React from 'react'
import {View} from 'react-native'
import { Divider } from 'react-native-paper';
import styled from 'styled-components';
import { Button } from 'react-native-paper';
import { moderateScale } from '../themes/metrics';
const HoldingsDetail = ({route, navigation}) => {
  const {detail} = route.params;

  console.log(detail)
  return (
    <Container>
      <View style={{flex: 0.8}}>
      <TitleContainer>
        <Title>{detail.SchemeName}</Title>
      </TitleContainer>
      <DetailRow style={{width: '100%'}}>
        <DetailColumn style={{width: '40%'}}>
          <ColumnValue>
            <Name>NAV:</Name>
            <Value style={{marginLeft: 6}}>{detail.NAV}</Value>
          </ColumnValue>
          <ColumnValue>
            <Name>Units</Name>
            <Value style={{marginLeft: 6}}>{detail.BalanceUnits}</Value>
          </ColumnValue>
        </DetailColumn>
        <DetailColumn style={{width: '60%'}}>
          <ColumnValue>
            <Name>Folio No:</Name>
          </ColumnValue>
          <ColumnValue>
          <Value>{detail.Folionumber}</Value>
          </ColumnValue>
        </DetailColumn>
      </DetailRow>
      <DetailRow>
        <DetailColumn style={{width: '40%'}}>
          <ColumnValue>
            <Name>Current Value</Name>
          </ColumnValue>
          <ColumnValue>
            <Value>Rs. {detail.MarketValue}</Value>
          </ColumnValue>
        </DetailColumn>
        <DetailColumn style={{width: '60%'}}>
        <ColumnValue>
            <Name>Amount Invested</Name>
          </ColumnValue>
          <ColumnValue>
            <Value>Rs. {detail.Current_Invested_Amount}</Value>
          </ColumnValue>
        </DetailColumn>
      </DetailRow>
      <DetailRow>
        <DetailColumn style={{width: '100%'}}>
          <ColumnValue>
          <Name>
            Absolute Return(%):
          </Name>
          </ColumnValue>
          <ColumnValue>
          <Value style={{color: 'green'}}>{detail.Absoute_Return} %</Value>
          </ColumnValue>
        </DetailColumn>
      </DetailRow>
      <Button
        textColor="green"
        mode="outlined"
        style={{
          backgroundColor: 'transparent',
          borderColor: 'green',
          marginTop: 40,
          padding: 2,
          borderRadius: 5,
          width: '90%',
          alignSelf: 'center'
        }}>
        <BtnText>Transact</BtnText>
      </Button>
      </View>
      <View style={{flex: 0.5}}>
      <Divider/>
      <TableRow style={{width: '100%'}}>
        <TableIconTitle >
          <TableTitle>
          Realised Gain Loss
          </TableTitle>
          
        </TableIconTitle>
        <View style={{width: '20%'}}>
        <TableValue>
            {detail.RealisedGL}
          </TableValue>
        </View>
      </TableRow>
      <Divider/>
      <TableRow style={{width: '100%'}}>
        <TableIconTitle >
          <TableTitle>
          UnRealised Gain Loss
          </TableTitle>
          
        </TableIconTitle>
        <View style={{width: '20%'}}>
        <TableValue>
            {detail.UnrealisedGL}
          </TableValue>
        </View>
      </TableRow>
      <Divider/>
      <TableRow style={{width: '100%'}}>
        <TableIconTitle>
          <TableTitle>
          Dividend ReInvested
          </TableTitle>
        </TableIconTitle>
        <View style={{width: '20%'}}>
        <TableValue>
            {detail.DividendReinvested}
          </TableValue>
        </View>
      </TableRow>
      <Divider/>
      <TableRow style={{width: '100%'}}>
          <TableIconTitle>
          <TableTitle>
          Dividend Paid Out
          </TableTitle>
          </TableIconTitle>
          <View style={{width: '20%'}}>
          <TableValue>
            {detail.DividendPaidOut}
          </TableValue>
          </View>
      </TableRow>
      <Divider/>
      <TableRow style={{width: '100%'}}>
        <TableIconTitle>
          <TableTitle>
          Redeemed Amount
          </TableTitle>
          
        </TableIconTitle>
        <View style={{width: '20%'}}>
        <TableValue>
            {detail.RedeemedAmount}
          </TableValue>
        </View>
      </TableRow>
      </View>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  flexDirection: column;
`
const TitleContainer = styled.View`
    alignItems: center;
    padding: 16px;
    backgroundColor: #627593;
`
const Title = styled.Text`
    fontSize: 18px;
    fontWeight: 400;
    color: #fff;
    textAlign: center;
`
const DetailRow = styled.View`
    flexDirection: row;
`
const DetailColumn = styled.View`
    flexDirection: column;
    padding: 15px 10px;
    alignItems: center;
`
const ColumnValue = styled.View`
    flexDirection: row;
    paddingTop: 5px;
`
const Name = styled.Text`
    fontSize: 18px;
`
const Value = styled.Text`
    fontSize: 18px;
    fontWeight: 500;
`
const TableRow = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
    alignItems: center;
`
const TableIconTitle = styled.View`
    padding: 10px 5px;
    flexDirection: row;
    justifyContent: space-between;
`
const TableTitle = styled.Text`
    fontSize: 18px;
`
const TableValue = styled.Text`
    fontSize: 18px;
    fontWeight: 500;
`
const BtnText = styled.Text`
  font-size: ${moderateScale(18)};
  letter-spacing: 1px;
`;
export default HoldingsDetail;