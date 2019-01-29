import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import Profile from '../screens/profile/Profile'

export const profileStack = createStackNavigator(
  {
    Profile: { screen: Profile }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

profileStack.navigationOptions = {
  title: 'Profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} style={{ color: tintColor }} />
  )
}
