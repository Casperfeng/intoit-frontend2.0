import React from 'react';
import styled from 'styled-components';
import Alternatives from './Alternatives';
import { ThumbUpAlt } from 'styled-icons/material/ThumbUpAlt';
import { iconColors } from 'shared/colors';
import colors from 'shared/colors';

interface ExerciseProps {
  exercise: Question;
}

export default function Exercise({ exercise }: ExerciseProps) {
  return (
    <Wrapper>
      <Question>{exercise.content.question.text}</Question>
      <Credit>Laget av {exercise.username}</Credit>
      <Alternatives alternatives={exercise.content.alternatives} />
      {/* Placeholders: */}
      {/* <StyledThumbsUpAlt isPressed size={24} /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Credit = styled.p`
  font-size: 12px;
  font-style: italic;
  font-weight: 300;
  color: ${colors.blackLight};
  text-align: end;
`;

const Question = styled.h1`
  font-weight: normal;
  margin: 20px 0 5px;
  font-size: 20px;
  line-height: 1.5;
`;

const StyledThumbsUpAlt = styled(ThumbUpAlt)`
  ${props => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
`;
