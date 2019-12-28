import axios from 'axios';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COURSE_FEED = 'SET_COURSE_FEED';
const SET_COURSES = 'SET_COURSES';
const SET_COURSE = 'SET_COURSE';
const SET_TOPICS = 'SET_TOPICS';

const initialState: any = [];

export default function coursesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'SET_COURSE_FEED':
      return {
        ...state,
        [action.payload.courseId]: {
          ...state[action.payload.courseId],
          feed: action.payload.result
        }
      };
    case 'SET_COURSES':
      return action.payload;
    case 'SET_COURSE':
      return state;
    case 'SET_TOPICS':
      return state;
    default:
      return state;
  }
}

//Action creators
export const fetchCourses = (
  searchText = '',
  schoolId = 0
) => async dispatch => {
  const response = await axios.get(
    `/${
      schoolId > 0 ? `schools/${schoolId}/` : ''
    }subjects?search=${searchText}`
  );
  dispatch({
    type: 'SET_COURSES',
    payload: Object.values(response.data.entities.courses)
  });
};
