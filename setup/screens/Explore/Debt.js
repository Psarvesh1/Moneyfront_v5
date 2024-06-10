import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styled from 'styled-components';
import SIPCard from '../../../Components/SIPCard';
import data from '../../../utils/data/index.json'

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
        <SIPCard
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

export default function Debt() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Lumpsum'},
    {key: 'second', title: 'SIP'},
  ]);

  return (
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
                margin: 8,
                fontSize: 16,
                fontWeight: 600,
              }}>
              {route.title}
            </Text>
          )}
          indicatorStyle={{backgroundColor: 'gray', height: 5}}
          style={{backgroundColor: '#fff', borderColor: 'blue'}}
        />
      )} // <-- add this line
    />
  );
}

const Container = styled.ScrollView`
    flex: 1;
    backgroundColor: #EAEBEB;
`  


