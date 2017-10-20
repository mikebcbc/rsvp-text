import {SubmissionError} from 'redux-form';

// TITLE ACTIONS

export const SET_TITLE_HEADER = 'SET_TITLE_HEADER';
export const setTitleHeader = (title, subtitle) => ({
	type: SET_TITLE_HEADER,
	title,
	subtitle
});

// AUTH ACTIONS

const API_BASE_URL = 'https://rsvp-text-me.herokuapp.com';

export const registerUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	.then(res => console.log(res))
	.catch(err => console.log(err))
}

export const login = (user) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/authenticate`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(token => console.log(token.auth_token))
		.catch(err => console.log(err))
	)
}