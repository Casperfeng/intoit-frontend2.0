import React from 'react';
import styled from 'styled-components';
import Alternatives from './Alternatives';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';

interface ExerciseProps {
  exercise: Question;
}

export default function Exercise({ exercise }: ExerciseProps) {
  const Test = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <div>
      <h1>{exercise.content.question.text}</h1>
      <Test>
        <div>Laget av {exercise.username}</div>
        {/* <FontAwesomeIcon icon={faPen} size="2x" /> */}
      </Test>
      <Alternatives alternatives={exercise.content.alternatives} />
    </div>
  );
}
