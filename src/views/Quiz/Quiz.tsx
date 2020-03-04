import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { fetchQuiz } from '../../redux/duck/quizDuck';
import Exercise from './components/Exercise';
import { LinearProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ContentLayout from 'components/ContentLayout/ContentLayout';
import colors from 'shared/colors';

export default function Quiz() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const quiz = useSelector((state: ReduxState) => state.quiz);

  useEffect(() => {
    async function retrieveQuiz() {
      await dispatch(fetchQuiz(id, true, 'mc', false));
    }
    retrieveQuiz();
    // eslint-disable-next-line
  }, []);

  if (!quiz.exercises.length && quiz.index === 0) {
    // TODO: Animation fish
    return <h1>Loading</h1>;
  }

  if (quiz.exercises.length > 0 && quiz.exercises.length === quiz.index) {
    // TODO: Create victory screen component
    return <h1>Victory Screen</h1>;
  }

  return (
    <Wrapper>
      <ContentLayout width={'max-content'} maxWidth={'700px'}>
        <ContentBox>
          <QuizProgress variant="determinate" value={(100 / quiz.exercises.length) * quiz.index} />
          <Exercise exercise={quiz.exercises[quiz.index]} />
        </ContentBox>
      </ContentLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: #1565c0;
  min-height: 100vh;
`;

const ContentBox = styled.div`
  padding: 30px;
  min-width: 500px;
  margin-top: 200px;
  background-color: white;
  border-radius: 3px;
`;

const QuizProgress = styled(LinearProgress)`
  margin: 10px 0;
  border-radius: 3px;
  height: 8px;
  /* width: 500px; */

  &.MuiLinearProgress-colorPrimary {
    background-color: ${colors.lightGrey};
  }

  > .MuiLinearProgress-barColorPrimary {
    background-color: ${colors.primary};
  }
`;
