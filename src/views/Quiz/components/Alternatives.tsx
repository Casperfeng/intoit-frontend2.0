import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setAnswer } from '../../../redux/duck/quizDuck';
import colors from 'shared/colors';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface AlternativesProps {
  alternatives: Alternatives;
}

export default function Alternatives({ alternatives }: AlternativesProps) {
  const dispatch = useDispatch();
  const quiz = useSelector((state: ReduxState) => state.quiz);
  const [hasAnswer, setHasAnswer] = useState(false);
  const [answeredIndex, setAnsweredIndex] = useState(-1);

  const showAnswer = (index: number) => {
    if (!hasAnswer) {
      setAnsweredIndex(index);
      setHasAnswer(true);
    } else {
      dispatch(setAnswer(quiz.index, index));
      setHasAnswer(false);
      setAnsweredIndex(-1);
    }
  };

  return (
    <AlternativeGroup orientation="vertical" color="primary" size="large">
      {alternatives.map((alt: Alternative, i) => {
        let textColor = 'black';
        if (hasAnswer) {
          if (alt.correct) {
            textColor = 'green';
          } else if (!alt.correct && answeredIndex === i) {
            textColor = 'red';
          }
        }

        return (
          <AlternativeButton
            key={i}
            textcolor={textColor}
            onClick={() => {
              showAnswer(i);
            }}
          >
            {alt.text}
          </AlternativeButton>
        );
      })}
    </AlternativeGroup>
  );
}

const AlternativeButton = styled(Button)`
  &.MuiButton-outlinedPrimary {
    border-color: ${colors.lightGrey};
    ${props => props.textcolor && `color: ${props.textcolor}`}
  }

  &.MuiButton-root {
    text-transform: initial;
    font-weight: normal;
    letter-spacing: initial;
  }

  > .MuiButton-label {
    justify-content: start;
    text-align: start;
  }

  min-height: 50px;
`;

const AlternativeGroup = styled(ButtonGroup)`
  margin: 40px 0 30px;
`;
