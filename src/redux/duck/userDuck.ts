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
const USER_EXISTS = 'USER_EXISTS';

const initialState = {
  token: '',
  device_id: '',
  facebook_id: '',
  userAlreadyExists: false,
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
    case USER_EXISTS:
      return { ...state, userAlreadyExists: true };
    default:
      return state;
  }
}

// Action creators

/**
 * Should purge everything after log out.
 */
export const logout = () => async dispatch => {
  await dispatch({ type: 'LOG_OUT' });
  const persistor = getPersistor();
  // TODO: this does not seem to work for all ducks. consider adding purge case to reducer
  await persistor.purge();
  window.location.href = '/login';
};

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/me');
  await dispatch({
    type: FETCH_USER,
    payload: { ...response.data.user, is_premium: true },
  });
};

export const fbLogin = (fbToken: string) => async dispatch => {
  try {
    await dispatch(fetchTokenByFb(fbToken));
    await dispatch(fetchUser());
  } catch {
    //if the user does not exist, create a user
    await axios.post(`/users/facebook`, { facebookToken: fbToken });
    await dispatch(fetchTokenByFb(fbToken));
    await dispatch(fetchUser());
  }
};

export const anonLogin = () => async dispatch => {
  //generate a random 'facebook-id'
  const generatedId = uuid.v4();
  await dispatch(makeAnon(generatedId));
  await dispatch(fetchTokenByAnon(generatedId));
  await dispatch(fetchUser());
  await dispatch(fetchTokenByAnon(generatedId));
};

export const fetchTokenByFb = (token: string) => async dispatch => {
  const response = await axios.get(`/token?facebook_token=${token}`);
  await dispatch(setToken(response.data.token));
};

export const fetchTokenByAnon = (id: string) => async dispatch => {
  const response = await axios.get(`/token?device_id=${id}`);
  await dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => async dispatch => {
  await dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};

export const makeAnon = (id: string) => async dispatch => {
  await axios.post(`/users/anonymous`, { deviceId: id });
  await dispatch({ type: 'SET_DEVICE_ID', payload: id });
};

export const connectGuestToFacebook = (fbToken: string, device_id: string) => async dispatch => {
  try {
    await axios.post('/users/facebook_connection', {
      deviceId: device_id,
      facebookToken: fbToken,
    });
    await dispatch(fetchTokenByFb(fbToken));
    await dispatch(fetchUser());
  } catch (err) {
    dispatch({ type: 'USER_EXISTS' });
  }
};
