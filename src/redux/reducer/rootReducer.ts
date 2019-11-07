import { combineReducers } from 'redux';
import courseDuck from '../duck/coursesDuck';
import facebookLoginDuck from '../duck/facebookLoginDuck';

const rootReducer = combineReducers({
  courses: courseDuck,
  fbLogin: facebookLoginDuck
});

export default rootReducer;
