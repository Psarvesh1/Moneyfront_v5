import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import styled from 'styled-components';
import data from '../../../../utils/data/index.json'
const HoldingsBottomSheet = ({MarketValue,
  RealisedGL,
  UnrealisedGL,
  DaysGainAmount,
  DividendPaidOut, 
  DividendReinvested }) => {
  const snapPoints = useMemo(() => ['5%', '50%'], []);

  return (
    <BottomSheet
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: '#469b94',
      }}
      handleIndicatorStyle={{
        backgroundColor: '#fff'
      }}
    >
      <ContentContainer>
        <Column>
          <Row>
            <Cell>
              <Title>Current Portfolio Value</Title>
              <Value>Rs. {MarketValue}</Value>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Title>XIRR%(Annualized Return</Title>
              <Value>23 %</Value>
            </Cell>
          </Row>
        </Column>
        <Column>
          <Row>
            <Cell>
              <Title>Realised Gain/Loss</Title>
              <Value>Rs. {RealisedGL}</Value>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Title>Unrealised Gain/Loss</Title>
              <Value>Rs. {UnrealisedGL}</Value>
            </Cell>
          </Row>
        </Column>
        <Column>
          <Row>
            <Cell>
              <Title>Dividend Paid Out</Title>
              <Value>Rs. {DividendPaidOut}</Value>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Title>Dividend Reinvestment</Title>
              <Value>Rs. {DividendReinvested}</Value>
            </Cell>
          </Row>
        </Column>
      </ContentContainer>
    </BottomSheet>
  );
};


const ContentContainer = styled.View`
    flex: 1;
    justifyContent: space-between;
    padding: 20px;
    width: 100%;
`
const Column = styled.View`
    flexDirection: row;
    width: 100%;
    
`
const Row = styled.View`
    flexDirection: row;
    width: 50%;
    paddingBottom: 8px;
    borderBottomWidth: 0.3px;
    borderBottomColor: #fff
`
const Cell = styled.View`
    flexDirection: column;
`
const Title = styled.Text`
    fontSize: 14px;
    color: #fff;
    fontWeight: 300
`
const Value = styled.Text`
    marginTop: 4px;
    fontSize: 20px;
    fontWeight: 500;
    color: #fff
`

export default HoldingsBottomSheet;
