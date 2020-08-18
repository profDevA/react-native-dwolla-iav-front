import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from './Home';
import CartScreen from './Cart';
import TransactionScreen from './Transaction';
import ProfileScreen from './Profile';
import SplashScreen from './Splash';
import SignInScreen from './Signin';
import AuthContext from 'helpers/AuthContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useMemo(() => {
    async function checkUser() {
      let userData;
      try {
        userData = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      setUser(userData);
      setLoading(false);
    }
    checkUser();
  }, []);

  const signIn = (data) => {
    setUser(data);
  };

  const signOut = () => {
    setUser(null);
  };

  const Tab = createBottomTabNavigator();
  const MainTab = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{
            tabBarLabel: 'Transaction',
            tabBarIcon: ({color, size}) => (
              <Icon name="exchange" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const Stack = createStackNavigator();

  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {loading ? (
            <Stack.Screen name="Welcome" component={SplashScreen} />
          ) : (
            <>
              <Stack.Screen name="Home" component={MainTab} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
