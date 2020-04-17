import React, { useState } from 'react';
import QuestionInput from 'views/CreateQuestion/components/QuestionInput';
import Choices from 'views/CreateQuestion/components/Choices';
import AddImage from 'views/CreateQuestion/components/AddImage';
import Optional from 'views/CreateQuestion/components/Optional';
import { Grid, TextField } from '@material-ui/core';

interface Props {
  exercise: IQuestion;
}

export default function ModifyMultipleChoice({ exercise }: Props) {
  const [modifyReason, setModifyReason] = useState('');

  const handleModifyReasonChange = e => {
    setModifyReason(e.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <QuestionInput title="Spørsmål" content={exercise.content.question.text} />
      </Grid>
      <Grid item xs={12}>
        <Choices choiceTexts={exercise.content.alternatives} />
      </Grid>
      <Grid item xs={12}>
        <Optional hint={exercise.hint} explanation={exercise.explanation} />
      </Grid>
      <Grid item xs={12}>
        <AddImage title="Bilde" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          value={modifyReason}
          placeholder="Hvorfor redigerte du dette spørsmålet?"
          variant="outlined"
          onChange={handleModifyReasonChange}
        />
      </Grid>
    </Grid>
  );
}
