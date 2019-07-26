import * as types from './types'
import Api from '../lib/api'
import {buildResponse} from '../lib/responseObject'

/**
 * Get a paginated list of all active cryptocurrencies with latest market data.
 * @param start Offset of the start index of the pagination
 * @param limit Number of cryptocurrencies to request (pagination size).
 * @param callback
 * @returns {function(*, *): Promise<T>}
 */
export function getCryptoList(start = 1, limit = 15, callback) {
  return (dispatch, getState) => {
    return Api.get(`/cryptocurrency/listings/latest?start=${start}&limit=${limit}`).then(response => {
      if (response && response.data) {
        callback && callback(buildResponse(response, undefined))
        dispatch(cryptocurrenciesReceived(response, start === 1))
      } else
        callback && callback(buildResponse(undefined, response.error || 'Default error message'))
    }).catch((exception) => {
      //handle exception
      callback && callback(buildResponse(undefined, 'Default error message'))
    })
  }
}

function cryptocurrenciesReceived(response, isFirstPageLoad) {
  return {
    type: types.LIST_CRYPTOCURRENCIES,
    response,
    isFirstPageLoad
  }
}


