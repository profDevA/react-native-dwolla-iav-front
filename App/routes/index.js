import React from 'react';
import { createStackNavigator } from 'react-navigation'

import InitView from '../screens/_init'

import { mainTab } from './maintab'

const OlelangRouter = createStackNavigator({
	Init: { screen: InitView },
	MainTab: mainTab,
},
{
	navigationOptions: {
		header: null,
	}
});

export default OlelangRouter;