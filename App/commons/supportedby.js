import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { COLOR  } from 'react-native-material-ui'

export default class SupportedByView extends PureComponent {

	render() {
		return(
			<View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center', paddingVertical: 10 }}>
				<Text style={{ color: COLOR.grey500, fontSize: 12 }}>Supported by:</Text>
				<View style={{ width: 5 }} />
				<TouchableOpacity onPress={ () => { Linking.openURL('https://www.crowdbotics.com/'); } }>
					<Text style={{ color: COLOR.orange500 }}>Crowdbotics</Text>
				</TouchableOpacity>
			</View>
		);
	}

}