import axios from 'axios';
import { fetchCourses } from './coursesDuck';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_FAVORITE_COURSES = 'SET_FAVORITE_COURSES';

const initialState: FavoriteCourses = [];

export default function favoritesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_FAVORITE_COURSES:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const fetchFavorites = () => async dispatch => {
  const response = await axios.get(`/subjects`);
  const data: Array<Course> = Object.values(response.data.entities.courses);
  dispatch({
    type: SET_FAVORITE_COURSES,
    payload: data.filter(course => course.favorite),
  });
};

export const favCourse = (courseId: number, favStatus: boolean) => async dispatch => {
  await axios.post(`/subjects/favorites`, {
    subjectId: courseId,
    favorite: favStatus,
  });
  await dispatch(fetchCourses());
  await dispatch(fetchFavorites());
};
