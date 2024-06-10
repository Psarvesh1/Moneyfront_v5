import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import { Divider } from 'react-native-paper';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import UserContext from '../../../context/UserContext';

const SnapCard = ({
  first_title,
  second_title,
  first_value,
  second_value,
  title,
  flag,
}) => {
  const navigation = useNavigation();
  let {setTab} = useContext(UserContext)
  return (
    <Container>
      <Divider />
      <Card>
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <Divider />
        <AmountContainer>
          <Number>{first_value}</Number>
          <Meta>{first_title}</Meta>
        </AmountContainer>
        <Divider />
        <AmountContainer>
          <Number>{second_value}</Number>
          <Meta>{second_title}</Meta>
        </AmountContainer>
        <Divider />
        {flag == true ? (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
            console.log('clicked')
            setTab(1)}}>
            <Button>View Holdings</Button>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: '#4abc64',
    width: '100%',
    alignItems: 'center',
  }
})


const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  flex-direction: column;
  backgroundColor: #efefef;
  marginBottom: 20px;
  textAlign: center;
`;

const Card = styled.View`
  backgroundColor: #fff;
  width: 100%;
`

const Title = styled.Text`
  textAlign: center;
  fontSize: 18px;
  fontWeight: 500;
  color: #fff
`
const TitleContainer = styled.View`
  width: 100%;
  backgroundColor: #8392ab;
  padding: 12px 0px;
`
const AmountContainer = styled.View`
  width: 100%;
  height: 90;
  justifyContent: center;
`
const Number = styled.Text`
  fontSize: 34px;
  color: #000;
  fontWeight: 300;
  textAlign: center;
`

const Meta = styled.Text`
  fontSize: 18px;
  alignSelf: center;
  marginTop: 6px;
  color: #0f9f55;
`
const Button = styled.Text`
  fontSize: 16px;
  color: #fff;
  fontWeight: 600;
`

export default SnapCard;
