import * as React from 'react';
import { useWindowDimensions, Text, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styled from 'styled-components';
import SIPCard from '../../../components/SIPCard';
import LumsumCard from '../../../components/LumpsumCard';
import data from '../../../../utils/data/index.json'
import { verticalScale, moderateScale } from '../../../themes/metrics';

const SecondRoute = () => (
  
  <Container>
    {data.lupmsum.map((data, key) => (
      <SIPCard
        title={data.title}
        nav={data.nav}
        type={data.type}
        min={data.min}
      />
    ))}
  </Container>
);

const FirstRoute = () => {
  return (
    <Container>
      {data.lupmsum.map(data => (
        <LumsumCard
          title={data.title}
          nav={data.nav}
          type={data.type}
          min={data.min}
        />
      ))}
    </Container>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Equity() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Lumpsum'},
    {key: 'second', title: 'SIP'},
  ]);

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


