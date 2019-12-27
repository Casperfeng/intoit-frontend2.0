import { combineReducers } from 'redux';
import courseDuck from '../duck/coursesDuck';
import facebookLoginDuck from '../duck/facebookLoginDuck';
import dropdownDuck from '../duck/dropdownDuck';

const rootReducer = combineReducers({
  courses: courseDuck,
  fbLogin: facebookLoginDuck,
  dropdown: dropdownDuck
});

export default rootReducer;
