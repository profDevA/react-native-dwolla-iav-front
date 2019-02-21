import React, { Component } from 'react'
import { ThemeContext, getTheme } from 'react-native-material-ui'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import AppContainer from './routes'
import { uiTheme } from './themes'
import { getActiveRouteName } from '@lib'

// this component is deprecated
// import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'
// import { GA_TRACKING_ID } from '@config'
// const tracker = new GoogleAnalyticsTracker(GA_TRACKING_ID);

const store = configureStore()

export default class App extends Component {
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
