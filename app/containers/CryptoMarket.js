import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoMarket'
import CryptoItem from '../components/CryptoItem'

class CryptoMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 15
    }
  }

  componentDidMount() {
    // this.props.getCryptoList(1, this.state.limit)
  }

  render() {
    console.log(this.props.cryptoList)
    return (<View style={styles.container}>
      <CryptoItem item={this.props.cryptoList[0]}/>
    </View>)
  }
}

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto && state.crypto.list || []
  }
}

export default connect(mapStateToProps)(CryptoMarket)
