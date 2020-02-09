import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AboutIntoit from './views/AboutIntoit/AboutIntoit';
import AboutUs from './views/AboutUs/AboutUs';
import Course from './views/Course/Course';

export default function App() {
  const Main = styled.div`
    margin: 0px;
    width: 100%;
    height: 100%;
    min-height: 1000px;
    min-width: 200px;
    background-color: #ececeb;
    display: column;
    align-content: center;
    color: #293640;
  `;
  return (
    <StylesProvider injectFirst>
      <Main>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/teamet' component={AboutUs} />
            <Route exact path='/om-oss' component={AboutIntoit} />
            <ProtectedRoute exact path='/courses/:id' component={Course} />
            <ProtectedRoute exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Main>
    </StylesProvider>
  );
}
