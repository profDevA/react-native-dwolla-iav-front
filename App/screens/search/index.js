import React, { Component } from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { Toolbar  } from 'react-native-material-ui'
import { Container }  from '@common'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class SearchView extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			searchText: '',
		}
	}
	
	componentDidMount() {
		console.log('search', this.props);
	} 

	render() {
		return (
			<Container>
				<Toolbar
					centerElement="Search"
					rightElement="notifications"
					onRightElementPress={() => null }
				/>
				<View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'}}>
					<Text>Search</Text>
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
}, mapDispatchToProps)(SearchView);