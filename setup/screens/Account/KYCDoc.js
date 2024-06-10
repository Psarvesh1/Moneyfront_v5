import React, { useState } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper'
import AccountForm from './Document/AccountForm'
const KYCDoc = ({navigation}) => {
const [tab, setTab] = useState()
  return (
    <Container>
        <View style={{marginTop: 10}}>  
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('AccountForm')}>
            <Title>
                Moneyfront Account Form
            </Title>
        </TouchableOpacity>
        <Divider/>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('PanDoc')}>
            <Title>
                PAN DOCUMENT
            </Title>
        </TouchableOpacity>
        <Divider/>
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Cheque')}>
            <Title>
                Cancelled Cheque
            </Title>
        </TouchableOpacity>
        </View>
        <Divider/>
    </Container>
    
  )
}

const styles = StyleSheet.create({
    btn: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 4
    }
})

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff;
    padding: 0px 10px;
`

const Title = styled.Text`
    fontSize: 18px;
    color: #000;
`


export default KYCDoc