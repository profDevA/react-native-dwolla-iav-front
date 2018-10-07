import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../actions'

class InitView extends Component {
	constructor(props, context) {
		super(props, context);
	}

	componentDidMount() {
		console.log('Init',this.props);

		// this.props.getToken(); // Initial set token
		this._navigateTo('MainTab')
	}

	_navigateTo = (routeName: string) => {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName })]
		})
		this.props.navigation.dispatch(resetAction);
	}

	render() {
		return null
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect ( (state)=>{
	return {
		user: state.user
	}
}, mapDispatchToProps)(InitView);