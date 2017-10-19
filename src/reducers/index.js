import {SET_TITLE_HEADER} from '../actions';

const initialState = {};

export const rsvpReducer = (state=initialState, action) => {
	if (action.type === SET_TITLE_HEADER) {
		return Object.assign({}, state, {
			title: action.title,
			subTitle: action.subtitle
		})
	}
	return state;
}