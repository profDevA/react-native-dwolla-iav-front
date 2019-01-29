import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import Flatlist from '../screens/flatlist/Flatlist'

export const flatlistStack = createStackNavigator(
  {
    Flatlist: { screen: Flatlist }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

flatlistStack.navigationOptions = {
  title: 'Flatlist',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={24} style={{ color: tintColor }} />
  )
}
