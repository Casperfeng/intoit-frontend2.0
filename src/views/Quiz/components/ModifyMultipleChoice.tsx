import React, { useState, useRef } from 'react';
import QuestionInput from 'views/CreateQuestion/components/QuestionInput';
import Choices from 'views/CreateQuestion/components/Choices';
import AddImage from 'views/CreateQuestion/components/AddImage';
import Optional from 'views/CreateQuestion/components/Optional';
import { Grid, TextField, Button } from '@material-ui/core';
import axios from 'axios';

interface Props {
  exercise: IQuestion;
  setIsEditing: Function;
}

export default function ModifyMultipleChoice({ exercise, setIsEditing }: Props) {
  const [modifyReason, setModifyReason] = useState('');
  const questionRef = useRef({});
  const alternativesRef = useRef({});
  // const optionalRef = useRef({});

  const handleModifyReasonChange = e => {
    setModifyReason(e.target.value);
  };

  const onEditSubmit = async () => {
    const question: any = questionRef.current;
    const alternatives: any = alternativesRef.current;

    const content = {
      question: {
        text: question.value,
      },
      alternatives: alternatives.choices.map(alt => ({ text: alt.text, correct: alt.correct })),
    };

    const exercisePayload = {
      content: content,
      type: exercise.type,
    };

    const response = await axios.put(`/exercises/${exercise.id}`, {
      exercise: exercisePayload,
      modify_reason: modifyReason,
    });

    if (response) {
      console.log(response);
      setIsEditing(false);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <QuestionInput title="Spørsmål" content={exercise.content.question.text} ref={questionRef} />
      </Grid>
      <Grid item xs={12}>
        <Choices choiceTexts={exercise.content.alternatives} ref={alternativesRef} />
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
      <Grid item container direction="row" spacing={2}>
        <Grid item>
          <Button color="primary" variant="contained" onClick={onEditSubmit}>
            Lagre
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined" onClick={() => setIsEditing(false)}>
            Avbryt
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
