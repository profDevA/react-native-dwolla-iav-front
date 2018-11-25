import React from 'react'
import { createBottomTabNavigator, NavigationActions, StackActions } from 'react-navigation'

import { homeStack } from './home' 
import { searchStack } from './search'
import { listStack } from './list'
import { userStack } from './user'

import { bottomTabOptions } from './options'

export const mainTab = createBottomTabNavigator({
		Home: homeStack,
		Search: searchStack,
		List: listStack,
		User: userStack,
	},{
		lazy: true,
		swipeEnabled: false,
		animationEnabled: false,
		tabBarOptions: bottomTabOptions,

		defaultNavigationOptions: ({ navigation }) => ({
			tabBarOnPress: (tab) => {
				const { isFocused, state, dispatch } = tab.navigation;

				if ( isFocused() ) {
					if (state.index !== 0) {
						dispatch(StackActions.popToTop())
					} else {
						dispatch(StackActions.reset({
							index: 0,
							actions: [
								NavigationActions.navigate({ routeName: state.routes[0].routeName }) 
							]
						}))
					}
				} else {
					// dispatch(NavigationActions.navigate({ routeName: state.routeName }));
					dispatch(NavigationActions.navigate({ routeName: state.routeName }));
				}
			},
		}),

	});