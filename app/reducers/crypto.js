import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const crypto = createReducer({}, {
  // Can be used to catch the redux re-hydration event and reset the redux cache if needed. Used in development only!
  // [types.REHYDRATE](state, action) {
  //   return {
  //     ...state
  //   }
  // },
  [types.LIST_CRYPTOCURRENCIES](state, action) {
    const cryptos = action.response && action.response.data || []
    //simple validation to check if the data has already been inserted in the redux cache
    const itemsAlreadyInserted = state.list && cryptos[0] && state.list.find(item => item.id === cryptos[0].id)
    return {
      ...state,
      list: action.isFirstPageLoad ? cryptos //reset the array of data
        : itemsAlreadyInserted ? [...state.list] : [...state.list, ...cryptos] // append new data to the existing ones
    }
  },
  [types.CRYPTO_META_DATA](state, action) {
    const metadata = action.response && action.response.data && action.response.data[action.cryptoID] || {}
    return {
      ...state,
      metadata: {
        ...state.metadata,
        [action.cryptoID]: metadata
      }
    }
  }
})
