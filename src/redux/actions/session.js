import { AsyncStorage } from 'react-native'
// import { Api }  from '@lib'
import * as types from '../types'

export function setToken(user) {
  return {
    type: types.TOKEN,
    user
  }
}
