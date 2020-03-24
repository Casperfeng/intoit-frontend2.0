import React from 'react';
import styled from 'styled-components';
import colors from 'shared/colors';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface AlternativesProps {
  alternatives: Alternatives;
  showAnswer: (index: number) => void;
  hasAnswer: boolean;
  answeredIndex: number;
  type: string;
}

export default function Alternatives({ alternatives, showAnswer, hasAnswer, answeredIndex, type }: AlternativesProps) {
  if (type === 'mc') {
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
  } else {
    return <div>yo</div>
  }
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
  margin: 0 0 30px;
`;
