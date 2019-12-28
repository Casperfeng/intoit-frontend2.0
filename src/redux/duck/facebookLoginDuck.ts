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

export default function faceBookLoginDuck(
  state = initialState,
  action: Action
) {
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
export const connectToFacebook = (fbToken: string) => async (
  dispatch,
  getState
) => {
  try {
    await axios.post('/users/facebook_connection', {
      deviceId: getState().me.device_id,
      fbToken
    });
    await dispatch(fetchTokenByFacebook(fbToken));
  } catch (err) {
    console.log(err);
  }
};

export const facebookLogin = (fbToken: string) => async dispatch => {
  try {
    await dispatch(fetchTokenByFacebook(fbToken));
  } catch (err) {
    console.log('ERROR');
    await axios.post(`/users/facebook`, { fbToken });
  }
};

export const logout = () => dispatch => {
  console.log('LOG out called!');
  dispatch({ type: 'LOG_OUT' });
  window.location.href = '/login';
};

const fetchTokenByFacebook = (fbToken: string) => async dispatch => {
  const response = await axios.get(`/token?facebook_token=${fbToken}`);
  dispatch(setToken(response.data.token));
};

export const setToken = (fbToken: string) => dispatch => {
  dispatch({ type: 'SET_TOKEN', payload: fbToken });
  axios.defaults.headers.common['X-Access-Token'] = fbToken;
};
