import React from 'react'
import {COLORS, Spacing, Typography} from '../../template'
import {DEVICE} from '../../lib/device'

export default {
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingVertical: 40
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    right: 0, left: 0,
    height: DEVICE.HEIGHT
  },
  detailsSection: {
    ...Spacing.section,
    marginTop:20
  },
  readMore: {},
  urlSection: {
    marginHorizontal: 6
  },
  linkSectionTitle: {
    fontSize: 18,
    marginTop: 6
  },
  link: {
    color: COLORS.BLUE,
    marginTop: 4
  }
}
