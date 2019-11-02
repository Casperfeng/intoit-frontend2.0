import React from 'react';
import styled from 'styled-components';
import LandingPage from './views/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';

const Main = styled.div`
  min-height: 1000px;
`;

export default function App() {
  return (
    <Main>
      <Navbar />
      <LandingPage />
    </Main>
  );
}
