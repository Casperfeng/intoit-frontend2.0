import { combineReducers } from 'redux';
import courseReducer from '../duck/coursesDuck';
import courseDetailedReducer from '../duck/courseDetailedDuck';
import userReducer from 'redux/duck/userDuck';
import dropdownReducer from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';
import quizDuck from '../duck/quizDuck';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    courses: courseReducer,
    courseInfo: courseDetailedReducer,
    user: userReducer,
    dropdown: dropdownReducer,
    topics: topicReducer,
    quiz: quizDuck,
  });

export default createRootReducer;
