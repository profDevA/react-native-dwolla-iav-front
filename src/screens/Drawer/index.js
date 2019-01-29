import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Toolbar } from 'react-native-material-ui'

export default class Drawer extends Component {
  static navigationOptions = {
    drawerLabel: 'Drawer',
    drawerIcon: ({ tintColor }) => (
      <Text style={{ color: tintColor }}>Icon</Text>
    )
  }

  componentDidMount() {
    console.log('Drawer', this.props)
  }

  render() {
    const { closeDrawer } = this.props.navigation
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          rightElement="chevron-left"
          onRightElementPress={() => closeDrawer()}
          centerElement="Drawer"
        />
        <View style={styles.container}>
          <Text>Drawer Content</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
