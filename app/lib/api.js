const host = 'https://pro-api.coinmarketcap.com';
const api_version = '/v1';
import {CREDENTIALS} from './.credentials.js';

class Api {
  static headers() {
    return {
      //Configure request headers
      'Accept': 'application/json',
      'X-CMC_PRO_API_KEY': `${CREDENTIALS.COIN_MARKET_CAP_KEY}`,
    };
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  //Execute HTTP Request
  static xhr(route, params, verb) {
    const url = `${host}${api_version}${route}`;
    let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();

    return fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default Api;
