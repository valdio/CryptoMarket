import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {COLORS, Spacing, Typography} from '../template'
import rate_down from '../assets/images/rate/rate_down.png'
import rate_up from '../assets/images/rate/rate_up.png'
import LinearGradient from 'react-native-linear-gradient'
import {Link} from 'react-router-native'
import {ROUTE} from '../lib/routing/routes'

export default CryptoItem = ({item} = props) => {
  const quoteUSD = item && item.quote && item.quote.USD || {}//inline validation
  return (<Link to={`${ROUTE.CRYPTO_DETAILS_TAG}/${item.id}`}
                underlayColor={COLORS.BACKGROUND}><View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.symbolContainer}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
      </View>
      <Text style={styles.cryptoName}>{item.name}</Text>
      <View style={styles.statsHolder}>
        {renderQuoteChange(quoteUSD.percent_change_1h, 'hour')}
        {renderQuoteChange(quoteUSD.percent_change_24h, 'day')}
        {renderQuoteChange(quoteUSD.percent_change_7d, 'week')}
      </View>
    </View>
    <LinearGradient colors={[COLORS.TRANSPARENT, COLORS.LIGHT_BLUE, COLORS.BLUE]} style={styles.linearGradient}/>
  </View>
  </Link>)
}

const renderQuoteChange = (percentage, percentageDetails) => !percentage ? <View/> :
  <View style={styles.quoteContainer}>
    <Image style={styles.quoteImage} source={percentage < 0 ? rate_down : rate_up}/>
    <View style={{alignItems: 'center'}}>
      <Text stule={styles.quotePercentage}>{percentage.toFixed(2)}%</Text>
      <Text style={styles.quotePercentageDetails}>$/{percentageDetails}</Text>
    </View>
  </View>


const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    marginBottom: 12,
    marginHorizontal: 10
  },
  content: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  symbolContainer: {
    backgroundColor: COLORS.LIGHT_BLUE,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  symbolText: {
    ...Typography.boldText,
    color: COLORS.BLUE_TEXT
  },
  cryptoName: {
    ...Typography.sectionTitle,
    marginHorizontal: 6

  },
  statsHolder: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },

  //quote change
  quoteContainer: {
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quotePercentage: {
    fontSize: 12,
    color: COLORS.LIGHT_BLUE
  },
  quoteImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  quotePercentageDetails: {
    color: COLORS.LIGHT_BLUE,
    fontSize: 10
  },

  linearGradient: {
    position: 'absolute',
    top: 0, bottom: 0,
    flex: 1,
    right: 0, left: 0,
    borderRadius: 6,
    opacity: .1
  }
})

