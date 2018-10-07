import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigator from './routes'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
import { ONESIGNAL_ID, GA_TRACKING_ID } from '@config'

const tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);

const store = createStore(
  reducer, 
  applyMiddleware(
    thunk,
    // logger
  )
);

// gets the current screen from navigation state for google tracking
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default class App extends Component {
  componentDidMount() {
    // Entry Point of Application
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator 
          onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = getActiveRouteName(currentState);
            const prevScreen = getActiveRouteName(prevState);
            if (prevScreen !== currentScreen) {
              tracker.trackScreenView(currentScreen);
            }
          }}
        />
      </Provider>
    );
  }
}