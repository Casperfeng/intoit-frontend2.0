import axios from 'axios';

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

export default function loginDuck(state = initialState, action: Action) {
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
export const logout = () => dispatch => {
  console.log('LOG out called!');
  dispatch({ type: 'LOG_OUT' });
  window.location.href = '/login';
};

export const fetchTokenByFacebook = (fbToken: string) => async dispatch => {
  const response = await axios.get(`/token?facebook_token=${fbToken}`);
  dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => dispatch => {
  dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};
