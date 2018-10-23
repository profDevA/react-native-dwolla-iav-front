import { Platform } from 'react-native'
import { COLOR } from 'react-native-material-ui'
import { isIphoneX } from '@commons'

export const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: Platform.OS === 'ios' ? (isIphoneX() ? 84 : 64) : 74, 
    	paddingTop:  Platform.OS === 'ios' ? (isIphoneX() ? 39 : 20) : 24,
      elevation: 0,
      shadowColor: COLOR.transparent,
      zIndex: 0,
      backgroundColor: COLOR.blue700,
    },
    titleText: {
    	fontSize: 15,
    	fontWeight: "400",
      	letterSpacing: 1,
    }
  },
};