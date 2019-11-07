import axios from 'axios';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_TOKEN = 'SET_TOKEN';

const initialState: FacebookLogin = {
  token: ''
};

export default function faceBookLoginDuck(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

// Action creators
export const connectToFacebook = fbToken => async (dispatch, getState) => {
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

export const facebookLogin = fbToken => async dispatch => {
  try {
    await dispatch(fetchTokenByFacebook(fbToken));
  } catch (err) {
    console.log('ERROR');
    await axios.post(`/users/facebook`, { fbToken });
  }
};

const fetchTokenByFacebook = fbToken => async dispatch => {
  const response = await axios.get(`/token?facebook_token=${fbToken}`);
  dispatch(setToken(response.data.token));
};

const setToken = token => dispatch => {
  dispatch({ type: 'SET_TOKEN', payload: token });
  axios.defaults.headers.common['X-Access-Token'] = token;
};
