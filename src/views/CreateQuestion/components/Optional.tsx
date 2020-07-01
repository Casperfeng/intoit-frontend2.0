import React, { useState } from 'react';
import styled from 'styled-components/macro';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import { WbIncandescent } from '@styled-icons/material-outlined/';
import { School } from 'styled-icons/material/School';
import { Grid, Typography, TextField } from '@material-ui/core';

interface Props {
  hint?: string;
  explanation?: string;
}

export default function Optional({ hint, explanation }: Props) {
  const [hintValue, setHintValue] = useState(hint ? hint : '');
  const [explanationValue, setExplanationValue] = useState(explanation ? explanation : '');

  const handleHintChange = event => {
    setHintValue(event.target.value);
  };

  const handleExplanationChange = event => {
    setExplanationValue(event.target.value);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          Valgfritt
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            multiline
            value={hintValue}
            placeholder="Hint (valgfritt)"
            variant="outlined"
            onChange={handleHintChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <StyledHintIcon size={24} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            multiline
            value={explanationValue}
            placeholder="Forklaring (valgfritt)"
            variant="outlined"
            onChange={handleExplanationChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <School size={24} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}

const StyledHintIcon = styled(WbIncandescent)`
  transform: scaleY(-1);
  color: #56657f;
`;
