import { combineReducers } from 'redux';
import courseReducer from 'redux/duck/coursesDuck';
import courseDetailedReducer from 'redux/duck/courseDetailedDuck';
import userReducer from 'redux/duck/userDuck';
import dropdownReducer from 'redux/duck/dropdownDuck';
import topicReducer from 'redux/duck/topicDuck';
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
