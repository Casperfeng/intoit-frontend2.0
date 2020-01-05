import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
}

export default function Title({ children }: Props) {
  const StyledTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-transform: lowercase;
    ::first-letter {
      text-transform: capitalize;
    }
  `;
  return <StyledTitle>{children}</StyledTitle>;
}
