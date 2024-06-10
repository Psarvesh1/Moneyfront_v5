import React, {useState} from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, Linking, Platform } from 'react-native'

const ContactUs = () => {

const [phoneNumber, setPhoneNumber] = useState('');

  const openCallDialer = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };
  return (
    <Container>
        <Label style={{marginTop: 30}}>Address</Label>
        <Card>
            <Text style={{fontSize: 16}}>Moneymap Investment Advisors Pvt. Ltd.</Text>
            <Text style={{fontSize: 16, marginTop: 10}}>702, Samarpan Complex, Satam Wadi, Andheri - Ghatkopar Link Road Opposite Solitaire Park, Andheri East Mumbai - 400099, Maharashtra</Text>
        </Card>
        <Label>Phone</Label>
        <Card>
            <TouchableOpacity onPress={openCallDialer}>
            <GreenText>+91 224543200</GreenText>
            </TouchableOpacity>
        </Card>
        <Label>Email</Label>
        <Card>
            <GreenText>info@moneyfront.in</GreenText>
        </Card>
        <Label>Client Service Email</Label>
        <Card>
            <GreenText>support@moneyfront.in</GreenText>
        </Card>
    </Container>
    )
}

const Container = styled.View`  
    flex: 1;
    backgroundColor: #efefef
`
const Label = styled.Text`
    fontSize: 17px;
    marginLeft: 10px;
    marginTop: 4px;
    color: #949191;
`

const Card = styled.View`
    backgroundColor: #fff;
    padding: 10px;
    marginTop: 10px;
`

const GreenText = styled.Text`
    fontSize: 16px;
    color: #03ab4a;
`

export default ContactUs