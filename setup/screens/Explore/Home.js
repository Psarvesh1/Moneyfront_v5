import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {Searchbar, Divider} from 'react-native-paper';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Card from '../../components/Card';
import data from '../../../utils/data/index.json';
import {verticalScale, moderateScale } from '../../themes/metrics';
import { SafeAreaView } from 'react-native';
import AuthContext from '../../context/AuthContext';
import { searchSchemes } from '../../utils/api';
import routes from '../../router-manager/routes';
const Explore = ({navigation}) => {
  let {id, sessionId} = useContext(AuthContext)
  console.log('explore ' +sessionId)
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchData, setSearchData] = useState()
  
  const handleSearch = async (text) => {
    setSearchQuery(text)
    try{
      const data = await searchSchemes({id, sessionId, searchQuery})
      setSearchData(data.List)
      console.log(searchData)
    }catch(err){
      console.log(err)
    }
  }

  console.log(data.Transact.name)
  return (
    <SafeAreaView>
    <Container>
      <Header>Explore</Header>
      <TouchableOpacity onPress={() => navigation.navigate(routes.SearchScheme)}>
      <Searchbar
        placeholder="Search Mutual Funds"
        onChangeText={(text) => handleSearch(text)}
        value={searchQuery}
        style={styles.search}
        containerStyle={{ padding: 0 }}
        inputStyle={{
          minHeight: 0
        }}
        onClearIconPress= {()=> {
          setSearchQuery()
          setSearchData(null)
        }}
      />
      </TouchableOpacity>
      {/* <FlatList 
        style={{paddingBottom: 200}}
        data={searchData}
        ListEmptyComponent={<Text>No Data</Text>}
        renderItem={({ item }) => 
          <Text>{item.SchemeName}</Text>
      }
      keyExtractor={item => item.SchemeName}
      /> */}
      <Divider />
      <Title>Our Picks!</Title>
      <Desc>
        Save time on research and go with our expert data science driven
        recommendations in each category.
      </Desc>
    <CardView horizontal showsHorizontalScrollIndicator={false} >
      {data.card1.map((data) => (
        <Card
        key={Math.random()}
        title={data.title}
        meta={data.meta}
        style={{backgroundColor: data.background}}
        name ={data.name}
        screen = {data.screen}
        height={'70%'}
      />
      ))}
      </CardView>
      <Divider />
      <Title>Recommended for you!</Title>
      <Desc>
        Pick  based on the risks you are willing to take and the expected return.
      </Desc>
      <CardView horizontal showsHorizontalScrollIndicator={false}>
      {data.card2.map((data) => (
        <Card
        key={Math.random()}
        icon={data.icon}
        title={data.title}
        meta={data.meta}
        name={data.name}
        style={{backgroundColor: data.background}}
        iconType={data.type}
        screen = {data.screen}
        height={'70%'}
      />
      ))}
      </CardView>
      <Divider />
      <Title>Alternate Products</Title>
      <Desc>
        Moneyfront brings you a list of alternative products you can purchase.
      </Desc>
      <CardView horizontal showsHorizontalScrollIndicator={false} >
      {data.card3.map((data) => (
        <Card
        key={Math.random()}
        icon={data.icon}
        title={data.title}
        meta={data.meta}
        name={data.name}
        style={{backgroundColor: data.background}}
        titleStyle={{color: '#000000'}}
        metaStyle={{color: '#808080'}}
        iconType={data.type}
        screen = {data.screen}
        height={'70%'}
      />
      ))}
      </CardView>
    </Container>
    </SafeAreaView>
  );
};


const Container = styled.ScrollView`
  padding: 0px 10px;
  flex-direction: column;
`;

const Header = styled.Text`
  fontSize: ${moderateScale(28)};
  color: black;
  fontWeight: bold;
  fontFamily: 'poppins_regular';
`;

const Title = styled.Text`
  fontSize: ${moderateScale(22)};
  color: black;
  font-weight: bold;
  marginTop: ${verticalScale(15)}
`;

const Desc = styled.Text`
  fontSize: ${moderateScale(16)};
  color: grey;
  marginTop: ${verticalScale(5)}
`;

const CardView = styled.ScrollView`
    flex: 1;
    height: ${verticalScale(200)}
`

const styles = StyleSheet.create({
  search: {
    marginTop: verticalScale(10),
    width: '100%',
    marginBottom: verticalScale(10),
    padding: -20,
    borderRadius: moderateScale(10)
  }
});

export default Explore;
