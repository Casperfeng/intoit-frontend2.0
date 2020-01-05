import { combineReducers } from 'redux';
import courseDuck from '../duck/coursesDuck';
import courseDetailedDuck from '../duck/courseDetailedDuck';
import loginDuck from '../duck/loginDuck';
import dropdownDuck from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';

const rootReducer = combineReducers({
  courses: courseDuck,
  courseInfo: courseDetailedDuck,
  login: loginDuck,
  dropdown: dropdownDuck,
  topics: topicReducer
});

export default rootReducer;
