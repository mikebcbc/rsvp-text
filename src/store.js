import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {rsvpReducer} from './reducers';

export default createStore(
	combineReducers({
		rsvp: rsvpReducer,
		form: formReducer
	}),
	compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	);