import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import styled from 'styled-components/macro';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AboutIntoit from './views/AboutIntoit/AboutIntoit';
import AboutUs from './views/AboutUs/AboutUs';
import Course from './views/Course/Course';
import Quiz from './views/Quiz/Quiz';

export default function App() {
  return (
    <StylesProvider injectFirst>
      <Main>
        <Navbar />
        <Switch>
          <Route exact path="/teamet" component={AboutUs} />
          <Route exact path="/om-oss" component={AboutIntoit} />
          <ProtectedRoute exact path="/courses/:id" component={Course} />
          <ProtectedRoute exact path="/" component={Home} />
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
  min-height: 1000px;
  margin: auto;
  display: column;
  align-content: center;
  color: #293640;
`;
