import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import HomeView from '../screens/home/Home'

export const homeStack = createStackNavigator(
  {
    Home: { screen: HomeView }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

homeStack.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={24} style={{ color: tintColor }} />
  )
}
