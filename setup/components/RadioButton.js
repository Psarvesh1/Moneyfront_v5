import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { verticalScale, moderateScale } from '../themes/metrics';
export default function RadioButton({ data, onSelect, width }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  console.log(userOption)
  return (
    <>
      {data.map((item) => {
        return (
        <View style={{marginTop: verticalScale(22), width: '100%'}}>
        <Button
            mode="outlined"
            style={[item.value === userOption ? styles.selected : styles.unselected, {width: width}]}
            labelStyle={item.value === userOption ? styles.textSelected : styles.textUnselected}
            onPress={() => selectHandler(item.value)}>
            {item.value}
        </Button>
        </View>
        );
      })}
    </>
  );
}
//item.value === userOption ? styles.selected : styles.unselected
const styles = StyleSheet.create({
  option: {
    fontSize: moderateScale(20),
    color: 'white',
    textAlign: 'center',
  },
  unselected: {
    borderRadius: moderateScale(10),
    width: '90%',
    padding: 0,
    borderColor: '#649e3e',
    alignSelf: 'center'
  },
  selected: {
    backgroundColor: '#649e3e',
    borderRadius: moderateScale(10),
    width: '90%',
    padding: 0,
    alignSelf: 'center'
  },
  textSelected: {
    color: '#fff',
    fontSize: moderateScale(16),

  },
  textUnselected: {
    color: '#649e3e',
    fontSize: moderateScale(16),
    fontWeight: 500
  }
});