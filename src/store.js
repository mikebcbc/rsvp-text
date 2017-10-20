import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension/developmentOnly';
import {reducer as formReducer} from 'redux-form';
import {rsvpReducer} from './reducers';

export default createStore(
	combineReducers({
		rsvp: rsvpReducer,
		form: formReducer
	}),
	compose(applyMiddleware(thunk), devToolsEnhancer())
	);