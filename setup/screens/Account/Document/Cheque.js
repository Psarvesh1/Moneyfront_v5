import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'
import Cancelled_Cheque from '../../../../assets/images/Cancelled_Cheque.png'
const Cheque = () => {
  return (
    <Container>
        <Image source={Cancelled_Cheque} style={{resizeMode: 'contain', width: '100%'}}/>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    width: 100%;
`
export default Cheque