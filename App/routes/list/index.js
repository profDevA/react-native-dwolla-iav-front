import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import ListView from '../../screens/list'

export const listStack = createStackNavigator({
		List: { screen: ListView },
	},{
		defaultNavigationOptions: {
			header: null,
		}
	});

	listStack.navigationOptions = {
		title: 'List',
		tabBarIcon: ({ tintColor }) => ( 
			<Icon name="list" size={24} style={{ color: tintColor }} /> 
		),
	};