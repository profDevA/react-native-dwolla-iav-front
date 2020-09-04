import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import CartScreen from './Cart';
import TransactionScreen from './Transaction';
import ProfileScreen from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      style={{container: {backgroundColor: 'green'}}}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: '#999999',
        // inactiveBackgroundColor: 'red',
        // activeBackgroundColor: 'transparent',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, size}) => (
            <Icon name="exchange" color={color} size={size * 0.9} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size * 0.9} />
          ),
          tabBarBadge: '10',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
