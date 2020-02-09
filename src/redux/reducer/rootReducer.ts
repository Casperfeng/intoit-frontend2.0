import { combineReducers } from 'redux';
import courseReducer from '../duck/coursesDuck';
import courseDetailedReducer from '../duck/courseDetailedDuck';
import loginReducer from '../duck/loginDuck';
import dropdownReducer from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';
import userReducer from '../duck/userDuck';

const rootReducer = combineReducers({
  courses: courseReducer,
  courseInfo: courseDetailedReducer,
  login: loginReducer,
  dropdown: dropdownReducer,
  topics: topicReducer,
  user: userReducer
});

export default rootReducer;
