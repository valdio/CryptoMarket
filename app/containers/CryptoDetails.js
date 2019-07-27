import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native'
import {connect} from 'react-redux'
import styles from './styles/cryptoDetails'
import AppHeader from '../components/Header'
import {COLORS} from '../template'
import back from '../assets/images/back/back_white.png'
import LinearGradient from 'react-native-linear-gradient'
import CoinCard from '../components/CoinCard'
import {firstLetterToUpperCase} from '../utils/textUtils'

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
    this.props.getCryptoMetadata(this.state.cryptoID)
  }

  render() {
    const crypto = this.props.cryptoList.find(item => item.id === this.state.cryptoID) || {}
    const metadata = this.props.metadata && this.props.metadata[this.state.cryptoID] || {}
    return (<View style={styles.container}>
      <AppHeader title={crypto.name || 'Crypto'} background={COLORS.HEADER_COLOR}
                 leftImg={back} leftOnPress={() => this.props.history.goBack()}/>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.content}>
          <LinearGradient colors={[COLORS.HEADER_COLOR, COLORS.BLUE, COLORS.LIGHT_BLUE, COLORS.TRANSPARENT]}
                          style={styles.linearGradient}/>
          <CoinCard metadata={metadata}/>
          <View style={styles.detailsSection}>
            <Text style={styles.readMore}>Read more...</Text>
            {this._renderCoinUrls(metadata.urls)}
          </View>
        </View>
      </ScrollView>
    </View>)
  }

  _renderCoinUrls = (urls) => {
    const validData = urls && Object.keys(urls).filter(key => !!(urls[key] && urls[key].length > 0))//filter out only data that have valid URLs
    return <View style={styles.urlSection}>
      {validData && validData.map(item => <View key={item}>
        <Text style={styles.linkSectionTitle}>{firstLetterToUpperCase(item).replace(/_/g, ' ')}</Text>
        {urls[item].map(url => <TouchableOpacity
          key={url} onPress={() => Linking.openURL(url)}><Text style={styles.link}
                                                               numberOfLines={1}>{url}</Text></TouchableOpacity>)}
      </View>)}
    </View>
  }

}

function mapStateToProps(state) {
  return {
    cryptoList: state.crypto && state.crypto.list || [],
    metadata: state.crypto && state.crypto.metadata
  }
}

export default connect(mapStateToProps)(CryptoDetails)
