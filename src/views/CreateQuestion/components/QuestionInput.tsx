import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function QuestionInput({ title }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth required={true}>
          <TextField multiline rows="4" value={value} placeholder={`Ditt ${title}`} variant="outlined" onChange={handleChange} />
        </FormControl>
      </Grid>
    </Grid>
  );
}
