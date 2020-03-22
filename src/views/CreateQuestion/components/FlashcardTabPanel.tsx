import React from 'react';
import QuestionInput from './QuestionInput';
import AddImage from './AddImage';
import { Grid } from '@material-ui/core';

export default function MultipleChoiceTabPanel(props) {
  const { value, index } = props;

  return (
    <div hidden={value !== index}>
      <Grid container direction="column" justify="center" alignItems="stretch" spacing={2}>
        <Grid item xs={12}>
          <QuestionInput title="Svar" />
        </Grid>
        <Grid item xs={12}>
          <AddImage title="Bilde til ditt svar" />
        </Grid>
      </Grid>
    </div>
  );
}
