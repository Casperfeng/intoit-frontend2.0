import axios from 'axios';

interface Action {
  type: string;
  payload: any;
  index: number;
  altIndex: number;
}

// Actions
const PURGE_QUIZ = 'PURGE_QUIZ';
const QUIZ_SET_EXERCISES = 'QUIZ_SET_EXERCISES';
const SET_ANSWER = 'SET_ANSWER';
const SET_INDEX = 'SET_INDEX';

const initialState: any = { hasPostedAnswers: false, exercises: [], index: 0};

export default function coursesReducer(state = initialState, action: Action) {
  switch (action.type) {
    case PURGE_QUIZ:
      return { hasPostedAnswers: false, exercises: [], index: 0 };
    case QUIZ_SET_EXERCISES:
      return { ...state, exercises: action.payload };
    case SET_ANSWER:
      const exercises = { ...state.exercises };
      exercises[action.index] = {
        ...exercises[action.index],
        altIndex: action.altIndex,
      };
      return {
        ...state,
        exercises, index: action.index+1
      };
    case SET_INDEX:
      return{ ...state, index: action.index}
    default:
      return state;
  }
}

// Action creators

export const fetchQuiz = (collectionId, fetchAll, fetchType, isBest) => async dispatch => {
  const all = fetchAll ? 'size=100' : '';
  const type = fetchType ? 'type=' + fetchType : '';
  const response = await (isBest
    ? axios.get(`/subjects/${collectionId}/best-quiz` + (fetchType ? `?${type}` : ''))
    : axios.get(
        `/collections/${collectionId}/quiz` + (fetchAll || fetchType ? `?${all}&${type}` : '')
      ));
  dispatch({ type: 'QUIZ_SET_EXERCISES', payload: response.data });
};

export const setAnswer = (index, altIndex) => (
  {
  type: 'SET_ANSWER',
  index,
  altIndex,
}
);