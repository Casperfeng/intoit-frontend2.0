import axios from 'axios';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COMMENTS = 'SET_COMMENTS';

const initialState: any = [];

export default function coursesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const postComment = (resourceType, id, message, is_report, title, reply_to) => async dispatch => {
  const response = await axios.post(`/${resourceType}/${id}/comments`, {
    message: message,
    is_report: is_report,
    title: title,
    reply_to: reply_to,
  });
  console.log('Posted: ', response);
  dispatch(fetchComments(id));
  //dispatch(fetchMe());
  // dispatch({
  //   type: 'SHOW_FEEDBACK',
  //   activity: {
  //     ...response.data.activity,
  //     message: `Du skrev en ${is_report ? 'rapport' : 'kommentar'}`,
  //   },
  // });
};

export const fetchComments = resourceId => async dispatch => {
  const response = await axios.get(`/resources/${resourceId}/comments`);
  console.log('Comments: ', response.data);
  dispatch({ type: 'SET_COMMENTS', payload: response.data });
};

export const voteComment = (resourceId, commentId, positive) => async dispatch => {
  const response = await axios.post(`/comments/${commentId}/votes`, { positive });
  dispatch(fetchComments(resourceId));
  // dispatch({
  //   type: 'SHOW_FEEDBACK',
  //   activity: {
  //     ...response.data.activity,
  //     message: `Du ${positive ? 'stemte opp' : 'stemte ned'} en kommentar!`,
  //   },
  // });
  // dispatch(fetchMe());
};

export const deleteComment = (resourceId, commentId) => async dispatch => {
  await axios.delete(`/comments/${commentId}`);
  dispatch(fetchComments(resourceId));
  // dispatch(fetchMe());
};
