import axios from 'axios';
import { getPersistor } from 'index';

/*@TODO:
1. Hente ut id fra facebook login
2. Bruke id til å sjekke om det finnes en bruker
3. Hvis brukeren ikke finnes opprett en ny bruker
4. Hent informasjon fra databasen
*/
interface Action {
  type: string;
  payload: any;
}

// Actions
const FETCH_USER = 'FETCH_USER';
const SET_TOKEN = 'SET_TOKEN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
  token: '',
};

export default function userDuck(state = initialState, action: Action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
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

export const fetchUserInfo = () => async dispatch => {};

export const fetchMe = () => async dispatch => {
  const response = await axios.get('/me');
  dispatch({
    type: 'SET_ME',
    payload: { ...response.data.user, is_premium: true },
  });
};

export const fetchTokenByFacebook = (fbToken: string) => async dispatch => {
  try {
    const response = await axios.get(`/token?facebook_token=${fbToken}`);
    dispatch(setToken(response.data.token));
    dispatch(fetchFbUserInfo(response.data.token));
  } catch {
    console.log('ERROR');
    await axios.post(`/users/facebook`, { facebookToken: fbToken });
  }
};

export const fetchTokenByAnon = (accessToken: string) => async dispatch => {
  const response = await axios.get(`/token?device_id=${accessToken}`);
  await dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => dispatch => {
  console.log('SETTING TOKEN');
  dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};

export const fetchFbUserInfo = (token: string) => async dispatch => {
  const response = await axios.get('/me');
  dispatch({
    type: FETCH_USER,
    payload: { ...response.data.user, is_premium: true },
  });
};
