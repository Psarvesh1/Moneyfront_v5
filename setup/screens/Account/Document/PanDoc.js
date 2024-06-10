import React from 'react'
import styled from 'styled-components'
import { Image } from 'react-native'
import Pan from '../../../../assets/images/pan_card.png'
const PanDoc = () => {
  return (
    <Container>
        <Image source={Pan} style={{width: '100%'}} resizeMode='contain'/>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    width: 100%;
`
export default PanDoc