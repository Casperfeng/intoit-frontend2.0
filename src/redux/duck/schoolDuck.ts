import axios from 'axios';

interface Action {
  type: string;
  payload: School[];
}

// Actions
const SET_SCHOOLS = 'SET_SCHOOLS';

const initialState: Schools = [];

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
  dispatch({ type: 'SET_SCHOOLS', payload: Object.values(response.data.entities.schools) });
};
