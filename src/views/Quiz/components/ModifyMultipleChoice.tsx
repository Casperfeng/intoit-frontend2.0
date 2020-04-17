import React, { useState, useRef } from 'react';
import QuestionInput from 'views/CreateQuestion/components/QuestionInput';
import Choices from 'views/CreateQuestion/components/Choices';
import AddImage from 'views/CreateQuestion/components/AddImage';
import Optional from 'views/CreateQuestion/components/Optional';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';
import axios from 'axios';

interface Props {
  exercise: IQuestion;
  setIsEditing: Function;
}

export default function ModifyMultipleChoice({ exercise, setIsEditing }: Props) {
  const [modifyReason, setModifyReason] = useState('');
  const questionRef = useRef({});
  const alternativesRef = useRef({});
  //const optionalRef = useRef({});

  const handleModifyReasonChange = e => {
    setModifyReason(e.target.value);
  };

  const onEditSubmit = async () => {
    const question: any = questionRef.current;
    const alternatives: any = alternativesRef.current;
    //const hint:any = hintRef.current;
    //const explanation:any = explanationRef.current;

    const payload = exercise;
    //payload.hint = hint.value;
    //payload.explanation = explanation.value;
    payload.content = {
      question: {
        text: question.value,
      },
      alternatives: alternatives.choices.map(alt => ({ text: alt.text, correct: alt.correct })),
    };
    payload.modify_reason = modifyReason;

    const response = await axios.put(`/exercises/${exercise.id}?img=false`, {
      entities: payload,
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
      <Button color="primary" variant="contained" onClick={onEditSubmit}>
        Lagre
      </Button>
      <Button color="primary" variant="outlined" onClick={() => setIsEditing(false)}>
        Avbryt
      </Button>
    </Grid>
  );
}
