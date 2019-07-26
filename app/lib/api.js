const host = 'https://pro-api.coinmarketcap.com';
const api_version = '/v1';

class Api {
  static headers() {
    return {
      //Configure request headers if needed
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    };
  }

  static getWithHeader(route, headerParams) {
    return this.xhr(route, null, 'GET', headerParams);
  }

  static postWithHeader(route, params, headerParams) {
    return this.xhr(route, params, 'POST', headerParams);
  }

  static patchWithHeader(route, params, headerParams) {
    return this.xhr(route, params, 'PATCH', headerParams);
  }

  static postMedia(route, params, headerParams) {
    return this.xhrMedia(route, params, 'POST', headerParams);
  }

  static patchMedia(route, params, headerParams) {
    return this.xhrMedia(route, params, 'PATCH', headerParams);
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT');
  }

  static putWithHeader(route, params, headerParams) {
    return this.xhr(route, params, 'PUT', headerParams);
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE');
  }

  static deleteWithHeader(route, params, headerParams) {
    return this.xhr(route, params, 'DELETE', headerParams);
  }

  static xhr(route, params, verb, headerParams) {
    const url = `${host}${api_version}${route}`;
    let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();
    //if any Extra header params
    if (headerParams) {
      options.headers = {...options.headers, ...headerParams};
    }

    return fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        throw error;
      });
  }

  static xhrMedia(route, params, verb, headerParams) {
    const data = new FormData();
    for (let key of Object.keys(params)) {
      data.append(key, {...params[key]});
    }
    const url = `${host}${api_version}${route}`;
    let options = Object.assign({method: verb}, params ? {body: data} : null);
    options.headers = Api.headers();
    //if any Extra header params
    if (headerParams) {
      options.headers = {...options.headers, ...headerParams};
    }
    return fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      }).catch((error) => {
        throw error;
      });
  }
}

export default Api;
