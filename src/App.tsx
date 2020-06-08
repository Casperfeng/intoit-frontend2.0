import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components/macro';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { setConfig } from 'react-hot-loader';
import { hot } from 'react-hot-loader/root';
import LastUpdate from 'views/LastUpdates/LastUpdates';
import Level from 'views/Levels/Level';
import Routes from 'navigation/Routes';

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
        <Routes />
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
