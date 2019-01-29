import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import Init from '../screens/_init'
import Notification from '../screens/Notification'
import { mainTab } from './mainTab'

import Drawer from '../screens/Drawer' // Drawer Screen

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

const withDrawerNavigator = createDrawerNavigator(
  {
    Main: AppNavigator
  },
  {
    contentComponent: Drawer,
    drawerWidth: 300,
    drawerType: 'front', // 'front', 'back', 'slide'
    drawerBackgroundColor: '#F0F0FF', // default '#FFF'
    contentOptions: {}
  }
)

// const AppContainer = createAppContainer(AppNavigator) // without Drawer - Direct to MainNavigator
const AppContainer = createAppContainer(withDrawerNavigator)

export default AppContainer
