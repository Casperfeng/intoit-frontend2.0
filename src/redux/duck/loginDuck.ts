import axios from 'axios';
import { getPersistor } from "../../index";

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_TOKEN = 'SET_TOKEN';
const LOG_OUT = 'LOG_OUT';

const initialState: FacebookLogin = {
  token: ''
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case SET_TOKEN:
      return { token: action.payload };
    case LOG_OUT:
      return { token: '' };
    default:
      return state;
  }
}


// Action creators

/**
* Should purge everything after log out.
*/
export const logout = () =>  async dispatch => {
  dispatch({ type: 'LOG_OUT' });
  const persistor = getPersistor();
  await persistor.purge();
  window.location.href = '/login';
};

export const fetchTokenByFacebook = (fbToken: string) => async dispatch => {
  const response = await axios.get(`/token?facebook_token=${fbToken}`);
  dispatch(setToken(response.data.token));
};

export const fetchTokenByAnon = (accessToken: string) => async dispatch => {
  const response = await axios.get(`/token?device_id=${accessToken}`);
  await dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => dispatch => {
  console.log("SETTING TOKEN")
  dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};
