import React from 'react'
import renderer from 'react-test-renderer'
import CryptoItem from '../CryptoItem'
import {cryptoCoinMock, cryptoMetadataMock} from './mock'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Link} from 'react-router-native'
import LinearGradient from 'react-native-linear-gradient'

Enzyme.configure({adapter: new Adapter()})
const wrapper = shallow(<CryptoItem item={cryptoCoinMock}/>)

it('renders CryptoItem using Snapshots', () => {
  const tree = renderer.create(<CryptoItem item={cryptoCoinMock}/>)
  expect(tree).toMatchSnapshot()
})

test('CryptoItem is a react-router-native Link', () => {
  expect(wrapper.find(Link).length).toBe(1)
})

describe('CryptoItem has title', () => {
  expect(wrapper.findWhere(node => node.prop('testID') === 'card-title').text()).toBeTruthy()
})

describe('CryptoItem has symbol', () => {
  expect(wrapper.findWhere(node => node.prop('testID') === 'card-symbol').text()).toBeTruthy()
})

describe('CryptoItem has LinearGradient', () => {
  expect(wrapper.find(LinearGradient).length).toBe(1)
})

