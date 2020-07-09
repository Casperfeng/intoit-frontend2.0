import Button from '@material-ui/core/Button';
import { Flip2 } from '@styled-icons/evaicons-solid';
import Question from 'components/Question/Question';
import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { OutlinedButton } from 'components/Button/Button';
import { AlternativeGroup, AlternativeButton } from 'components/Alternatives/AlternativesStyles';

interface Props {
  exercise: IQuestion;
  setHasAnswer: () => void;
}

export default function Flashcard({ exercise, setHasAnswer }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const onFlipButton = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(true);
  };

  return (
    <Wrapper>
      <FlipCard>
        {showQuestion && (
          <QuestionCard>
            <Question
              text={exercise.content.question.text}
              credit={exercise.username}
              imgSrc={exercise.content.question.img && exercise.content.question.img.src}
            />
          </QuestionCard>
        )}
        <FlipCardInner isflipped={isFlipped}>
          <FlipCardContent isflipped={isFlipped}>
            {isFlipped ? (
              <p>{exercise.content.answer.text}</p>
            ) : (
              <Question
                text={exercise.content.question.text}
                credit={exercise.username}
                imgSrc={exercise.content.question.img && exercise.content.question.img.src}
              />
            )}
          </FlipCardContent>
        </FlipCardInner>
      </FlipCard>

      <ActionButtons>
        <OutlinedButton margin="0 16px 0 0" onClick={onFlipButton}>
          <FlipIcon size={24} />
          <span>FLIP CARD</span>
        </OutlinedButton>
        {isFlipped && (
          <OutlinedButton onClick={() => setShowQuestion(!showQuestion)}>{showQuestion ? 'SKJUL SPØRSMÅL' : 'VIS SPØRSMÅL'}</OutlinedButton>
        )}
      </ActionButtons>
      {showAnswer && (
        <FasitView>
          <strong>Hadde du rett?</strong>
          <AlternativeGroup orientation="vertical" color="primary" size="large">
            <AlternativeButton onClick={setHasAnswer}>Ja</AlternativeButton>
            <AlternativeButton onClick={setHasAnswer}>Nei</AlternativeButton>
          </AlternativeGroup>
        </FasitView>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const FlipCard = styled.div`
  perspective: 1000px;
  margin-top: 16px;
`;

const FlipCardInner = styled.div<{ isflipped: boolean }>`
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  padding: 20px;

  ${props =>
    props.isflipped &&
    css`
      transform: rotateY(180deg);
    `}

  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const QuestionCard = styled.div`
  padding: 20px;
  margin-bottom: 16px;

  border: 1px solid lightgrey;
  border-radius: 4px;
`;

const FlipCardContent = styled.div<{ isflipped: boolean }>`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  ${props =>
    props.isflipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const ActionButtons = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlipIcon = styled(Flip2)`
  margin-right: 6px;
`;

const FasitView = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    margin: 20px 0;
  }
`;
