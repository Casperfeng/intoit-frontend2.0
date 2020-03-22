import React from 'react';
import QuestionInput from './QuestionInput';
import AddImage from './AddImage';

export default function MultipleChoiceTabPanel(props) {
  const { value, index } = props;

  return (
    <div hidden={value !== index}>
      <QuestionInput title="Svar" />
      <AddImage title="Bilde til ditt svar" />
    </div>
  );
}
