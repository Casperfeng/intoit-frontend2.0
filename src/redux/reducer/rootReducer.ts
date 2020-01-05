import { combineReducers } from 'redux';
import courseDuck from '../duck/coursesDuck';
import courseDetailedDuck from '../duck/courseDetailedDuck';
import facebookLoginDuck from '../duck/facebookLoginDuck';
import dropdownDuck from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';

const rootReducer = combineReducers({
  courses: courseDuck,
  courseInfo: courseDetailedDuck,
  fbLogin: facebookLoginDuck,
  dropdown: dropdownDuck,
  topics: topicReducer
});

export default rootReducer;
