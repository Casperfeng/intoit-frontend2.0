import React, { useState } from 'react';
import { Grid, FormControl, TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';
import { Clear, Add } from '@styled-icons/material';

export default function Choices() {
  const [choices, setChoices] = useState([
    {
      text: 'Korrekt svar',
      correct: false,
    },
    {
      text: 'Feil svar',
      correct: false,
    },
    {
      text: 'Feil svar',
      correct: false,
    },
  ]);

  const handleAddChoice = () => {
    setChoices(oldChoices => [...oldChoices, { text: 'Feil svar', correct: false }]);
  };

  const handleClickRemoveChoice = i => {
    const newChoices = [...choices];
    newChoices.splice(i, 1);
    setChoices(newChoices);
  };

  const extraChoice = i => {
    return (
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            multiline
            key={i}
            placeholder={choices[i].text}
            variant="outlined"
            error={i !== 0}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleClickRemoveChoice(i)}>
                    <Clear size={24} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          Svaralternativ
        </Typography>
      </Grid>
      {choices.map((choice, i) =>
        i < 3 ? (
          <Grid key={i} item xs={12}>
            <FormControl fullWidth>
              <TextField multiline key={i} placeholder={choice.text} variant="outlined" error={i !== 0} />
            </FormControl>
          </Grid>
        ) : (
          extraChoice(i)
        ),
      )}
      <Grid item xs={12} hidden={choices.length >= 5}>
        <Button fullWidth variant="outlined" color="primary" startIcon={<Add size={22} />} onClick={handleAddChoice}>
          Legg til svaralternativ
        </Button>
      </Grid>
    </Grid>
  );
}
