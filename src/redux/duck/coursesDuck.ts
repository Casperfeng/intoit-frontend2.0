interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COURSE_FEED = 'SET_COURSE_FEED';
const SET_COURSES = 'SET_COURSES';
const SET_COURSE = 'SET_COURSE';
const SET_TOPICS = 'SET_TOPICS';

const initialState: CoursesResponse = {};

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
      return state;
    case 'SET_COURSE':
      return state;
    case 'SET_TOPICS':
      return state;
    default:
      return state;
  }
}

//Action creators