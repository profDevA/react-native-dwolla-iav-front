import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { Divider, Toolbar, COLOR } from 'react-native-material-ui'
import axios from 'axios'
import { Container } from '@components'

export default class FlatlistView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      items: [],
      info: { page: 1, pages: 1 }, // set manual
      page: 1,
      error: null,
      loading: true,
      refreshing: false
    }
  }

  componentDidMount() {
    this.makeRemoteRequest()
  }

  makeRemoteRequest = () => {
    const { page } = this.state

    axios
      .get('https://jsonplaceholder.typicode.com/users', {
        params: { p: page, rpp: 10 }
      })
      .then(response => {
        let res = response.data
        console.log(res)
        this.setState({
          items: page === 1 ? res : [...this.state.items, ...res], // for load more
          // info: res.info,
          loading: false,
          refreshing: false
        })
      })
      .catch(ex => {
        if (!ex.response) {
          this.props.error({ message: 'Koneksi error' })
        } else if (ex.response.status == 401) {
          this.setState({
            error: ex.response.data,
            loading: false,
            refreshing: false
          })
          Signout(this.props)
        } else {
          this.setState({
            error: ex.response.data,
            loading: false,
            refreshing: false
          })
        }
      })
  }

  handleRefresh = () => {
    this.setState({ page: 1, refreshing: true }, () => {
      this.makeRemoteRequest()
    })
  }

  handleLoadMore = () => {
    if (this.state.page < this.state.info.pages && !this.state.loading) {
      this.setState({ page: this.state.page + 1, loading: true }, () => {
        this.makeRemoteRequest()
      })
    }
  }

  renderFooter = () => {
    if (this.state.loading)
      return (
        <View style={styles.status}>
          <ActivityIndicator animating size="large" />
        </View>
      )
    else {
      return null
    }
  }

  render() {
    return (
      <Container>
        <Toolbar
          centerElement="Flastlist using Axios Sample"
          rightElement="notifications"
          onRightElementPress={() => navigate('Notification')}
        />
        <FlatList
          style={styles.flatlist}
          data={this.state.items}
          renderItem={({ item }) => this._renderItem(item)}
          keyExtractor={(item, index) => item.id.toString()}
          ItemSeparatorComponent={() => <Divider />}
          extraData={a => {
            return null
          }}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.noData}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.05}
        />
      </Container>
    )
  }

  _renderItem = item => {
    return (
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 15
        }}
      >
        <View style={styles.row}>
          <Text style={{ flex: 1, color: COLOR.orange700 }}>{item.name}</Text>
          <Text style={{ color: COLOR.grey500 }}>{item.company.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{ color: COLOR.grey500 }}>
            {item.address.city} {item.address.zipcode}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 4
  },
})
