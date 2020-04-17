import React, { useState, forwardRef, useImperativeHandle } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, TextField } from '@material-ui/core';

interface Props {
  title: string;
  content?: string;
}

const QuestionInputChild = ({ title, content }: Props, ref) => {
  const [value, setValue] = useState(content ? content : '');

  useImperativeHandle(
    ref,
    () => ({
      value,
    }),
    [value],
  );

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
          <TextField autoFocus={true} multiline rows="4" value={value} placeholder={`Ditt ${title}`} variant="outlined" onChange={handleChange} />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default forwardRef(QuestionInputChild);
