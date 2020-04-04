import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute';
import Login from 'views/Login/Login';
import Home from 'views/Home/Home';
import AboutIntoit from 'views/AboutIntoit/AboutIntoit';
import Course from 'views/Course/Course';
import CreateQuestion from 'views/CreateQuestion/CreateQuestion';
import Quiz from 'views/Quiz/Quiz';
import LastUpdate from 'views/LastUpdates/LastUpdates';
import ProfilePage from 'views/ProfilePage/ProfilePage';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();
history.listen((location: any) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

export default function Routes() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <Switch>
        <Route exact path="/om-oss" component={AboutIntoit} />
        <ProtectedRoute exact path="/courses/:id" component={Course} />
        <ProtectedRoute exact path="/courses/:id/create-question" component={CreateQuestion} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
        <ProtectedRoute exact path="/lastUpdate/:id" component={LastUpdate} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/quiz/:id/:type?" component={Quiz} />
      </Switch>
    </>
  );
}
