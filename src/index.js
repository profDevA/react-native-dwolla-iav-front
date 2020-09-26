import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import DwollaIAVScreen from './DwollaIAV';
import RegisterCustomerScreen from './RegisterCustomer';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DwollaIAV" component={DwollaIAVScreen} />
        <Stack.Screen name="RegisterCustomer" component={RegisterCustomerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;