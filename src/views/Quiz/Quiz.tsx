import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchQuiz } from '../../redux/duck/quizDuck';
import Exercise from './components/Exercise';
import { LinearProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export default function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state: ReduxState) => state.quiz);

  const QuizContainer = styled.div`
    padding: 30px;
  `;

  const Test = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;


  useEffect(() => {
    async function retrieveQuiz() {
      await dispatch(fetchQuiz('99662', true, 'mc', false));
    }
    retrieveQuiz();
    // eslint-disable-next-line
  }, []);

  if (!quiz.exercises.content && quiz.index === quiz.exercises.length) {
    return <div>Ferdig med Quiz</div>
  }

  return (
    <QuizContainer>
      <Test>
        <div>Tittel</div>
        <FontAwesomeIcon icon={faMoon} size='2x' />
      </Test>
      <LinearProgress variant='determinate' value={100/quiz.exercises.length*quiz.index} />
      <Exercise exercise={quiz.exercises[quiz.index]} />
    </QuizContainer>
  );
}
