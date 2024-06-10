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

export const CollapsableContainer = ({ children, expanded }) => {
  const [height, setHeight] = useState(0)
  const animatedHeight = useSharedValue(0)

  const onLayout = event => {
    const onLayoutHeight = event.nativeEvent.layout.height

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight)
    }
  }

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(0)

    return {
      height: animatedHeight.value
    }
  }, [expanded])

  return (
    <Animated.View style={[collapsableStyle, { overflow: "hidden" }]}>
      <View style={{ position: "absolute" }} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  )
}

export const TransactionCard = ({ Scheme, TotalAmount, InvestedAmount, RedeemedAmount, PresentUnits, AvgPrice, PresentValue, UnRealisedGainLoss, RealisedGainLoss, XIRR, AbsoluteReturn, WeightedAvgDays }) => {
    const [expanded, setExpanded] = useState(false)
    
    const onItemPress = () => {
        setExpanded(!expanded)
    }
    return (
        <View style={expanded ? styles.containerCollapsed : styles.containerNotCollapsed}>
            <>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{Scheme}</Text>
                    {/* <View>
                    {expanded ? <Icon name='angle-up' size={20} color='#FFF'/> : <Icon name='angle-down' size={20} color='#FFF'/>}
                    </View> */}
                </View>
                <View style={styles.content}>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total Amount</Text>
                            <Text style={styles.value}>{TotalAmount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Redeemed Amount</Text>
                            <Text style={[styles.value, { color: '#47b994' }]}>{RedeemedAmount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Avg. Price</Text>
                            <Text style={styles.value}>{AvgPrice}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Invested Amount</Text>
                            <Text style={styles.value}>{InvestedAmount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Present Units</Text>
                            <Text style={styles.value}>{PresentUnits}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Present Value</Text>
                            <Text style={styles.value}>{PresentValue}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.eyeIcon} onPress={onItemPress}>
                    {expanded ? <Icon name="eye-with-line" size={20} color='green' /> : <Icon name="eye" size={20} color='green' />}
                </TouchableOpacity>
            </>
            <CollapsableContainer expanded={expanded}>
                <View style={styles.content}>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Realized Gain/Loss</Text>
                            <Text style={styles.value}>{RealisedGainLoss}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Absolute Return</Text>
                            <Text style={[styles.value, { color: '#47b994' }]}>{AbsoluteReturn}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Wtd. Avg. Days</Text>
                            <Text style={styles.value}>{WeightedAvgDays}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Unrealized Gain/Loss</Text>
                            <Text style={styles.value}>{UnRealisedGainLoss}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Annualized Return</Text>
                            <Text style={styles.value}>{XIRR}</Text>
                        </View>
                    </View>
                </View>
            </CollapsableContainer>
        </View>
    )
}
const styles = StyleSheet.create({
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
