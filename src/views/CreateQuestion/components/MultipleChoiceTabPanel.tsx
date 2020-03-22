import React from 'react';
import Choices from './Choices';

export default function MultipleChoiceTabPanel(props) {
  const { value, index } = props;

  return (
    <div hidden={value !== index}>
      <Choices />
    </div>
  );
}
