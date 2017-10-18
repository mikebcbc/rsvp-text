import {SubmissionError} from 'redux-form';

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

// export const registerUser = user => dispatch => {
//     return fetch(`${API_BASE_URL}/users`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });
// };