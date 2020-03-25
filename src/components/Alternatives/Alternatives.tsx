import React from 'react';
import { AlternativeGroup, AlternativeButton } from './AlternativesStyles';

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

