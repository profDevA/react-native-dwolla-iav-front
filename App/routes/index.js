import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import InitView from '../screens/_init'
import NotificationView from '../screens/notification'

import { mainTab } from './maintab'

const AppNavigator = createStackNavigator({
	Init: { screen: InitView },
	MainTab: mainTab,
	Notification: { screen: NotificationView},
},
{
	defaultNavigationOptions: {
		header: null,
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;