import React, { Component } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { Toolbar  } from 'react-native-material-ui'
import { Container }  from '@common'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class UserView extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			searchText: '',
		}
	}
	
	componentDidMount() {
		console.log('user', this.props);
	} 

	render() {
		return (
			<Container>
				<Toolbar
					centerElement="User"
					rightElement="notifications"
					onRightElementPress={() => null }
				/>
				<View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'}}>
					<Text>User</Text>
				</View>
			</Container>
		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ActionCreators, dispatch);
}

export default connect ( (state)=>{
	return {
		user: state.user
	}
}, mapDispatchToProps)(UserView);