import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { updateDropdown } from '../../redux/duck/dropdownDuck';

interface IntoitLinkProps {
  text: string;
  to: string;
  linkType?: string;
}

export default function IntoitLink(props: IntoitLinkProps) {
  const dispatch = useDispatch();
  const isDropdown = props.linkType === 'Dropdown';
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${isDropdown ? 'white' : 'black'};
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

  return (
    <StyledLink
      onClick={() => isDropdown && dispatch(updateDropdown())}
      to={props.to}
    >
      {props.text}
    </StyledLink>
  );
}
