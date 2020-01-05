import axios from 'axios';

interface Action {
  type: string;
  payload?: any;
}

// Actions
const FETCH_TOPICS = 'FETCH_TOPICS';
const NO_TOPICS = 'NO_TOPICS';

const initialState = [];

export default function topicReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return action.payload;
    case NO_TOPICS:
      return [];
    default:
      return state;
  }
}

//Action creators
export const fetchTopics = courseId => async dispatch => {
  const response = await axios.get(`/subjects/${courseId}/collections`);
  if (response.data.entities.topics) {
    dispatch({
      type: FETCH_TOPICS,
      payload: Object.values(response.data.entities.topics)
    });
  } else {
    dispatch({
      type: NO_TOPICS
    });
  }
};
