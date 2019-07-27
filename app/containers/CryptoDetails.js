import React, {Component} from 'react'
import {View, Text, FlatList, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoDetails'
import AppHeader from '../components/Header'
import {COLORS} from '../template'
import back from '../assets/images/back/back_white.png'
import LinearGradient from 'react-native-linear-gradient'

class CryptoDetails extends Component {
  constructor(props) {
    super(props)
    const cryptoID = this.props.match.params.id || 1
    this.state = {
      cryptoID
    }
  }

  componentDidMount() {
    //refresh crypto metadata in redux store, if any
    // this.props.getCryptoMetadata(this.state.cryptoID)
  }

  render() {
    const crypto = this.props.cryptoList.find(item => item.id === this.state.cryptoID) || {}
    const metadata = this.props.metadata && this.props.metadata[this.state.cryptoID] || {}
    console.log(crypto)
    console.log(metadata)

    return (<View style={styles.container}>
      <AppHeader title={crypto.name || 'Crypto'} background={COLORS.HEADER_COLOR}
                 leftImg={back} leftOnPress={() => this.props.history.goBack()}/>
      <View style={styles.content}>
        <LinearGradient colors={[COLORS.HEADER_COLOR, COLORS.BLUE, COLORS.LIGHT_BLUE, COLORS.TRANSPARENT]}
                        style={styles.linearGradient}/>

      </View>
    </View>)
  }
}

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto && state.crypto.list || [],
    metadata: state.crypto && state.crypto.metadata
  }
}

export default connect(mapStateToProps)(CryptoDetails)
