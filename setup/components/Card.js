import React from 'react';
import styled from 'styled-components';
import {StyleSheet, Image} from 'react-native';
import Icons from '../screens/Transact/Icons'
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { verticalScale, moderateScale, horizontalScale } from '../themes/metrics';

const Card = ({ title, meta, style, name, titleStyle, metaStyle, screen, height}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate(screen)}>
    <CardContainer style={[style, styles.shadowProp,{height: height}]}>
      <IconImage source={Icons[name]}/>
    <View>
    <CardTitle style={titleStyle}>{title}</CardTitle>
    <CardMeta style={metaStyle}>{meta}</CardMeta>
    </View>
    </CardContainer>
    </TouchableOpacity>
  );
}

const CardContainer = styled.View`
    marginTop: ${verticalScale(20)};
    width: ${horizontalScale(300)};
    border-radius: 12px;
    padding: 10px;
    margin-right: ${horizontalScale(20)};
    paddingHorizontal: ${horizontalScale(2)};
    paddingVertical: ${horizontalScale(2)};
    justifyContent: space-between;

`
const IconImage = styled.Image`
    height: 40px;
    width: 40px;
`
const CardTitle = styled.Text`
    color: #fff;
    fontWeight: 600;
    fontSize: 18px;
`
const CardMeta = styled.Text`
    marginTop: ${verticalScale(5)};
    color: #fff;
`
const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

export default Card;
