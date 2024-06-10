import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { View, StyleSheet, Text } from 'react-native'
import RadioButton from '../../../components/RadioButton'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { verticalScale, horizontalScale, moderateScale } from '../../../themes/metrics'
import routes from '../../../router-manager/routes'
const AnnualIncome = () => {
  const navigation = useNavigation()

  const [option, setOption] = useState(null);
  const [btnState, setBtnState] = useState()
  useEffect(()=> {
    if(option===null){
      setBtnState(true)
    }else{
      setBtnState(false)
    }
  },[option])
  const data = [
    { value: '<1L' },
    { value: '1L - 5L' },
    { value: '5L - 10L' },
    { value: '10L - 25L' },
    { value: '25L - 1CR' },
    { value: 'Over 1CR' },
  ];
  const [selected, setSelected] = useState()
  return (
    <Container>
        <Title>My Age is  22</Title>
        <Title style={{marginTop: verticalScale(40)}}>Annual Income (Rs.)</Title>
        <View style={styles.container}>
        <RadioButton width={'90%'} data={data} onSelect={(value) => setOption(value)} />
    </View>
    <Button
        mode="contained"
        style={{
          borderRadius: 5,
          width: '90%',
          alignSelf: 'center',
          padding: 0,
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 3},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          marginTop: verticalScale(70)
        }}
        disabled={btnState}
        labelStyle={{fontSize: moderateScale(18)}}
        buttonColor="#649e3e"
        onPress={() => navigation.navigate('Investment')}>
        Next
      </Button>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 20px;
    justifyContent: 'center'
`

const Title = styled.Text`
    fontSize: 18px;
    fontWeight: 500;
`

const styles = StyleSheet.create({
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container: {
        marginTop:verticalScale(22),
    }
  });


export default AnnualIncome