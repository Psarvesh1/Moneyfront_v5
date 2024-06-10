import React from 'react'
import styled from 'styled-components'
import data from '../../utils/data/index.json'
import {StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'
const ReportCard = () => {
  return (
    <Container style = {styles.shadowProp}>
        <Title>
            ICICI Prudential Liquid Fund Growth Direct Plan - Cash
        </Title>
        
        <SubContainer>
        <Column>
        {data.reportcard1.map((data) => (
            <Cell>
                <Name>{data.title}</Name>
                <Value>{data.value}</Value>
                </Cell>
        ))}
        </Column>
        <Column>
        {data.reportcard2.map((data) => (
            <Cell>
                <Name>{data.title}</Name>
                <Value>{data.value}</Value>
            </Cell>
        ))}
        <Cell>
            <Name>Total ST Gain/Loss</Name>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Value style={{color: '#1eeb92'}}>₹ 0.59</Value>
                <Icon name='caret-up' size={15} style={{marginLeft: 4, color: '#1eeb92'}}/>
            </View>
        </Cell>

        </Column>
        </SubContainer>
        
    </Container>
  )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
})

const Container = styled.View`
    flex: 1;
    padding: 10px;
    backgroundColor: #fff;
    flexDirection: column;
    borderRadius: 8px;
`
const SubContainer = styled.View`
    flexDirection: row;
    width: 100%;
`
const Title = styled.Text`
    fontSize: 16px;
    fontWeight: 500;
    marginLeft: 2px;
`
const Column = styled.View`
    width: 50%;
    flexDirection: column;
`
const Cell = styled.View`
    flexDirection: column;
    marginTop: 16px;
    paddingLeft: 6px;
`
const Name = styled.Text`
    fontSize: 14px;
    fontWeight: 300;
`
const Value = styled.Text`
    fontSize: 14px;
    fontWeight: 500;
    marginTop: 4px;
`

export default ReportCard