import axios from 'axios';

interface Action {
  type: string;
  payload?: any;
}

// Actions
const FETCH_USER = 'FETCH_USER';

const initialState = [];

export default function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const fetchUserInfo = () => async dispatch => {
  const response = await axios.get('/me');
  dispatch({
    type: FETCH_USER,
    payload: { ...response.data.user, is_premium: true }
  });
};
