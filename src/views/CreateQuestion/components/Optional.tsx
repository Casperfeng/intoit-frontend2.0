import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, TextField } from '@material-ui/core';

export default function Optional(props) {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs>
        <Typography variant="body2" color="textSecondary">
          Valgfritt
        </Typography>
      </Grid>
      <Grid item xs>
        <FormControl fullWidth>
          <TextField multiline placeholder="Hint (valgfritt)" variant="outlined" />
        </FormControl>
      </Grid>
      <Grid item xs>
        <FormControl fullWidth>
          <TextField multiline placeholder="Forklaring (valgfritt)" variant="outlined" />
        </FormControl>
      </Grid>
    </Grid>
  );
}
