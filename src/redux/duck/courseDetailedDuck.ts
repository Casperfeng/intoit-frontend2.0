import axios from 'axios';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COURSE = 'SET_COURSE';

const initialState: any = {};

export default function courseDetailedDuckReducer(
  state = initialState,
  action: Action
) {
  switch (action.type) {
    case SET_COURSE:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const fetchCourse = id => async dispatch => {
  const response = await axios.get(`/subjects/${id}`);
  dispatch({
    type: SET_COURSE,
    payload: Object.values(response.data.entities.courses)[0]
  });
};
