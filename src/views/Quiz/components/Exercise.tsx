import React from 'react';
import styled from 'styled-components';
import Alternatives from './Alternatives';
import { ThumbUpAlt } from 'styled-icons/material/ThumbUpAlt';
import { iconColors } from 'shared/colors';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';

interface ExerciseProps {
  exercise: Question;
}

export default function Exercise({ exercise }: ExerciseProps) {
  return (
    <Wrapper>
      <h1>{exercise.content.question.text}</h1>
      {/* <div>Laget av {exercise.username}</div> */}
      <StyledThumbsUpAlt isPressed size={24} />
      <Alternatives alternatives={exercise.content.alternatives} />
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
