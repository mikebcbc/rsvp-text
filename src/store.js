import {createStore} from 'redux'

import {rsvpReducer} from './reducers';

export default createStore(
	rsvpReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());