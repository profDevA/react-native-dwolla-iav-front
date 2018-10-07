import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

class Container extends Component {
	render() {
	    const { children } = this.props;
	    return (
	    	<View style={{ flex: 1 }}>
	    		{children}
			</View>
		)
	}
}

export default Container;