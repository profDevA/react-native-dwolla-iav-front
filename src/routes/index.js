import { createStackNavigator, createAppContainer } from 'react-navigation'

import Init from '../screens/_init'
import Notification from '../screens/Notification'

import { mainTab } from './mainTab'

const AppNavigator = createStackNavigator(
  {
    Init: { screen: Init },
    MainTab: mainTab,
    Notification: { screen: Notification }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
