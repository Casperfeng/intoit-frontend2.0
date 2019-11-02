import React from 'react';
import styled from 'styled-components';
import { IntoitLinkProps } from '../../shared/types';

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
export default function Link(props: IntoitLinkProps) {
  return <StyledLink href={props.to}>{props.text}</StyledLink>;
}
