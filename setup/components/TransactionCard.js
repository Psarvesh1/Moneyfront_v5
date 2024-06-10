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

export const TransactionCard = ({Transaction_Date, Purchase_Amount, Purchase_Price, Units, Sell_Rate, GL_LT_Debt, Sell_Amount, GL_ST_Debt }) => {
    const [expanded, setExpanded] = useState(false)
    
    const onItemPress = () => {
        setExpanded(!expanded)
    }
    return (
        <View style={expanded ? styles.containerCollapsed : styles.containerNotCollapsed}>
            <>
                
                <View style={styles.content}>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Purchase Date</Text>
                            <Text style={styles.value}>{Transaction_Date}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Purchase Unit</Text>
                            <Text style={styles.value}>{Units}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Purchase Nav</Text>
                            <Text style={styles.value}>{Purchase_Price}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Purchase Price</Text>
                            <Text style={styles.value}>{Purchase_Price}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Sell Units</Text>
                            <Text style={styles.value}>{Units}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Sell Nav</Text>
                            <Text style={styles.value}>{Sell_Rate}</Text>
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
                            <Text style={styles.title}>Total Purchase Amt.</Text>
                            <Text style={styles.value}>{Purchase_Amount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>G/L LT (Cash)</Text>
                            <Text style={styles.value}>{GL_LT_Debt}</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total Sell Amt.</Text>
                            <Text style={styles.value}>{Sell_Amount}</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>G/L ST (Cash)</Text>
                            <Text style={[styles.value, { color: '#47b994' }]}>{GL_ST_Debt}</Text>
                        </View>
                    </View>
                </View>
            </CollapsableContainer>
        </View>
    )
}
const styles = StyleSheet.create({
    containerCollapsed: {
      marginTop: 10,
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
