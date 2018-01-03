import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";

import { saveAuthToken, clearAuthToken } from "../local-storage";

const API_BASE_URL = "https://rsvp-text-me.herokuapp.com";

// TITLE ACTIONS

export const SET_TITLE_HEADER = "SET_TITLE_HEADER";
export const setTitleHeader = (title, subtitle) => ({
  type: SET_TITLE_HEADER,
  title,
  subtitle
});

// GUEST ACTIONS

export const ADD_GUEST = "ADD_GUEST";
export const addGuest = (guest) => ({
  type: ADD_GUEST,
  guest
});

export const TOGGLE_ADD_GUEST = "TOGGLE_ADD_GUEST";
export const toggleGuest = (isOpen) => ({
  type: TOGGLE_ADD_GUEST,
  isOpen
});

// AUTH ACTIONS

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(setCurrentUser(decodedToken.user));
  saveAuthToken(authToken);
};

const createEvent = name => (dispatch, getState) => {
  const event = {
    "event": {
      "name": 'Smith Family',
      "event_date": '2018-01-01'
    }
  };
  return fetch(`${API_BASE_URL}/events`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getState().rsvp.authToken}`
    },
    body: JSON.stringify(event)
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err));
};

export const registerUser = user => (dispatch)=> {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then((res) => {
      const formatUser = {
        "email": user.user.email,
        "password": user.user.password
      };
      dispatch(login(formatUser));
      dispatch(createEvent());
    })
    .catch(err => console.log(err));
};

export const login = user => dispatch => {
  return fetch(`${API_BASE_URL}/authenticate`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then((token) => {
      storeAuthInfo(token.auth_token, dispatch);
    })
    .catch(err => console.log(err));
};
