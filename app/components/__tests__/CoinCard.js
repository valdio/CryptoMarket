import React from 'react'
import renderer from 'react-test-renderer'
import CoinCard from '../CoinCard'
import {cryptoMetadataMock} from './mock'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Text, View} from 'react-native'
import {styles} from '../CoinCard'
import FastImage from 'react-native-fast-image'

Enzyme.configure({adapter: new Adapter()})
const wrapper = shallow(<CoinCard metadata={cryptoMetadataMock}/>)

it('renders CoinCard using Snapshots', () => {
  const tree = renderer.create(<CoinCard metadata={cryptoMetadataMock}/>)
  expect(tree).toMatchSnapshot()
})

test('CoinCard renders title', () => {
  expect(wrapper.contains(<Text style={styles.cardTitle}
                                testID="card-title">{cryptoMetadataMock.name}</Text>)).toBe(true)
})

test('CoinCard has Text components: title, description & crypto-tag', () => {
  expect(wrapper.find(Text).length).toBe(3)
})

describe('CoinCard has cryptocurrency icon', () => {
  expect(wrapper.find(FastImage).length).toBe(1)
})

describe('CoinCard has title', () => {
  expect(wrapper.findWhere(node => node.prop('testID') === 'card-title').text()).toBeTruthy()
})

describe('CoinCard has description', () => {
  expect(wrapper.findWhere(node => node.prop('testID') === 'card-description').text()).toBeTruthy()
})
