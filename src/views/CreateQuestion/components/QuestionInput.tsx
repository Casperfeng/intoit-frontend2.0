import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function QuestionInput({ title }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required={true}>
          <TextField multiline rows="4" placeholder={`Ditt ${title}`} variant="outlined" />
        </FormControl>
      </Grid>
    </Grid>
  );
}
