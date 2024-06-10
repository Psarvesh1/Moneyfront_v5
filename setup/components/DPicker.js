import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const DPicker = ({giveDate, date}) => {
  // const [date, setDate] = useState()
  const [flag, setFlag] = useState(false)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  
  
  return (
    <>
      
    </>
  );
}

const InputText = styled.Text`
    fontSize: 14px;
    fontWeight: 500;
`

const styles = StyleSheet.create({
    datePicker: {
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 5,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
        borderColor: '#0047AB',
        borderWidth: 1
    },
    placeholder: {
      fontWeight: '600',
      color: 'gray'
    },
    dateText: {
      fontSize: 14,
      fontWeight: '500',
      marginTop: 4
    }

})
export default DPicker