import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchQuiz } from '../../redux/duck/quizDuck';
import Exercise from './components/Exercise';
import { Container, Paper, LinearProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import colors from 'shared/colors';
import IntoitLogo from 'assets/icons/logo-white.png';
import { Link } from 'react-router-dom';
import devices from 'shared/media';

export default function Quiz() {
  let { id, type } = useParams();

  const dispatch = useDispatch();
  const quiz = useSelector((state: ReduxState) => state.quiz);

  useEffect(() => {
    async function retrieveQuiz() {
      await dispatch(fetchQuiz(id, true, type, false));
    }
    retrieveQuiz();
  }, [dispatch, id, type]);

  const quizIsLoading = !quiz.exercises.length && quiz.index === 0;
  const quizIsFinished = quiz.exercises.length > 0 && quiz.exercises.length === quiz.index;

  return (
    <Wrapper>
      <IntoitLogoWhite to="/">
        <img src={IntoitLogo} alt="intoit-logo" />
      </IntoitLogoWhite>

      <Container maxWidth="sm">
        <Content>
          {quizIsLoading ? (
            // TODO: Add animasjon
            <h1>Henter quiz...</h1>
          ) : quizIsFinished ? (
            <h1>Victory Screen</h1>
          ) : (
            <>
              <QuizProgress variant="determinate" value={(100 / quiz.exercises.length) * quiz.index} />
              <Exercise exercise={quiz.exercises[quiz.index]} />
            </>
          )}
        </Content>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: #1565c0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntoitLogoWhite = styled(Link)`
  margin: 24px 0;

  img {
    z-index: 2;
    object-fit: contain;
    width: 67px;
    height: auto;
    cursor: pointer;
    @media ${devices.mobileOnly} {
      width: 46px;
    }
  }
`;

const Content = styled(Paper)`
  margin-bottom: 30px;
  padding: 30px;
`;

const QuizProgress = styled(LinearProgress)`
  margin: 10px 0;
  border-radius: 3px;
  height: 8px;

  &.MuiLinearProgress-colorPrimary {
    background-color: ${colors.lightGrey};
  }

  > .MuiLinearProgress-barColorPrimary {
    background-color: ${colors.primary};
  }
`;
