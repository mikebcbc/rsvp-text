import { SET_TITLE_HEADER, SET_AUTH_TOKEN, SAVE_EVENT, SET_CURRENT_USER, ADD_GUEST, TOGGLE_ADD_GUEST, CLEAR_AUTH } from "../actions";

const initialState = {
  title: null,
  subTitle: null,
  authToken: null,
  currentUser: null,
  event: {},
  guests:[],
  addModalOpen: false
};

export const rsvpReducer = (state = initialState, action) => {
  if (action.type === SET_TITLE_HEADER) {
    return Object.assign({}, state, {
      title: action.title,
      subTitle: action.subtitle
    });
  } else if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null,
      event: null,
      guests: null
    })
  } else if (action.type === SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    });
  } else if (action.type === ADD_GUEST) {
    return Object.assign({}, state, {
      guests: [...state.guests, action.guest]
    })
  } else if (action.type === TOGGLE_ADD_GUEST) {
    return Object.assign({}, state, {
      addModalOpen: action.isOpen
    })
  } else if (action.type === SAVE_EVENT) {
    console.log(action.event);
    return Object.assign({}, state, {
      event: action.event
    })
  }
  return state;
};
