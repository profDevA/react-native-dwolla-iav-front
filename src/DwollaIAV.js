import React, { useState, useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Toolbar } from 'components';
import Dwolla from 'react-dwolla-iav';
import { WebView } from 'react-native-webview';


const DwollaIAV = ({ route, navigation }) => {
  const [started, setStarted] = useState(false);
  const [customerToken, setCustomerTocken] = useState('')
  const { email, customerId, firstName, lastName } = route.params;
  const webviewRef = useRef(null)

  const runFirst = `
      $(document).ready(function() {
        $('#start').click();
      })
      true; // note: this is required, or you'll sometimes get silent failures
    `;
 
   const getIAVTocken = () => {
    console.log('request create iav token')
    return fetch('http://10.0.2.2:3000/createiavtoken', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerId: customerId,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log({ tokencreated: json.iavToken })
        setCustomerTocken(json.iavToken);
        setStarted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      {
        started ?
          <View style={styles.iavContainer}>
            <WebView
              ref={webviewRef}
              originWhitelist={['*']}
              source={{ uri: 'http://10.0.2.2:3000' }}
              style={styles.webView}
              injectedJavaScript={runFirst}
            />
            <Text style={{ backgroundColor: 'red', color: 'black' }}>Thisis dwolla components</Text>
          </View>
          :
          <View style={styles.body}>
            <Text style={styles.welcomeText}>Welcome to Dwolla IAV verification</Text>
            <TouchableOpacity style={styles.startButton} onPress={getIAVTocken}>
              <Text style={styles.startBtText}>Start IAV</Text>
            </TouchableOpacity>
          </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 8
  },
  iavContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  webView: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    flex: 1,
    // alignSelf: 'stretch'
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'green',
    marginTop: 50,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: 80,
  },
  startButton: {
    flexDirection: 'row',
    width: 240,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  startBtText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default DwollaIAV;
