import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import AboutIntoit from './views/AboutIntoit/AboutIntoit';
import AboutUs from './views/AboutUs/AboutUs';
import Course from './views/Course/Course';

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
          <Route exact path='/login' component={Login} />
          <Route exact path='/teamet' component={AboutUs} />
          <Route exact path='/om-oss' component={AboutIntoit} />
          <Route exact path='/courses/:id' component={Course} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Main>
  );
}
