import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Icon } from 'react-native-material-ui'
import SearchView from '../../screens/search'

export const searchStack = createStackNavigator({
		Search: { screen: SearchView },
	},{
		defaultNavigationOptions: {
			header: null,
		}
	});

	searchStack.navigationOptions = {
		title: 'Search',
		tabBarIcon: ({ tintColor }) => ( 
			<Icon name="search" size={24} style={{ color: tintColor }} /> 
		),
	};