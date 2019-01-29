import { StyleSheet } from 'react-native'
import { COLOR } from 'react-native-material-ui'

// Top Tab bar options on Sell and Bid -- main index.js
export const topTabOptions = {
  activeTintColor: COLOR.blue600,
  inactiveTintColor: COLOR.grey700,
  showIcon: false,
  upperCaseLabel: false,
  tabStyle: {
    flex: 0,
    // backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10
  },
  style: {
    // height: 64,
    backgroundColor: COLOR.grey100,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLOR.grey300,
    // paddingBottom: 5,
    // paddingTop: 20,
    justifyContent: 'center',
    height: 40,
    paddingVertical: 0,
    shadowOpacity: 0,
    elevation: 0
  },
  labelStyle: {
    fontSize: 13,
    margin: 0,
    paddingHorizontal: 10
  },
  // Android
  indicatorStyle: {
    display: 'none',
    backgroundColor: COLOR.transparent
  }
}

// Bottom Navigation TabBar Options -- main index.js
export const bottomTabOptions = {
  activeTintColor: COLOR.blue600,
  style: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLOR.blue50
  },
  labelStyle: {
    marginTop: -5,
    marginBottom: 5
  }
}
