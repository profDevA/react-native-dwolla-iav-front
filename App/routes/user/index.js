import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import UserView from '../../screens/user'

export const userStack = createStackNavigator({
		UserView: { screen: UserView },
	},{
		defaultNavigationOptions: {
			header: null,
		}
	});

	userStack.navigationOptions = {
		title: 'User',
		tabBarIcon: ({ tintColor }) => ( 
			<Icon name="person" size={24} style={{ color: tintColor }} /> 
		),
	};