import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Divider } from 'react-native-paper';
import Holdings from './Holdings/Holdings';
import Snapshot from './Snapshot/Snapshot';
import Reports from './Reports/Reports';
import UserContext from '../../context/UserContext';

const Portfolio = ({navigation}) => {
  let {tab, setTab} = useContext(UserContext)
  return (
    <Container>
      {/* <Header>
        <View style={{flexDirection: 'row'}}>
        <Call name='call' color='black' style={{marginTop: 4}} size={20}/>
        <CallText>Assistance(24×7)</CallText>
        </View>
        <Icon name='shopping-cart' color='green' style ={{}} size={20}/>

      </Header> */}
      <Title>Portfolio</Title>
      <SegmentedControl
        values={['Snapshot', 'Holdings', 'Reports']}
        selectedIndex={tab}
        backgroundColor='#eeeeef'
        onChange={event => {
          setTab(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '95%', alignSelf: 'center'}}
        fontStyle={{color:'#000'}}
        tintColor='#fff'
      />
       <Divider style={{marginTop: 5}}/>
      {tab==0? <Snapshot navigation={navigation}/>: tab==1?<Holdings navigation={navigation} setTab={setTab}/>: tab==2? <Reports navigation={navigation}/>: null}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  flexDirection: column;
`;
const Header = styled.View`
  flex: 0.1;
  width: 100%;
  padding: 10px;
  flexDirection: row;
  justifyContent: space-between;
`;
const Title = styled.Text`
  fontSize: 34px;
  fontWeight: 500;
  marginBottom: 20px;
  marginLeft: 15px;
  alignSelf: flex-start;
`
const CallText = styled.Text`
    fontSize: 22px;
    marginLeft: 10px;
`

export default Portfolio;
