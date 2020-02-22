import axios from 'axios';
import uuid from 'uuid';
import { getPersistor } from '../../index';

interface Action {
  type: string;
  payload: any;
}

// Actions
const FETCH_USER = 'FETCH_USER';
const SET_TOKEN = 'SET_TOKEN';
const SET_DEVICE_ID = 'SET_DEVICE_ID';
const LOG_OUT = 'LOG_OUT';

const initialState = {
  token: '',
  device_id: '',
};

export default function userDuck(state = initialState, action: Action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_DEVICE_ID:
      return { ...state, device_id: action.payload };
    case LOG_OUT:
      return { token: '' };
    case FETCH_USER:
      return { ...action.payload, token: state.token };
    default:
      return state;
  }
}

// Action creators

/**
 * Should purge everything after log out.
 */
export const logout = () => async dispatch => {
  dispatch({ type: 'LOG_OUT' });
  const persistor = getPersistor();
  await persistor.purge();
  window.location.href = '/login';
};

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/me');
  dispatch({
    type: FETCH_USER,
    payload: { ...response.data.user, is_premium: true },
  });
};

export const fbLogin = (fbToken: string) => async dispatch => {
  try {
    const response = await axios.get(`/token?facebook_token=${fbToken}`);
    dispatch(setToken(response.data.token));
    dispatch(fetchUser());
    //if the user does not exist, create a user
  } catch {
    console.log('ERROR');
    await axios.post(`/users/facebook`, { facebookToken: fbToken });
    const response = await axios.get(`/token?facebook_token=${fbToken}`);
    dispatch(setToken(response.data.token));
    dispatch(fetchUser());
  }
};

export const anonLogin = () => async dispatch => {
  //generate a random 'facebook-id'
  const generatedId = uuid.v4();
  try {
    await dispatch(makeAnon(generatedId));
    await dispatch(fetchTokenByAnon(generatedId));
    await dispatch(fetchUser());
    dispatch(fetchTokenByAnon(generatedId));
  } catch {
    console.log('ERROR');
  }
};

export const fetchTokenByAnon = (id: string) => async dispatch => {
  const response = await axios.get(`/token?device_id=${id}`);
  dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => dispatch => {
  dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};

export const makeAnon = (id: string) => async dispatch => {
  await axios.post(`/users/anonymous`, { deviceId: id });
  dispatch({ type: 'SET_DEVICE_ID', payload: id });
};
