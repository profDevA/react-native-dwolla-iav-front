import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import InitView from '../screens/_init'

import { mainTab } from './maintab'

const AppNavigator = createStackNavigator({
	Init: { screen: InitView },
	MainTab: mainTab,
},
{
	defaultNavigationOptions: {
		header: null,
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;