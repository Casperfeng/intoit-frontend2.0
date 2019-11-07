import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './views/LoginPage/LoginPage';
import LandingPage from './views/LandingPage/LandingPage';

const Main = styled.div`
  min-height: 1000px;
  width: 100%;
  display: column;
  align-content: center;
`;

export default function App() {
  return (
    <Main>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </Router>
    </Main>
  );
}
