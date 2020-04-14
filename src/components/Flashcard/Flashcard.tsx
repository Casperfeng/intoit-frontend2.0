import React from 'react';
import styled from 'styled-components/macro';
import Card from '@material-ui/core/Card';

interface Props {}

export default function Flashcard(props: Props) {
  return (
    <Wrapper variant="outlined">
      <h1>Hei</h1>
    </Wrapper>
  );
}

const Wrapper = styled(Card)`
  /* width: 1000px; */
`;
