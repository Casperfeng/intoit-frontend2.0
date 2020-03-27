import React, {useRef} from 'react';
import Choices from './Choices';
import QuestionInput from './QuestionInput';
import AddImage from './AddImage';
import Optional from './Optional';
import { Grid } from '@material-ui/core';
import SubmitForm from './SubmitForm';
import axios from 'axios';

interface Props {
  value: number;
  index: number;
  topicId: string;
}


const MultipleChoiceTabPanel = React.memo(({ value, index, topicId }: Props) => {

  const questionRef = useRef({})
  const alternativesRef = useRef({})

  const submitQuestion = async () => {
    const question:any = questionRef.current;
    const alternatives:any = alternativesRef.current;

    const payload = {
      type: 'mc', 
      content: { 
        question: {
          text: question.value
        },
        alternatives: alternatives.choices.map(alt => ({ text: alt.text, correct: alt.correct}))
      }
    }

    const response = await axios.post(
      `/collections/${topicId}/exercises?img=false`,
      payload
    );

    if(response.status == 201) {
      alert('question successfully created');
    } else {
      alert('failed');
    }
    
  }


    return (
      <div hidden={value !== index}>
        <Grid container alignContent="center" spacing={3}>
          <Grid item xs={12} md={6}>
            <QuestionInput title="Spørsmål" ref={questionRef} />
            <AddImage title="Bilde til ditt spørsmål" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Choices ref={alternativesRef}/>
          </Grid>
          <Grid item xs={12}>
            <Optional />
          </Grid>
          <Grid item xs={12} sm={10}>
            <SubmitForm onSubmit={submitQuestion}/>
          </Grid>
        </Grid>
      </div>
    )

},)


export default MultipleChoiceTabPanel