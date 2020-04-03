import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
  margin?: string;
}

export default function Title({ children, margin }: Props) {
  return <StyledTitle margin={margin}>{children}</StyledTitle>;
}


const StyledTitle = styled.h1<{margin?:string}>`
  font-weight: bold;
  text-transform: uppercase;
  ${props => props.margin && `margin: ${props.margin}`};
`;