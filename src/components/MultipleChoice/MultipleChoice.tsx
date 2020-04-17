import React from 'react';
import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';
import Question from 'components/Question/Question';
import Alternatives from 'components/Alternatives/Alternatives';

interface Props {
  exercise: IQuestion;
  showAnswer: (int: number) => void;
  answeredIndex: number;
  hasAnswer: boolean;
}

export default function MultipleChoice({ exercise, showAnswer, answeredIndex, hasAnswer }: Props) {
  return (
    <Wrapper>
      <Question
        text={exercise.content.question.text}
        credit={exercise.username}
        imgSrc={exercise.content.question.img && exercise.content.question.img.src}
        margin="16px 5px"
      />
      <Alternatives alternatives={exercise.content.alternatives} showAnswer={showAnswer} hasAnswer={hasAnswer} answeredIndex={answeredIndex} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 1000px; */
`;
