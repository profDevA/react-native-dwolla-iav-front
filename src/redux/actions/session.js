import * as types from '../types'

export function setToken(user) {
  return {
    type: types.TOKEN,
    user
  }
}
