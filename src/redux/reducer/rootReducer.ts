import { combineReducers } from 'redux';
import courseReducer from '../duck/coursesDuck';
import courseDetailedReducer from '../duck/courseDetailedDuck';
import userReducer from '../duck/userDuck';
import dropdownReducer from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';

const rootReducer = combineReducers({
  courses: courseReducer,
  courseInfo: courseDetailedReducer,
  user: userReducer,
  dropdown: dropdownReducer,
  topics: topicReducer,
});

export default rootReducer;
