import React from 'react';
import styled, { css } from 'styled-components';
import { IntoitLinkProps } from '../../shared/props/propTypes';

export default function Link(props: IntoitLinkProps) {
  const isDropdown = props.linkType === 'Dropdown';
  const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    /*@TODO: find a better solution to overwrite styling*/
    font-size: ${isDropdown ? '24px' : '20px'};
    width: ${isDropdown ? '100%' : 'fit-content'};
    margin: ${isDropdown ? '35px auto 0 auto' : 'auto'};
    font-weight: bold;

    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  `;

  return <StyledLink href={props.to}>{props.text}</StyledLink>;
}
