import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchQuiz } from '../../redux/duck/quizDuck';
import Exercise from './components/Exercise';
import { LinearProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ContentLayout from 'components/ContentLayout/ContentLayout';

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
    return <h1>Loading</h1>;
  }

  if (quiz.exercises.length > 0 && quiz.exercises.length === quiz.index) {
    return <h1>Victory Screen</h1>;
  }

  return (
    <ContentLayout width={'1000px'}>
      <Wrapper>
        <QuizProgress variant="determinate" value={(100 / quiz.exercises.length) * quiz.index} />
        <Exercise exercise={quiz.exercises[quiz.index]} />
      </Wrapper>
    </ContentLayout>
  );
}

const Wrapper = styled.div`
  padding: 30px;
`;

const QuizProgress = styled(LinearProgress)`
  margin: 10px 0;
`;
