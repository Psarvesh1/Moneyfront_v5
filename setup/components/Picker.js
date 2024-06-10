import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
const Picker = ({placeholder, data, setState, align, height}) => {
    console.log(align)
    const [item, setItem] = useState()
      const pickerStyle = {
        inputIOS: {
        padding: 10,
        backgroundColor: '#efefef',
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6,
        textAlign: align,
        height: height
         // to ensure the text is never behind the icon
        },
        placeholder: {
            fontSize: 15, 
            color: '#000'
        },
    };
    return (
        <RNPickerSelect
            placeholder={placeholder}  
            items={data}
            onValueChange={value => {
                setItem(value);
            }}
            onDonePress={(value) => {
              setState(item);
            }}
            labelStyle={{
              alignSelf: 'center',
              fontSize: 18
            }}
            style={{
              ...pickerStyle,
              iconContainer: {
                top: 14,
                right: 12,
              },
            }}
            value={item}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'yellow' }}
            Icon={() => {
              return <Icon name='angle-down' size={22} style={{alignSelf: "center"}}/>
            }}
          />
    );
};
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        padding: 10,
        backgroundColor: '#efefef',
        borderRadius: 5,
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 6 // to ensure the text is never behind the icon
    },
  });
export default Picker