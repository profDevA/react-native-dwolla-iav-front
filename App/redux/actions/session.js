import { AsyncStorage } from 'react-native'
// import { Api }  from '@commons'
import * as types from './types'

export function getToken() {
	return (dispatch, getState) => {
		AsyncStorage.getItem('token')
		.then( token => {
			if (token !== null ) {
				/*
				Api.get(`/auth?token=${token}`).then(res => {
					if ( res.login ) {
						dispatch(setToken({
							token:res.token, 
							user_id: res.user_id, 
						}))
					} 
				}).catch( (ex) => {
					console.log(ex)
				});
				*/
			} 
		});
	}
}

export function setToken(user) {
	return {
		type: types.TOKEN,
		user
	}
}