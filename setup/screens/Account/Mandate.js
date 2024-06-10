import React from 'react'
import styled from 'styled-components'
import MandateCard from '../../components/MandateCard'
import data from '../../../utils/data/index.json'
const Mandate = () => {
  return (
    <Container>
        {
            data.mandate.map((data) => (
                <MandateCard 
                    bank = {data.bank_name}
                    amount= {data.amount}
                    account={data.account_no}
                    date={data.date_of_reg}
                />
            ))
        }
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    flexDirection: column;
`

export default Mandate