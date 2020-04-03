import axios from 'axios';
import { push } from 'connected-react-router';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COURSE_FEED = 'SET_COURSE_FEED';
const SET_COURSES = 'SET_COURSES';
const SET_TOPICS = 'SET_TOPICS';
const initialState: Courses = [];

export default function coursesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_COURSE_FEED:
      return {};
    case SET_COURSES:
      return action.payload;
    case SET_TOPICS:
      return state;

    default:
      return state;
  }
}

//Action creators
export const fetchCourses = (searchText = '', schoolId = 0) => async dispatch => {
  const response = await axios.get(`/${schoolId > 0 ? `schools/${schoolId}/` : ''}subjects?search=${searchText}`);
  dispatch({
    type: SET_COURSES,
    payload: Object.values(response.data.entities.courses).filter((course: any) => !course.is_archived),
  });
};

export const createCourse = payload => async dispatch => {
  try {
    await axios.post(`/subjects`, payload);
  } catch (error) {
    alert(error);
  }
  dispatch(push('/'));
};

export const editCourse = (id, payload) => async dispatch => {
  try {
    await axios.put(`/subjects/${id}`, payload);
  } catch (error) {
    alert(error);
  }

  dispatch(push(`/courses/${id}`));
};
