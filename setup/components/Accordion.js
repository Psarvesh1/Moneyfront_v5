import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome6'
export default class AccordionView extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.toggleExpanded}>
                <View
                style={this.state.collapsed ? styles.headerCollapsed: styles.headerNotCollapsed}>
                    <Text style={styles.headerText}>Portfolio Summary</Text>
                    <View>
                    {this.state.collapsed ? <Icon name='angle-down' size={20} color='#FFF'/>: <Icon name='angle-up' size={20} color='#FFF'/>}
                    </View>
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={this.state.collapsed} align="center" duration={400}>
                <LinearGradient
                useAngle
                angle={180}
                start={{ x: 1, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#212443', '#454a78' ]} style={styles.content}>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Invested Value</Text>
                            <Text style={styles.value}>17,966.40</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Total Gain/Loss</Text>
                            <Text style={[styles.value, {color: '#47b994'}]}>17,966.40</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Annualized Return</Text>
                            <Text style={styles.value}>17,966.40</Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.data}>
                            <Text style={styles.title}>Market Value</Text>
                            <Text style={styles.value}>17,966.40</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Absolute Return</Text>
                            <Text style={styles.value}>17,966.40</Text>
                        </View>
                        <View style={styles.data}>
                            <Text style={styles.title}>Wtd. Avg. Days</Text>
                            <Text style={styles.value}>17,966.40</Text>
                        </View>
                    </View>
                </LinearGradient>
            </Collapsible>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  headerCollapsed: {
    backgroundColor: '#212443',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  headerNotCollapsed:{
    backgroundColor: '#212443',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF'
  },
  content: {
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: '#222f46',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row'
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