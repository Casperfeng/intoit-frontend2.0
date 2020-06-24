import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchQuiz } from '../../redux/duck/quizDuck';
import Exercise from './components/Exercise';
import { LinearProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import colors from 'shared/colors';
import IntoitLogo from 'assets/icons/logo-white.png';
import { Link } from 'react-router-dom';
import devices from 'shared/media';
import VictoryScreen from './components/VictoryScreen';

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

      <ContentLayout width={'max-content'} maxWidth={'700px'}>
        <ContentBox>
          {quizIsLoading ? (
            // TODO: Add animasjon
            <h1>Henter quiz...</h1>
          ) : quizIsFinished ? (
            <VictoryScreen quiz={quiz} />
          ) : (
            <>
              <QuizProgress variant="determinate" value={(100 / quiz.exercises.length) * quiz.index} />
              <Exercise exercise={quiz.exercises[quiz.index]} />
            </>
          )}
        </ContentBox>
      </ContentLayout>
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

const ContentBox = styled.div`
  padding: 30px;
  margin-top: 128px;
  background-color: white;
  border-radius: 3px;
  min-width: 500px;

  @media ${devices.mobileOnly} {
    max-width: 100%;
    min-width: initial;
    padding: 20px;
  }
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
