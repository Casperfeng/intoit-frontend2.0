import React from 'react';
import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';
import Question from 'components/Question/Question';
import Button from '@material-ui/core/Button';

interface Props {
  exercise: IQuestion;
}

export default function Flashcard({ exercise }: Props) {
  console.log('exercise :', exercise);
  return (
    <Wrapper>
      <CardContent variant="outlined">
        <Question
          text={exercise.content.question.text}
          credit={exercise.username}
          imgSrc={exercise.content.question.img && exercise.content.question.img.src}
        />
      </CardContent>
      <Button variant="outlined">FLIP CARD</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 1000px; */
  /* padding: 20px; */
`;

const CardContent = styled(Card)`
  padding: 20px;
`;
