import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function Optional() {
  const [hintValue, setHintValue] = useState('');
  const [explanationValue, setExplanationValue] = useState('');

  const handleHintChange = event => {
    setHintValue(event.target.value);
  };

  const handleExplanationChange = event => {
    setExplanationValue(event.target.value);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12} md={6}>
        <Typography variant="body2" color="textSecondary">
          Valgfritt
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField multiline value={hintValue} placeholder="Hint (valgfritt)" variant="outlined" onChange={handleHintChange} />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <TextField multiline value={explanationValue} placeholder="Forklaring (valgfritt)" variant="outlined" onChange={handleExplanationChange} />
        </FormControl>
      </Grid>
    </Grid>
  );
}
