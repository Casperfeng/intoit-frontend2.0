import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { TextField } from '@material-ui/core';

export default function QuestionInput(props) {
  return (
    <FormControl fullWidth required={true}>
      <TextField multiline rows="4" placeholder="Ditt spørsmål" variant="outlined" />
    </FormControl>
  );
}
