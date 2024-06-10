import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Entypo'
import { Divider } from 'react-native-paper';

const DropdownComponent = ({placeholder, width, data}) => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <>
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
      <Divider/>
      </>
    );
  };

  return (
    <Dropdown
      style={[styles.dropdown, {width: width}]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      containerStyle={styles.itemContainer}
      data={data}
      maxHeight={300}
      labelField='label'
      valueField='value'
      searchPlaceholder="Search..."
      placeholder={placeholder}
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    backgroundColor: '#efefef',
    borderRadius: 5,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: '100%'
  },
  icon: {
    marginRight: 5,
  },
  itemContainer: {
    backgroundColor :'#efefef',
  }
  ,
  item: {
    paddingTop: 17,
    paddingBottom: 17,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor :'#efefef',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center'
  },
  placeholderStyle: {
    fontSize: 18,
    color: '#4d4d4f',
    fontWeight: 500
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 30,
    height: 34
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
