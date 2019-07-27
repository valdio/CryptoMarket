import React, {Component} from 'react'
import {View, Text, ScrollView, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoDetails'
import AppHeader from '../components/Header'
import {COLORS} from '../template'
import back from '../assets/images/back/back_white.png'
import LinearGradient from 'react-native-linear-gradient'
import CoinCard from '../components/CoinCard'

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
    // const metadata = this.props.metadata && this.props.metadata[this.state.cryptoID] || {}
    const metadata = {
      'urls': {
        'website': ['https://bitcoin.org/'],
        'technical_doc': ['https://bitcoin.org/bitcoin.pdf'],
        'twitter': [],
        'reddit': ['https://reddit.com/r/bitcoin'],
        'message_board': ['https://bitcointalk.org'],
        'announcement': [],
        'chat': [],
        'explorer': ['https://blockchain.coinmarketcap.com/chain/bitcoin', 'https://blockchain.info/', 'https://live.blockcypher.com/btc/', 'https://blockchair.com/bitcoin', 'https://explorer.viabtc.com/btc'],
        'source_code': ['https://github.com/bitcoin/']
      },
      'logo': 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
      'id': 1,
      'name': 'Bitcoin',
      'symbol': 'BTC',
      'slug': 'bitcoin',
      'description': 'Bitcoin (BTC) is a consensus network that enables a new payment system and a completely digital currency. Powered by its users, it is a peer to peer payment network that requires no central authority to operate. On October 31st, 2008, an individual or group of individuals operating under the pseudonym "Satoshi Nakamoto" published the Bitcoin Whitepaper and described it as: "a purely peer-to-peer version of electronic cash, which would allow online payments to be sent directly from one party to another without going through a financial institution."',
      'notice': null,
      'date_added': '2013-04-28T00:00:00.000Z',
      'tags': ['mineable'],
      'platform': null,
      'category': 'coin'
    }
    return (<View style={styles.container}>
      <AppHeader title={crypto.name || 'Crypto'} background={COLORS.HEADER_COLOR}
                 leftImg={back} leftOnPress={() => this.props.history.goBack()}/>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.content}>
          <LinearGradient colors={[COLORS.HEADER_COLOR, COLORS.BLUE, COLORS.LIGHT_BLUE, COLORS.TRANSPARENT]}
                          style={styles.linearGradient}/>
          <CoinCard metadata={metadata}/>
          <View style={styles.detailsSection}>

          </View>
        </View>
      </ScrollView>
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
