import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../../shared/colors';
import Card from '@material-ui/core/Card';
import { WbIncandescent } from '@styled-icons/material-outlined/';
import Button from '@material-ui/core/Button';

interface HintProps {
  hint?: String;
}

export default function Hint({ hint }: HintProps) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setShowHint(false);
  }, [hint]);

  return (
    <Wrapper>
      <Button color="primary" startIcon={<StyledIcon size={22} />} onClick={() => setShowHint(!showHint)}>
        Hint
      </Button>
      {/* <IconWrapper onClick={() => setShowHint(!showHint)}>
        <StyledIcon size={24} /> HINT
      </IconWrapper> */}
      {showHint && (
        <HintCard variant="outlined">
          <StyledIcon size={20} />
          <p>{hint}</p>
        </HintCard>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(WbIncandescent)`
  transform: scaleY(-1);
  color: #56657f;
`;

const IconWrapper = styled.div`
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 6px;
  color: #56657f;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

const HintCard = styled(Card)`
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 4px;

  &.MuiPaper-outlined {
    border-color: ${colors.grey};
  }

  svg {
    min-width: 20px;
  }

  p {
    font-size: 14px;
    margin-left: 6px;
  }
`;
