import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
const Blog = () => {
    const [url, setUrl] = useState('https://www.moneyfront.in/blogs/')
    const [visible, setVisible] = useState(false);

    const ActivityIndicatorElement = () => {
        return (
          <View style={styles.activityIndicatorStyle}>
            <ActivityIndicator color="#009688" size="large" />
          </View>
        );
    };
    
    return (
        <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          //Loading URL
          source={{uri: url}}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
    },
    activityIndicatorStyle: {
      flex: 1,
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
  });

export default Blog