import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import {reducer as formReducer} from 'redux-form';
import {rsvpReducer} from './reducers';

import {loadAuthToken} from './local-storage';
import {setAuthToken} from './actions'

const store = createStore(
	combineReducers({
		rsvp: rsvpReducer,
		form: formReducer
	}),
	compose(applyMiddleware(thunk), devToolsEnhancer())
);

const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
}

export default store;