import axios from 'axios';
import { orderBy } from 'lodash';

interface Action {
  type: string;
  payload: any;
}

// Actions
const SET_COMMENTS = 'SET_COMMENTS';

const initialState: Comments = [];

export default function commentReducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}

//Action creators
export const postComment = (resourceType, id, message, is_report, title, reply_to) => async dispatch => {
  await axios.post(`/${resourceType}/${id}/comments`, {
    message: message,
    is_report: is_report,
    title: title,
    reply_to: reply_to,
  });
  dispatch(fetchComments(id));
};

export const fetchComments = resourceId => async dispatch => {
  const response = await axios.get(`/resources/${resourceId}/comments`);
  // Order by comment creation date. Oldest first
  const orderedComments = orderBy(response.data, ['created'], ['asc']);
  const sortedComments: Comment[] = [];
  // Sort comments such that replyComments are put right after the comment it replies to
  for (let index = 0; index < orderedComments.length; index++) {
    if (orderedComments[index].reply_to) {
      let replyIndex: any = null;
      // This is needed to make sure newest reply is put after older replies
      for (let sortedIndex = 0; sortedIndex < sortedComments.length; sortedIndex++) {
        if (sortedComments[sortedIndex].id === orderedComments[index].reply_to) {
          replyIndex = sortedIndex + 1;
        }
      }
      sortedComments.splice(
        replyIndex ? replyIndex : sortedComments.findIndex(comment => comment.id === orderedComments[index].reply_to),
        0,
        orderedComments[index],
      );
    } else {
      sortedComments.push(orderedComments[index]);
    }
  }
  dispatch({ type: 'SET_COMMENTS', payload: sortedComments });
};

export const voteComment = (resourceId, commentId, positive) => async dispatch => {
  await axios.post(`/comments/${commentId}/votes`, { positive });
  dispatch(fetchComments(resourceId));
};

export const deleteComment = (resourceId, commentId) => async dispatch => {
  await axios.delete(`/comments/${commentId}`);
  dispatch(fetchComments(resourceId));
};
