import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Toolbar, COLOR  } from 'react-native-material-ui'
import { Container, SupportedBy }  from '@commons'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class HomeView extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			searchText: '',
		}
	}
	
	componentDidMount() {
		console.log('home', this.props);
	} 

	_logo () {
		return(
			<View>
				<Text style={{ color: '#FFF', letterSpacing: 1 }}>RNSail</Text>
			</View>
		)
	}

	_navigate = (screenTo, params) => {
		this.setState({ screen: screenTo, params: params } );
	}

	render() {
		return (
			<Container>
				<Toolbar
					centerElement={ this._logo() } 
					rightElement="notifications"
					onRightElementPress={() => null }
					searchable={{
						autoFocus: true,
						placeholder: 'Cari',
						onChangeText: (a) => this.setState({ searchText: a }),
						// onSubmitEditing: () => navigate('SearchResult',{search: this.state.searchText }),
						onSubmitEditing: () => this.setState({ screen: 'search', search: this.state.searchText } ),
						onSearchClosed: () => this._navigate('main'),
					}}
				/>
				<View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'}}>
					<Text>Home</Text>
				</View>
				<SupportedBy />
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
}, mapDispatchToProps)(HomeView);