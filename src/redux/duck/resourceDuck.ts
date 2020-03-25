// ? Andreas: Vi lager en ny duck for fetching feed

import axios from 'axios';

interface Action {
  type: string;
  payload?: any;
}

// Actions
const FETCH_FEEDS = 'FETCH_FEEDS';

const initialState = [];

export default function resourceReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_FEEDS:
      return { ...state, feed: Object.values(action.payload) };
    default:
      return state;
  }
}

//Action creators
export const fetchFeeds = courseId => async dispatch => {
  const response = await axios.get(`/resources/${courseId}/feed`);
  dispatch({ type: 'FETCH_FEEDS', payload: response.data.entities.feed });
};
