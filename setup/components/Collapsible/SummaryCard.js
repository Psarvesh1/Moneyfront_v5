import React, { useState } from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated"
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome6'
import Portfolio_Summary from '../../../assets/images/portfolio_summary.png'

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
const SummaryCard = ({ InvestedAmount, GainLoss, AnnualizedReturn, MarketValue, AbsoluteReturn, WeightedAvgDays }) => {
  const [expanded, setExpanded] = useState(false)

  const onItemPress = () => {
    setExpanded(!expanded)
  }
  // console.log('summary hai' + summary)

  return (
    <View style={expanded ? styles.containerCollapsed : styles.containerNotCollapsed}>
      <TouchableWithoutFeedback onPress={onItemPress}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={[styles.imageContainer]}>
          <Image source={Portfolio_Summary} resizeMode="contain" style={{width: 20, height: 20}}/>
          </View>
          <Text style={styles.headerText}>Portfolio Summary</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            {expanded ? <Icon name='angle-up' size={15} color='#FFF' /> : <Icon name='angle-down' size={15} color='#FFF' />}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <CollapsableContainer expanded={expanded}>
        <View style={styles.content}>
          <View style={styles.column}>
            <View style={styles.data}>
              <Text style={styles.title}>Invested Value</Text>
              <Text style={styles.value}>{InvestedAmount}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Total Gain/Loss</Text>
              <Text style={[styles.value, { color: '#47b994' }]}>{GainLoss}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Annualized Return</Text>
              <Text style={styles.value}>{AnnualizedReturn}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.data}>
              <Text style={styles.title}>Market Value</Text>
              <Text style={styles.value}>{MarketValue}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Absolute Return</Text>
              <Text style={styles.value}>{AbsoluteReturn}</Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.title}>Wtd. Avg. Days</Text>
              <Text style={styles.value}>{WeightedAvgDays}</Text>
            </View>
          </View>
        </View>
      </CollapsableContainer>
    </View>
  )
}
export default SummaryCard;
const styles = StyleSheet.create({
    containerCollapsed: {
      marginTop: 30,
      backgroundColor: '#212443',
      borderRadius: 5,
      padding: 20,
    },
    containerNotCollapsed: {
        marginTop: 30,
        backgroundColor: '#212443',
        padding: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        borderRadius: 5,
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    headerText: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '500',
      color: '#FFF',
      marginLeft: 10
    },
    imageContainer:{
      backgroundColor: '#FFF',
      width: 30,
      height: 30,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    content: {
      paddingLeft: 20,
      paddingRight: 10,
      paddingBottom: 20,
      backgroundColor: '#222f46',
      flexDirection: 'row',
      marginTop: 10
    },
    column: {
      flexDirection: 'column',
      width: '50%'
    },
    data: {
      flexDirection: 'column',
      marginTop: 12
    },
    title: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      opacity: 0.6
    },
    value: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 600
    }
  });
