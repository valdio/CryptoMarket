import React, {Component} from 'react'
import {View, Text, FlatList, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoDetails'
import AppHeader from '../components/Header'
import {COLORS} from '../template'
import back from '../assets/images/back/back_white.png'

class CryptoDetails extends Component {
  constructor(props) {
    super(props)
    const cryptoID = this.props.match.params.id || 1
    this.state = {
      cryptoID
    }
  }

  render() {
    const crypto = this.props.cryptoList.find(item => item.id === this.state.cryptoID) || {}
    console.log(crypto)

    return (<View style={styles.container}>
      <AppHeader title={crypto.name || 'Crypto'} background={COLORS.HEADER_COLOR}
                 leftImg={back} leftOnPress={() => this.props.history.goBack()}

      />

    </View>)
  }
}

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto && state.crypto.list || []
  }
}

export default connect(mapStateToProps)(CryptoDetails)
