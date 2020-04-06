import axios from 'axios';
import { push } from 'connected-react-router';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COURSE = 'SET_COURSE';
const ARCHIVE_COURSE = 'ARCHIVE_COURSE';

const initialState: any = {};

export default function courseDetailedDuckReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_COURSE:
      return action.payload;
    case ARCHIVE_COURSE:
      return initialState;
    default:
      return state;
  }
}

//Action creators
export const fetchCourse = id => async dispatch => {
  const response = await axios.get(`/subjects/${id}`);
  dispatch({
    type: SET_COURSE,
    payload: Object.values(response.data.entities.courses)[0],
  });
};

export const archiveCourse = id => async dispatch => {
  try {
    await axios.delete(`/subjects/${id}`);
  } catch (error) {
    alert(error);
  }
  dispatch({
    type: ARCHIVE_COURSE,
  });
  dispatch(push('/'));
};
