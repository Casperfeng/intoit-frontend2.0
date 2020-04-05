import axios from 'axios';

interface Action {
  type: string;
  payload?: any;
}

// Actions
const FETCH_FEEDS = 'FETCH_FEEDS';
const FETCH_LEVELS = 'FETCH_LEVELS';

const initialState = [];

export default function resourceReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_FEEDS:
      return { ...state, feed: Object.values(action.payload) };
    case FETCH_LEVELS:
      return { ...state, levels: Object.values(action.payload) };
    default:
      return state;
  }
}

//Action creators
export const fetchFeeds = courseId => async dispatch => {
  const response = await axios.get(`/resources/${courseId}/feed`);
  dispatch({ type: FETCH_FEEDS, payload: response.data.entities.feed });
};

export const fetchLevels = () => async dispatch => {
  const response = await axios.get(`/levels`);
  dispatch({ type: FETCH_LEVELS, payload: response.data });
};
