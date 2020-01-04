import React from 'react';
import styled from 'styled-components';
import Title from '../../../components/Title/Title';
import QuizCard from './QuizCard';

export default function QuizCards() {
  const QuizWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <>
      <QuizWrapper>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </QuizWrapper>
    </>
  );
}
