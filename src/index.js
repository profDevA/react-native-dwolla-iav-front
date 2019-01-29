import React, { Component } from 'react'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducers'
import thunk from 'redux-thunk'
import AppContainer from './routes'
import { uiTheme } from './themes'

// import { GA_TRACKING_ID } from '@config'

// this component is deprecated
// import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
// const tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);

const store = createStore(
  reducer,
  applyMiddleware(
    thunk
    // logger
  )
)

// gets the current screen from navigation state for google tracking
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

export default class App extends Component {
  componentDidMount() {
    // Entry Point of Application
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <AppContainer
            onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = getActiveRouteName(currentState)
              const prevScreen = getActiveRouteName(prevState)
              if (prevScreen !== currentScreen) {
                // due to deprecated component, no more tracking using google analytic
                // tracker.trackScreenView(currentScreen);
              }
            }}
          />
        </ThemeContext.Provider>
      </Provider>
    )
  }
}
