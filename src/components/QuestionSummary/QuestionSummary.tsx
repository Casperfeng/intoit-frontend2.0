import React from 'react';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import { Typography, Box, List, Grid, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Cancel, CheckCircle } from '@styled-icons/material';

interface Props {
  exercise: IQuestion;
  altIndex: number;
}

const renderMcSummary = ex => {
  return (
    <List disablePadding>
      {ex.content.alternatives.map((alt: Alternative, index) => {
        return (
          <CustomDiv color={index === ex.altIndex ? (alt.correct ? colors.correct : colors.error) : '#FFFFFF'} key={`${alt.text}${index}`}>
            <ListItem>
              <ListItemIcon>{alt.correct ? <CheckCircle size={24} /> : <Cancel size={24} />}</ListItemIcon>
              <ListItemText primary={alt.text} />
            </ListItem>
          </CustomDiv>
        );
      })}
    </List>
  );
};

const renderFcSummary = ex => {
  // TODO: Show correct and wrong answers
  return (
    <List disablePadding>
      <CustomDiv color={ex.altIndex === 0 ? colors.error : colors.correct}>
        <ListItem>
          <ListItemText primary={ex.content.answer.text} />
        </ListItem>
      </CustomDiv>
    </List>
  );
};

export default function QuestionSummary({ exercise, altIndex }: Props) {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{exercise.content.question.text}</Typography>
      </Grid>
      <Grid item>
        <Box border={2} borderColor="#979797" borderRadius={4}>
          {exercise.type === 'mc' ? renderMcSummary(exercise) : renderFcSummary(exercise)}
        </Box>
      </Grid>
    </Grid>
  );
}

const CustomDiv = styled.div`
  background-color: ${props => props.color};
`;
