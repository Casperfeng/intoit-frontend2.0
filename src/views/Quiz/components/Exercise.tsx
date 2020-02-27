import React from 'react';
import styled from 'styled-components';
import Alternatives from './Alternatives';
import { ThumbUpAlt } from 'styled-icons/material/ThumbUpAlt';
import { iconColors } from 'shared/colors';

interface ExerciseProps {
  exercise: Question;
}

export default function Exercise({ exercise }: ExerciseProps) {
  return (
    <Wrapper>
      <h1>{exercise.content.question.text}</h1>
      <div>Laget av {exercise.username}</div>
      <Alternatives alternatives={exercise.content.alternatives} />
      {/* Placeholders: */}
      <StyledThumbsUpAlt isPressed size={24} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-weight: normal;
    margin-bottom: 15px;
  }
`;

const StyledThumbsUpAlt = styled(ThumbUpAlt)`
  ${props => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;
