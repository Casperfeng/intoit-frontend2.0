import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Question from 'components/Question/Question';
import Alternatives from 'components/Alternatives/Alternatives';
// import { ThumbUpAlt } from 'styled-icons/material/ThumbUpAlt';
import colors from 'shared/colors';
import { ArrowForward } from 'styled-icons/material/ArrowForward';
import { School } from 'styled-icons/material/School';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from 'redux/duck/quizDuck';
import { fetchComments } from 'redux/duck/commentDuck';
import Card from '@material-ui/core/Card';
// import FlashCard from './FlashCard';
import Flashcard from 'components/Flashcard/Flashcard';
import MultipleChoice from 'components/MultipleChoice/MultipleChoice';

import { questionTypes } from 'shared/constants';
import Hint from './Hint';
import ExerciseTabs from './Tabs';

interface ExerciseProps {
  exercise: IQuestion;
}
/**

 * @summary
 * Show the a single exercise  in quiz
 * Render either a multiple choice question or a flash card
 * @remarks
 * TODO: We need a static exercise view to show in "edit exercise" when user want to see a list of exercises in topic later
 */
export default function Exercise({ exercise }: ExerciseProps) {
  const dispatch = useDispatch();
  const [hasAnswer, setHasAnswer] = useState(false);
  const [answeredIndex, setAnsweredIndex] = useState(-1);
  // For flashcard only
  // Move this into FlashCard
  const [showFasit, setShowFasit] = useState(false);
  const quiz = useSelector((state: ReduxState) => state.quiz);

  useEffect(() => {
    async function getComments() {
      await dispatch(fetchComments(exercise.id));
    }
    getComments();
    // eslint-disable-next-line
  });

  const _showAnswer = (index: number) => {
    if (!hasAnswer) {
      setAnsweredIndex(index);
      setHasAnswer(true);
    } else {
      dispatch(setAnswer(quiz.index, index));
      setHasAnswer(false);
      setAnsweredIndex(-1);
      setShowFasit(false);
    }
  };

  const { content, username, type } = exercise;

  return (
    <Wrapper>
      {/* <Flashcard></Flashcard> */}
      {/* <Question text={content.question.text} credit={username} imgSrc={content.question.img && content.question.img.src} /> */}
      {/* <Alternatives
        alternatives={exercise.content.alternatives}
        showAnswer={_showAnswer}
        hasAnswer={hasAnswer}
        answeredIndex={answeredIndex}
        type={exercise.type}
      /> */}
      {/* Render either multiple choice or flashcard */}
      {type === questionTypes.mc ? (
        <MultipleChoice exercise={exercise} showAnswer={_showAnswer} answeredIndex={answeredIndex} hasAnswer={hasAnswer} />
      ) : (
        <div>ef</div>
        // <Flashcard exercise={exercise} />
        // <FlashCard
        //   showFasit={showFasit}
        //   answer={content.answer.text}
        //   setHasAnswer={() => setHasAnswer(true)}
        //   setShowFasit={() => setShowFasit(true)}
        // />
      )}
      {exercise.has_hint && exercise.hint && <Hint hint={exercise.hint} />}
      {hasAnswer && exercise.explanation && (
        <Explanation variant="outlined">
          <School size={20} />
          <p>{exercise.explanation}</p>
        </Explanation>
      )}
      {hasAnswer && (
        <Wrapper>
          <ExerciseTabs id={exercise.id} />
          <NextButton onClick={() => _showAnswer(answeredIndex)} endIcon={<StyledArrowForward size={20} />}>
            Neste
          </NextButton>
        </Wrapper>
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
