import React from 'react';
import { AlternativeGroup, AlternativeButton } from './AlternativesStyles';
import styled from 'styled-components/macro';

interface AlternativesProps {
  alternatives: Alternatives;
  showAnswer: (index: number) => void;
  hasAnswer: boolean;
  answeredIndex: number;
}

export default function Alternatives({ alternatives, showAnswer, hasAnswer, answeredIndex }: AlternativesProps) {
    return (
      <AlternativesWrapper orientation="vertical" color="primary" size="large">
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
      </AlternativesWrapper>
    );
}

const AlternativesWrapper = styled(AlternativeGroup)`width: 100%`

