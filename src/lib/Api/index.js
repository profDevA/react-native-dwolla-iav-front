import { API_URL } from '@config'

class Api {
  // ------------------------------------------------------------------------------------
  // application/json only
  static headers(token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
      token: token
    }
  }

  static get(route, token) {
    return this.xhr(route, null, 'GET', token)
  }

  static put(route, params, token) {
    return this.xhr(route, params, 'PUT', token)
  }

  static post(route, params, token) {
    return this.xhr(route, params, 'POST', token)
  }

  static delete(route, params, token) {
    return this.xhr(route, params, 'DELETE', token)
  }

  static xhr(route, params, verb, token) {
    const host = API_URL
    const url = `${host}${route}`
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null
    )
    options.headers = Api.headers(token || null)
    return fetch(url, options)
      .then(resp => {
        // console.log(resp)
        let json = resp.json()
        if (resp.ok) {
          return json
        }
        return json.then(err => {
          throw err
        })
      })
      .then(json => json.results)
  }

  // ------------------------------------------------------------------------------------
  // Multipart/data (upload and using new FormData() )
  static form(route, params, token) {
    return this.xhrform(route, params, 'POST', token)
  }

  static multipart_headers(token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      dataType: 'json',
      token: token
    }
  }

  static xhrform(route, params, verb, token) {
    const host = API_URL
    const url = `${host}${route}`
    let options = Object.assign(
      { method: verb },
      params ? { body: params } : null
    )
    options.headers = Api.multipart_headers(token || null)
    return fetch(url, options)
      .then(resp => {
        let json = resp.json()
        if (resp.ok) {
          return json
        }
        return json.then(err => {
          throw err
        })
      })
      .then(json => json.results)
  }
}

export default Api
