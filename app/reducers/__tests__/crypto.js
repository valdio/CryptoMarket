import React from 'react'
import renderer from 'react-test-renderer'
import {crypto} from '../crypto'
import {cryptoListActionMock, cryptoMetadataActionMock} from './mock'

test('Test cryptocurrencies list data', () => {
  expect(crypto({}, cryptoListActionMock)).toEqual({
    list: cryptoListActionMock.response.data
  })
  //test that all the items in the list are inserted in redux store
  expect(crypto({}, cryptoListActionMock).list.length).toBe(cryptoListActionMock.response.data.length)
})

test('Test cryptocurrency metadata details', () => {
  expect(crypto({}, cryptoMetadataActionMock)).toEqual({
    metadata: {[cryptoMetadataActionMock.cryptoID]: cryptoMetadataActionMock.response.data[cryptoMetadataActionMock.cryptoID]}
  })
  //validate the metadata with the provided ID is inserted
  expect(crypto({}, cryptoMetadataActionMock).metadata[cryptoMetadataActionMock.cryptoID]).toBeTruthy()
})
