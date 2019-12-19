import { combineReducers } from 'redux';
import dropdownDuck from '../duck/dropdownDuck';
import courseDuck from '../duck/coursesDuck';
import facebookLoginDuck from '../duck/facebookLoginDuck';

const rootReducer = combineReducers({
  courses: courseDuck,
  fbLogin: facebookLoginDuck,
  dropdown: dropdownDuck
});

export default rootReducer;
