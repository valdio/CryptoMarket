import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {COLORS, Spacing, Typography} from '../template'
import FastImage from 'react-native-fast-image'

export default CoinCard = ({metadata} = props) => {
  return (<View style={styles.container}>
    <View style={styles.iconContainer}>
      <FastImage
        testID="card-coinIcon"
        style={styles.coinIcon}
        source={{uri: metadata.logo || '', priority: FastImage.priority.normal}}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
    <View style={styles.content}>
      <Text style={styles.cardTitle} testID="card-title">{metadata.name}</Text>
      <Text style={styles.description} testID="card-description">{metadata.description}</Text>
      <View style={styles.tagsHolder}>
        {metadata.tags && metadata.tags.map(tag => <Text key={tag} style={styles.tag}>{tag}</Text>)}
      </View>
    </View>
  </View>)
}

export const styles = StyleSheet.create({
  container: {
    ...Spacing.horizontalSpacing,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE
  },
  content: {
    ...Spacing.section,
    alignItems: 'flex-start'
  },
  iconContainer: {
    backgroundColor: COLORS.WHITE,
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: COLORS.WHITE,
    position: 'absolute',
    marginTop: -32,
    marginHorizontal: 10
  },
  coinIcon: {
    height: 60,
    width: 60
  },
  cardTitle: {
    ...Typography.boldText,
    color: COLORS.DARK_TEXT_COLOR,
    fontSize: 20,
    marginBottom: 6
  },
  description: {
    fontSize: 14,
    color: COLORS.FADED_TEXT_COLOR
  },
  tagsHolder: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    marginBottom: 6
  },
  tag: {
    ...Typography.boldText,
    color: COLORS.GREEN,
    marginHorizontal: 5,
    lineHeight: 17
  }
})

