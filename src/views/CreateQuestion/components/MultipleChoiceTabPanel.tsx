import React from 'react';
import { Typography } from '@material-ui/core';

export default function MultipleChoiceTabPanel(props) {
  const { value, index } = props;

  return <Typography hidden={value !== index}>MultipleChoiceTabPanel panel</Typography>;
}
