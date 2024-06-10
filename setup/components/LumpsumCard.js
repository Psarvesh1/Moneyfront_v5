import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale, moderateScale } from '../themes/metrics';
import routes from '../router-manager/routes';
const LumsumCard = ({title, type, nav, min}) => {
  const navigation = useNavigation()
  console.log(nav)
  return (
    <Container>
      <Title>{title}</Title>
      <Type>{type}</Type>
      <Divider />
      <SubContainer>
        <Box>
          <Label>Min Investment</Label>
          <Amount>{min}</Amount>
        </Box>
        <Box>
          <Label>Nav</Label>
          <Amount style={{color: '#097969'}}>{nav}</Amount>
        </Box>
        <Box style={{paddingLeft: horizontalScale(15), alignItems: 'flex-end'}}>
        <TouchableOpacity style={{ ...styles.button}} onPress={()=> {navigation.navigate(routes.ComingSoon)}}>
            <Text style={{ ...styles.text}} numberOfLines={1} adjustsFontSizeToFit={true}>
                Buy Now
            </Text>
        </TouchableOpacity>
        </Box>
      </SubContainer>
    </Container>
  );
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    backgroundColor: #fff;
    flexDirection: column;
    marginTop: ${verticalScale(8)};
    marginBottom: ${verticalScale(15)};
`
const Title = styled.Text`
    fontSize: ${moderateScale(18)};
    width: 90%;
    marginBottom: ${verticalScale(5)};
`
const Type = styled.Text`
    fontSize: ${moderateScale(16)};
    marginBottom: ${verticalScale(10)};
    color: #6b6b6b;
`
const SubContainer = styled.View`
    flexDirection: row;
    width: 100%;
    justifyContent: space-between;
`
const Box = styled.View`
    marginTop: ${verticalScale(20)};
    width: 33%;
    alignItems: center;
    justifyContent: center;
`
const Label = styled.Text`
    fontSize: ${moderateScale(16)};
    color: #6b6b6b
`
const Amount = styled.Text`
    marginTop: 10px;
    fontSize: ${moderateScale(18)};
`

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#1A5A86',
      borderRadius: moderateScale(5),
      justifyContent: 'center',
      alignItems: 'center',
      // padding: 20
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(10),
      paddingLeft: horizontalScale(14),
      paddingRight: horizontalScale(14)
  },
  text: {
      color: '#fff',
      fontSize: moderateScale(16),
      fontFamily: 'bold'
  },
});
export default LumsumCard