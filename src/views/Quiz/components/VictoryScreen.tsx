import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import QuestionSummary from 'components/QuestionSummary/QuestionSummary';
import StyledLink from 'components/StyledLink/StyledLink';
import { Typography, Grid, Button } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@styled-icons/material';

interface Props {
  quiz: Quiz;
  moreQuiz: Function;
}

export default function VictoryScreen({ quiz, moreQuiz }: Props) {
  const [percentage, setPercentage] = useState(0);
  const [animation, setAnimation] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const courseInfo = useSelector((state: ReduxState) => state.courseInfo);

  const getFeedback = p => {
    switch (true) {
      case p === 100:
        setAnimation('seal');
        setFeedbackText('LEGENDARISK!');
        break;
      case p > 80:
        setAnimation('star');
        setFeedbackText('Godt jobba!');
        break;
      case p > 50:
        setAnimation('crab');
        setFeedbackText('Not bad!');
        break;
      case p > 30:
        setAnimation('urchin');
        setFeedbackText('Nice try');
        break;
      default:
        setAnimation('seagull');
        setFeedbackText('Det går bra.');
        break;
    }
  };

  useEffect(() => {
    const correctAnswers = quiz.exercises.filter(ex => (ex.type === 'mc' ? ex.content.alternatives[ex.altIndex].correct : ex.altIndex === 0));
    const percent = (correctAnswers.length / quiz.exercises.length) * 100;
    setPercentage(percent);
    setNumCorrectAnswers(correctAnswers.length);
    getFeedback(percent);
  }, [quiz.exercises]);

  return (
    <Grid container direction="column" spacing={10}>
      <Grid item container direction="column" spacing={5}>
        {/* TODO: Add animation */}
        <Grid item container direction="column" spacing={3}>
          <Grid item>
            <Typography variant="body2">{courseInfo.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {numCorrectAnswers}/{quiz.exercises.length} {feedbackText}
            </Typography>
          </Grid>
          {/* TODO: Add percentage for Flashcards */}
          <ProgressBar progress={percentage} />
        </Grid>
        <ButtonsWrapper>
          <StyledLink to={`/courses/${courseInfo.id}/`}>
            <Button size="small" startIcon={<ArrowBack size={24} />}>
              {courseInfo.name}
            </Button>
          </StyledLink>
          <StyledLink to={`/quiz/${quiz.exercises[0].collection_id}/${quiz.exercises[0].type}`}>
            <Button onClick={() => moreQuiz()} size="small" endIcon={<ArrowForward size={24} />}>
              Flere spørsmål
            </Button>
          </StyledLink>
        </ButtonsWrapper>
      </Grid>

      <Grid item>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="body1">Oppsummering</Typography>
          </Grid>
          {quiz.exercises.map(ex => {
            return (
              <Grid item key={ex.id}>
                <QuestionSummary exercise={ex} altIndex={ex.altIndex} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
