import { createReducer } from '@commons'
import * as types from '../actions/types'


export const user = createReducer( null, {
	[types.GET_TOKEN](state,action) {
		// console.log('State ', state,'Action ',action)
		return action.user;
	},
	[types.TOKEN](state,action) {
		// console.log('State ', state,'Action ',action)
		return action.user;
	}
})