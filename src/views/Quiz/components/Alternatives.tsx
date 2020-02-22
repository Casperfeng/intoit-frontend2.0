import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setAnswer } from '../../../redux/duck/quizDuck';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface AlternativesProps {
  alternatives: Alternatives;
}

export default function Alternatives({ alternatives }: AlternativesProps) {
  const dispatch = useDispatch();
  const quiz = useSelector((state: ReduxState) => state.quiz);

  const alternativeButtons = alternatives.map(alt => (
    <AlternativeButton
      key={alternatives.indexOf(alt)}
      onClick={() => {
        dispatch(setAnswer(quiz.index, alternatives.indexOf(alt)));
      }}
    >
      {alt.text}
    </AlternativeButton>
  ));

  return (
    <AlternativeGroup orientation="vertical" color="primary" size="large">
      {alternativeButtons}
    </AlternativeGroup>
  );
}

const AlternativeButton = styled(Button)`
  border-radius: 0;
`;

const AlternativeGroup = styled(ButtonGroup)`
  border-radius: 0;
`;
