import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { Container } from '@components'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class ListView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      searchText: ''
    }
  }

  componentDidMount() {
    console.log('list', this.props)
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Toolbar
          centerElement="List"
          rightElement="notifications"
          onRightElementPress={() => navigate('Notification')}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>List</Text>
        </View>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(
  state => {
    return {
      user: state.user
    }
  },
  mapDispatchToProps
)(ListView)
