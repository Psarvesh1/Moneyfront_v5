import React, { useState } from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"
import Icon from 'react-native-vector-icons/Entypo'
import routes from "../router-manager/routes"
import { useNavigation } from "@react-navigation/native"


export const GLSummaryCard = ({ Scheme, TotalAmount, SellAmount, LTGainLoss, STGainLoss, FolioNo }) => {    
    const navigation = useNavigation()
    return (
        <>
        <View style={styles.containerNotCollapsed}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>{Scheme}</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total Purchase Amt.</Text>
                            <Text style={styles.value}>{TotalAmount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total LT Gain/Loss</Text>
                            <Text style={styles.value}>{LTGainLoss}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Folio</Text>
                            <Text style={styles.value}>{FolioNo}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total Sell Amt.</Text>
                            <Text style={styles.value}>{SellAmount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total ST Gain/Loss</Text>
                            <Text style={[styles.value, { color: '#47b994' }]}>{STGainLoss}</Text>
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.eyeIcon} onPress={onItemPress}>
                    {expanded ? <Icon name="eye-with-line" size={20} color='green' /> : <Icon name="eye" size={20} color='green' />}
                </TouchableOpacity> */}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(routes.TransactionList)}>
            <View style ={styles.footer}>
                <Icon name="eye" size={20} color='green' style={{marginRight: 10}}/>
                <Text>View All Transactions</Text>
            </View>
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#e2e9fd',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    containerCollapsed: {
      marginTop: 30,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
    },
    containerNotCollapsed: {
        marginTop: 30,
        backgroundColor: '#fff',
        padding: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        borderRadius: 5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      color: '#000'
    },
    content: {
      flexDirection: 'row',
      marginTop: 10
    },
    column: {
      flexDirection: 'column',
      width: '50%'
    },
    data: {
      flexDirection: 'column',
      marginTop: 14
    },
    title: {
      color: '#000',
      fontSize: 12,
      fontWeight: 600,
      opacity: 0.7
    },
    value: {
      color: '#000',
      marginTop: 2,
      fontSize: 14,
      fontWeight: 'bold'
    },
    eyeIcon:{
        position: 'absolute',
        alignSelf: 'flex-end',
        bottom: 0,
        backgroundColor: '#e2e8fc',
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5
    }
  });
