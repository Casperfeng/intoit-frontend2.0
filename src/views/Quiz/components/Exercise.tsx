import React, { useState } from 'react';
import styled from 'styled-components';
import Alternatives from './Alternatives';
// import { ThumbUpAlt } from 'styled-icons/material/ThumbUpAlt';
// import { iconColors } from 'shared/colors';
import colors, { iconColors } from 'shared/colors';
import { ArrowForward } from 'styled-icons/material/ArrowForward';
import { School } from 'styled-icons/material/School';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from 'redux/duck/quizDuck';
import Card from '@material-ui/core/Card';

interface ExerciseProps {
  exercise: Question;
}

export default function Exercise({ exercise }: ExerciseProps) {
  const dispatch = useDispatch();
  const [hasAnswer, setHasAnswer] = useState(false);
  const [answeredIndex, setAnsweredIndex] = useState(-1);
  const quiz = useSelector((state: ReduxState) => state.quiz);

  const _showAnswer = (index: number) => {
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
    <Wrapper>
      <Question>{exercise.content.question.text}</Question>
      <Credit>Laget av {exercise.username}</Credit>

      <Alternatives alternatives={exercise.content.alternatives} showAnswer={_showAnswer} hasAnswer={hasAnswer} answeredIndex={answeredIndex} />
      {hasAnswer && exercise.explanation && (
        <Explanation variant="outlined">
          <School size={20} />
          <p>{exercise.explanation}</p>
        </Explanation>
      )}
      {hasAnswer && (
        <NextButton onClick={() => _showAnswer(answeredIndex)} endIcon={<StyledArrowForward size={20} />}>
          Neste
        </NextButton>
      )}

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
  margin-bottom: 36px;
`;

const Question = styled.h1`
  font-weight: normal;
  margin: 20px 0 5px;
  font-size: 20px;
  line-height: 1.5;
`;

// const StyledThumbsUpAlt = styled(ThumbUpAlt)`
//   ${props => (props.isPressed ? `color: ${iconColors.clicked}` : `color: ${iconColors.default}`)}
// `;
const NextButton = styled(Button)`
  align-self: flex-end;
`;

const StyledArrowForward = styled(ArrowForward)`
  color: black;
`;

const Explanation = styled(Card)`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 24px;

  &.MuiPaper-outlined {
    border-color: ${colors.grey};
  }

  svg {
    min-width: 20px;
  }

  p {
    font-size: 14px;
    margin-left: 6px;
  }
`;
