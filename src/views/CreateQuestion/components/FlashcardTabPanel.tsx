import React from 'react';
import { Typography } from '@material-ui/core';

export default function FlashcardTabPanel(props) {
  const { value, index } = props;

  return <Typography hidden={value !== index}>Flashcard panel</Typography>;
}
