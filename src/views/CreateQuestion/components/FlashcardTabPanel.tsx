import React from 'react';
import QuestionInput from './QuestionInput';
import AddImage from './AddImage';
import Optional from './Optional';
import { Grid } from '@material-ui/core';

export default function MultipleChoiceTabPanel(props) {
  const { value, index } = props;

  return (
    <div hidden={value !== index}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <QuestionInput title="Spørsmål" />
          <AddImage title="Bilde til ditt spørsmål" />
        </Grid>
        <Grid item xs={12} md={6}>
          <QuestionInput title="Svar" />
          <AddImage title="Bilde til ditt svar" />
        </Grid>
        <Grid item xs={12}>
          <Optional />
        </Grid>
      </Grid>
    </div>
  );
}
