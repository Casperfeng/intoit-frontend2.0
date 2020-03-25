import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import styled from 'styled-components/macro';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AboutIntoit from './views/AboutIntoit/AboutIntoit';
import Course from './views/Course/Course';
import Quiz from './views/Quiz/Quiz';
import ProfilePage from './views/ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import LastUpdate from 'views/LastUpdates/LastUpdates';

setConfig({
  showReactDomPatchNotification: false,
});

function App() {
  // Render a different navbar in quiz-mode
  const currentPath = useSelector((state: ReduxState) => state.router.location.pathname);
  const currentViewIsQuiz = currentPath.includes('quiz');

  return (
    <StylesProvider injectFirst>
      <Main>
        <Navbar currentViewIsQuiz={currentViewIsQuiz} />
        <Switch>
          <Route exact path="/om-oss" component={AboutIntoit} />
          <ProtectedRoute exact path="/courses/:id" component={Course} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/profile" component={ProfilePage} />
          <ProtectedRoute exact path="/lastUpdate/:id" component={LastUpdate} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/quiz/:id" component={Quiz} />
        </Switch>
      </Main>
    </StylesProvider>
  );
}

const Main = styled.div`
  margin: 0px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  align-content: center;
`;

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
