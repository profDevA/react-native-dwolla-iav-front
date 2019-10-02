import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'react-native-material-ui'
import Search from '../screens/search/Search'

export const searchStack = createStackNavigator(
  {
    Search: { screen: Search }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

searchStack.navigationOptions = {
  title: 'Search',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={24} style={{ color: tintColor }} />
  )
}
