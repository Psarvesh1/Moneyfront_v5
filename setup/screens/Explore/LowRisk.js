import React, { useContext, useEffect, useState } from 'react';
import { useWindowDimensions, Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styled from 'styled-components';
import SIPCard from '../../components/SIPCard';
import LumsumCard from '../../components/LumpsumCard';
import data from '../../../utils/data/index.json'
import { verticalScale, moderateScale } from '../../themes/metrics';
import { getLumpsumSchemeRecommendations } from '../../../utils/api';
import AuthContext from '../../context/AuthContext';
import UserContext from '../../context/UserContext';

const SecondRoute = () => {
  const [equity, setEquity] = useState()
  let {sipData} = useContext(UserContext)
  const filterData = async () => {
    let result = sipData.filter(item => item.Risk === 'Moderate')
    setEquity(result)
    // console.log(result)
    console.error(equity)
  }
  useEffect(()=> {
      filterData()
  }, [])
  return(
  <Container>
    {equity && equity.map((data, key) => (
      <SIPCard
        title={data.SchemeName}
        nav={data.NAVRS}
        type={data.Category}
        min={data.MININVT}
      />
    ))}
  </Container>
  )
}

const FirstRoute = () => {
  const [debt, setDebt] = useState()
  let {lumpsumData} = useContext(UserContext)
  const filterData = async () => {
    let result =  lumpsumData.filter(item => item.Risk === 'Moderate')
    setDebt(result)
  }
  useEffect(() => {
      filterData()
  }, [])
  return (
    <Container>
      {debt && debt.map((data, key) => (
        <LumsumCard
          title={data.SchemeName}
          nav={data.NAVRS}
          type={data.Category}
          min={data.MININVT}
        />
      ))}
    </Container>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function LowRisk() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Lumpsum'},
    {key: 'second', title: 'SIP'},
  ]);
  let {id, sessionId} = React.useContext(AuthContext)

  return (
    <View style={{flex: 1}}>
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({route, color}) => (
            <Text
              style={{
                color: 'black',
                margin: verticalScale(8),
                fontSize: moderateScale(16),
                fontWeight: 600,
              }}>
              {route.title}
            </Text>
          )}
          indicatorStyle={{backgroundColor: 'gray', height: verticalScale(5)}}
          style={{backgroundColor: '#fff', borderColor: 'blue'}}
        />
      )} // <-- add this line
    />
    </View>
  );
}

const Container = styled.ScrollView`
    padding: 0;
    backgroundColor: #EAEBEB;
`  


