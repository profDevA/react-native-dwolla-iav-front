import {NavigationActions, StackActions} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import {homeStack} from './homeStack';
import {searchStack} from './searchStack';
import {flatlistStack} from './flatlistStack';
import {profileStack} from './profileStack';

import {bottomTabOptions} from './options';

export const mainTab = createBottomTabNavigator(
  {
    HomeStack: homeStack,
    SearchStack: searchStack,
    FlatlistStack: flatlistStack,
    ProfileStack: profileStack,
  },
  {
    lazy: true,
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: bottomTabOptions,

    defaultNavigationOptions: ({navigation}) => ({
      tabBarOnPress: tab => {
        const {isFocused, state, dispatch} = tab.navigation;

        if (isFocused()) {
          if (state.index !== 0) {
            dispatch(StackActions.popToTop());
          } else {
            dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({
                    routeName: state.routes[0].routeName,
                  }),
                ],
                key: state.key,
              }),
            );
          }
        } else {
          dispatch(NavigationActions.navigate({routeName: state.routeName}));
        }
      },
    }),
  },
);
