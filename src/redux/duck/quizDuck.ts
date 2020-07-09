import axios from 'axios';
import { LOCATION_CHANGE } from 'connected-react-router';
import { clone } from 'lodash';

interface Action {
  type: string;
  payload: any;
  index: number;
  altIndex: number;
  votes: any;
}

// Actions
const PURGE_QUIZ = 'PURGE_QUIZ';
const QUIZ_SET_EXERCISES = 'QUIZ_SET_EXERCISES';
const SET_ANSWER = 'SET_ANSWER';
const SET_INDEX = 'SET_INDEX';
const SET_VOTES = 'SET_VOTES';

const initialState: any = { hasPostedAnswers: false, exercises: [], index: 0 };

export default function quizReducer(state = initialState, action: Action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return initialState;
    case PURGE_QUIZ:
      return initialState;
    case QUIZ_SET_EXERCISES:
      return { ...state, exercises: action.payload };
    case SET_ANSWER:
      const exercises = [...state.exercises];
      exercises[action.index] = {
        ...exercises[action.index],
        altIndex: action.altIndex,
      };
      return {
        ...state,
        exercises,
        index: action.index + 1,
      };
    case SET_INDEX:
      return { ...state, index: action.index };
    case SET_VOTES:
      const exercise = {
        ...state.exercises[action.index],
        ...action.votes,
      };
      const exercisesClone = clone(state.exercises);
      exercisesClone[action.index] = exercise;
      return { ...state, exercises: exercisesClone };
    default:
      return state;
  }
}

// Action creators

export const fetchQuiz = (collectionId, fetchAll, fetchType, isBest) => async dispatch => {
  const all = fetchAll ? 'size=3' : '';
  const type = fetchType ? 'type=' + fetchType : '';
  const response = await (isBest
    ? axios.get(`/subjects/${collectionId}/best-quiz` + (fetchType ? `?${type}` : ''))
    : axios.get(`/collections/${collectionId}/quiz` + (fetchAll || fetchType ? `?${all}&${type}` : '')));
  dispatch({ type: 'QUIZ_SET_EXERCISES', payload: response.data });
};

export const setAnswer = (index, altIndex) => async dispatch =>
  dispatch({
    type: 'SET_ANSWER',
    index,
    altIndex,
  });

export const postVote = (index, exerciseId, positive) => async dispatch => {
  await axios.post(`/exercises/${exerciseId}/votes`, { positive });
  dispatch(fetchVotes(index, exerciseId));
};

export const fetchVotes = (index, exerciseId) => async dispatch => {
  const response = await axios.get(`/resources/${exerciseId}/votes`);
  dispatch({ type: 'SET_VOTES', index, votes: response.data });
};

export const purgeQuiz = () => async dispatch => {
  dispatch({ type: 'PURGE_QUIZ' });
};
