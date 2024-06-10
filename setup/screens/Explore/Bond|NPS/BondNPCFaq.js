import React from 'react'
import styled from 'styled-components'
import { Divider } from 'react-native-paper'
const BondsNPCFaq = () => {
  return (
    <Container>
      <FAQ>
        <Question>Why should I choose bonds over mutual funds?</Question>
        <Answer>
          Mutual funds depend on market performance whereas Bonds provide
          guaranteed returns.
        </Answer>
      </FAQ>
      <Divider style={{height: 2}} />
      <FAQ>
        <Question>
          What is the minimum ticket size for purchasing a bond?
        </Question>
        <Answer>
          The minimum ticket size for purchasing a bond is 10 Lac.
        </Answer>
      </FAQ>
      <Divider style={{height: 1}} />
      <FAQ>
        <Question>Is demat account required to invest in bonds?</Question>
        <Answer>
          Yes, it is compulsory for the investor to have a demat account.
        </Answer>
      </FAQ>
      <Divider style={{height: 1}} />
      <FAQ>
        <Question>Will it reflect on my moneyfront portfolio?</Question>
        <Answer>
          Though it will not reflect on your moneyfront portfolio, you will be
          able to view it in your demat holdings.
        </Answer>
      </FAQ>
      <Divider style={{height: 1}} />
    </Container>
  );
}
const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    flexDirection: column;
`
const Question = styled.Text`
    fontWeight: bold;
    fontSize: 16px;
    marginTop: 25px;
`
const FAQ = styled.View`
    height: 140px;
    padding: 0 8px;
    justifyContent: space-between;
`
const Answer = styled.Text`
    fontSize: 14px;
    marginBottom: 16px;
`

export default BondsNPCFaq