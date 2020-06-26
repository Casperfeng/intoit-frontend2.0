import React from 'react';
import styled from 'styled-components/macro';
import colors from 'shared/colors';
import { LinearProgress } from '@material-ui/core';

interface Props {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {
  return <QuizProgress variant="determinate" value={progress} />;
}

const QuizProgress = styled(LinearProgress)`
  margin: 10px 0;
  border-radius: 3px;
  height: 8px;

  &.MuiLinearProgress-colorPrimary {
    background-color: ${colors.error};
  }

  > .MuiLinearProgress-barColorPrimary {
    background-color: ${colors.correct};
  }
`;
