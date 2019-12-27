import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const StyledTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export default function Title({ text }: Props) {
  return <StyledTitle>{text}</StyledTitle>;
}
