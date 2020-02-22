import axios from 'axios';

interface Action {
  type: string;
  payload?: any;
}

// Actions
const SET_SCHOOLS = 'SET_SCHOOLS';

const initialState = [];

export default function schoolReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_SCHOOLS:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const fetchSchools = () => async dispatch => {
  const response = await axios.get('/schools');
  dispatch({ type: 'SET_SCHOOLS', ...response.data });
};
