import React from 'react';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import comingsoon from '../../assets/images/coming-soon.png'
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const ComingSoon = () => {
    const openURI = async () => {
        const url = "https://www.moneyfront.in/"
        const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
        if (supported) {
        await Linking.openURL(url); // It will open the URL on browser.
        } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }
    return(
        <ImageBackground source={comingsoon} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
        We're excited to have you try our Beta Version!
        In the meantime, you can complete your investment by visiting our website.      
    </Text>
    <TouchableOpacity onPress={openURI}>
        <Text style={[styles.text, {marginTop: 10, color: 'green'}]}>Click Here to Visit</Text>
    </TouchableOpacity>
    </ImageBackground>
    )
}
  
export default ComingSoon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center'
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18
  },
});

