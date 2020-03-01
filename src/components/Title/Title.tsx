import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  const StyledTitle = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
  `;
  return <StyledTitle>{children}</StyledTitle>;
}
