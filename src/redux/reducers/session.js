import { createReducer } from '@lib'
import * as types from '../types'

export const user = createReducer(null, {
  [types.GET_TOKEN](state, action) {
    // console.log('State ', state,'Action ',action)
    return action.user
  },
  [types.TOKEN](state, action) {
    // console.log('State ', state,'Action ',action)
    return action.user
  }
})
