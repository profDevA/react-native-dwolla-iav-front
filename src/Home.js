import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {
  const [email, setText] = useState('');
  const getCustomerInfo = () => {
    return fetch('http://10.0.2.2:3000/getcustomerinfo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
      })
    })
    .then((response) => response.json())
    .then((json) => {
      if(json.error === false) {
        console.log('success go to iav')
        navigation.navigate('DwollaIAV', {
           email: email, 
           customerId: json.customerId,
           firstName: json.firstName,
           lastName: json.lastName
         })
      } else {
        navigation.navigate('RegisterCustomer', { email: email })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <TextInput
            style={styles.emailbox}
            placeholder="Enter your email address"
            onChangeText={email => setText(email)}
            defaultValue={email}
          />
          <TouchableOpacity
            onPress={() => getCustomerInfo()}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>Go to IAV</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    paddingTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  emailbox: {
    height: 50,
    marginBottom: 50,
    fontSize: 24,
  },

  button: {
    backgroundColor: 'green',
    width: 240,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 24,
  }
});

export default Home;
