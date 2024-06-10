import React from 'react'
import styled from 'styled-components'
import Icons from '../screens/Transact/Icons'
import {TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { verticalScale, horizontalScale } from '../themes/metrics'
const TransactIcons = ({name, title}) => {
    const navigation = useNavigation()
    return(
    <ImageSet>
        <ImageContainer>
            <TouchableOpacity onPress={()=> navigation.navigate({name})}>
            <ImageIcon source={Icons[name]}/>
            </TouchableOpacity>
        </ImageContainer>
        <Meta>{title}</Meta>
    </ImageSet>
    )
}

const ImageSet = styled.View`
  flex: 0.2;
  flexDirection: column;
  alignItems: center;
`;

const Meta = styled.Text`
    textAlign: center;
    marginTop: ${verticalScale(8)};
    width: ${horizontalScale('95%')};
`
const ImageContainer = styled.View`
  borderRadius: 400px;
  backgroundColor: #fff;
  width: 60px; 
  height: 60px;
  justifyContent: center;
  alignItems: center;
`;

const ImageIcon = styled.Image`
  height: 40px;
  width: 40px;
`;

export default TransactIcons