import { SET_TITLE_HEADER, SET_AUTH_TOKEN, SET_CURRENT_USER, ADD_GUEST } from "../actions";

const initialState = {
  title: null,
  subTitle: null,
  authToken: null,
  currentUser: null,
  guests:[{
      name: {
        first: 'Tanner',
        last: 'Linsley'
      },
      rsvp: 'y',
      group: 'Groomsman'
    }]
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
  } else if (action.type === SET_CURRENT_USER) {
    return Object.assign({}, state, {
      currentUser: action.currentUser
    });
  } else if (action.type === ADD_GUEST) {
    return Object.assign({}, state, {
      guests: [...state.guests, action.guest]
    })
  }
  return state;
};
