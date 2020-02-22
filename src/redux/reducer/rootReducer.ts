import { combineReducers } from 'redux';
import courseReducer from '../duck/coursesDuck';
import courseDetailedReducer from '../duck/courseDetailedDuck';
import userReducer from 'redux/duck/userDuck';
import dropdownReducer from '../duck/dropdownDuck';
import topicReducer from '../duck/topicDuck';
import schoolReducer from 'redux/duck/schoolDuck';

const rootReducer = combineReducers({
  courses: courseReducer,
  courseInfo: courseDetailedReducer,
  user: userReducer,
  dropdown: dropdownReducer,
  topics: topicReducer,
  schools: schoolReducer,
});

export default rootReducer;
