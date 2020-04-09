import { combineReducers } from 'redux';
import courseReducer from 'redux/duck/coursesDuck';
import courseDetailedReducer from 'redux/duck/courseDetailedDuck';
import userReducer from 'redux/duck/userDuck';
import dropdownReducer from 'redux/duck/dropdownDuck';
import topicReducer from 'redux/duck/topicDuck';
import schoolReducer from 'redux/duck/schoolDuck';
import quizDuck from 'redux/duck/quizDuck';
import commentReducer from 'redux/duck/commentDuck';
import { connectRouter } from 'connected-react-router';
import resourceReducer from 'redux/duck/resourceDuck';
import favoritesReducer from 'redux/duck/favoritesDuck';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    courses: courseReducer,
    courseInfo: courseDetailedReducer,
    user: userReducer,
    dropdown: dropdownReducer,
    topics: topicReducer,
    quiz: quizDuck,
    schools: schoolReducer,
    resource: resourceReducer,
    comments: commentReducer,
    favoriteCourses: favoritesReducer,
  });

export default createRootReducer;
