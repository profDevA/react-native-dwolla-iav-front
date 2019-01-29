import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { Container } from '@components'

// redux stuffs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../redux/actions'

class NotificationView extends Component {
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
    const { goBack } = this.props.navigation

    return (
      <Container>
        <Toolbar
          leftElement="chevron-left"
          onLeftElementPress={() => goBack()}
          centerElement="Notification"
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Notification List here</Text>
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
)(NotificationView)
