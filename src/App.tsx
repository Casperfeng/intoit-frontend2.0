import React from 'react';
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
    min-height: 1000px;
    background-color: #f5f5f5;
    width: 100%;
    display: column;
    align-content: center;
  `;
  return (
    <Main>
      <Router>
        <Navbar />
        <Switch>
          <ProtectedRoute exact path='/teamet' component={AboutUs} />
          <ProtectedRoute exact path='/om-oss' component={AboutIntoit} />
          <ProtectedRoute exact path='/courses/:id' component={Course} />
          <ProtectedRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Main>
  );
}
