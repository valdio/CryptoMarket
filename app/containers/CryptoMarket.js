import React, {Component} from 'react'
import {View, FlatList} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoMarket'
import CryptoItem from '../components/CryptoItem'
import AppHeader from '../components/Header'
import {COLORS} from '../template'

class CryptoMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 15,
      refreshing: false
    }
  }

  componentDidMount() {
    this.props.getCryptoList(1, this.state.limit)
  }

  render() {
    return (<View style={styles.container}>
      <AppHeader title='Crypto Stats' background={COLORS.HEADER_COLOR}/>
      <FlatList
        data={this.props.cryptoList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CryptoItem item={item}/>}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={0.5}
        onRefresh={this._handleRefresh}
        refreshing={this.state.refreshing}
      />
    </View>)
  }

  _handleLoadMore = () => {
    const dataLength = this.props.cryptoList && (this.props.cryptoList.length || 0)
    const start = dataLength + 1
    this.props.getCryptoList(start, this.state.offset, response => response.error && console.log(response.error))//handle error
  }

  _handleRefresh = () => {
    this.setState({refreshing: true},
      () => {
        this.props.getCryptoList(1, this.state.limit, response => this.setState({refreshing: false}))
      })
  }
}

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto && state.crypto.list || []
  }
}

export default connect(mapStateToProps)(CryptoMarket)
