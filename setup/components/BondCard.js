import React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'
import interlaced from '../../assets/images/interlaced.png' 
import { horizontalScale, verticalScale, moderateScale } from '../themes/metrics'

const BondCard = ({bonds, desc, trending}) => {
  return (
    <Card source={interlaced} resizeMode="cover">
        <View>
        {trending == ''? null : 
            <Trending>
                <Text style={{color: '#fff'}}>{trending}</Text>
            </Trending>}
        <Title>
            {bonds}
        </Title>
        </View>
        
        <Desc>
            {desc}
        </Desc>
    </Card>
  )
}
const Card = styled.ImageBackground`
    borderRadius: 10px;
    width: 100%;
    borderWidth: 1px;
    height: ${verticalScale(180)};
    flexDirection: column;
    justifyContent: space-between;
    overflow: hidden;
    marginBottom: ${verticalScale(16)};
`
const Trending = styled.View`
    fontSize: ${moderateScale(14)};
    alignSelf: flex-end;
    background: #0077fa;
    padding: 3px 14px;
    borderRadius: 10px;
    marginRight: ${horizontalScale(8)};    
    marginTop: ${verticalScale(14)};
`
const Title = styled.Text`
    fontSize: ${moderateScale(22)};
    fontWeight: 500;
    marginTop: ${verticalScale(30)};
    marginLeft: ${horizontalScale(10)};
    position: absolute;
`
const Desc = styled.Text`
    fontSize: ${moderateScale(14)};
    marginLeft: ${horizontalScale(10)};
    marginBottom: ${verticalScale(10)};
`
export default BondCard