import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../../components/Title/SubTitle';
import QuizCard from './QuizCard';

export default function QuizCards() {
  const QuizWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <>
      <SubTitle>Alle temaer</SubTitle>
      <QuizWrapper>
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </QuizWrapper>
    </>
  );
}
