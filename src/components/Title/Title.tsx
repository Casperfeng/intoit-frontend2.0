import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  const StyledTitle = styled.h1`
    font-size: 48px;
    font-weight: bold;
  `;
  return <StyledTitle>{text}</StyledTitle>;
}
