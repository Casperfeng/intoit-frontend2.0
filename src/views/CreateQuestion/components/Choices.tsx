import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Grid, FormControl, TextField, InputAdornment, IconButton, Button, Typography } from '@material-ui/core';
import { Clear, Add } from '@styled-icons/material';

export default function Choices() {
  const [choices, setChoices] = useState([
    {
      text: '',
      placeholder: 'Korrekt svar',
      correct: false,
    },
    {
      text: '',
      placeholder: 'Feil svar',
      correct: false,
    },
    {
      text: '',
      placeholder: 'Feil svar',
      correct: false,
    },
  ]);

  const handleChange = (event, i) => {
    const newChoices = [...choices];
    newChoices[i].text = event.target.value;
    setChoices(newChoices);
  };

  const handleAddChoice = () => {
    setChoices(oldChoices => [...oldChoices, { text: '', placeholder: 'Feil svar', correct: false }]);
  };

  const handleClickRemoveChoice = i => {
    const newChoices = [...choices];
    newChoices.splice(i, 1);
    setChoices(newChoices);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          Svaralternativ
        </Typography>
      </Grid>
      {choices.map((choice, i) => (
        <Grid key={i} item xs={12}>
          <FormControl fullWidth>
            {i === 0 ? (
              <CorrectTextField
                multiline
                key={i}
                onChange={e => handleChange(e, i)}
                value={choices[i].text}
                placeholder={choices[i].placeholder}
                variant="outlined"
              />
            ) : (
              <WrongTextField
                multiline
                key={i}
                onChange={e => handleChange(e, i)}
                value={choices[i].text}
                placeholder={choices[i].placeholder}
                variant="outlined"
                InputProps={
                  i >= 3
                    ? {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => handleClickRemoveChoice(i)}>
                              <Clear size={24} />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }
                    : {}
                }
              />
            )}
          </FormControl>
        </Grid>
      ))}
      <Grid item xs={12} hidden={choices.length >= 5}>
        <Button fullWidth variant="outlined" color="primary" startIcon={<Add size={22} />} onClick={handleAddChoice}>
          Legg til svaralternativ
        </Button>
      </Grid>
    </Grid>
  );
}

const CorrectTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #38c05d;
    }
    &.Mui-focused fieldset {
      border-color: #38c05d;
    }
  }
`;

const WrongTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #f47265;
    }
    &.Mui-focused fieldset {
      border-color: #f47265;
    }
    &:hover fieldset {
      border-color: #f47265;
    }
  }
`;
