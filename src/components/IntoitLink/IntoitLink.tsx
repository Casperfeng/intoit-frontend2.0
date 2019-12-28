import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { updateDropdown } from '../../redux/duck/dropdownDuck';

interface IntoitLinkProps {
  text: string;
  to: string;
  linkType?: string;
  callback?: Function;
}

export default function IntoitLink({
  text,
  to,
  linkType,
  callback
}: IntoitLinkProps) {
  const dispatch = useDispatch();
  const isDropdown = linkType === 'Dropdown';
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${isDropdown ? 'white' : 'black'};
    font-size: ${isDropdown ? '24px' : '20px'};
    width: ${isDropdown ? '100%' : 'fit-content'};
    margin: ${isDropdown ? '35px auto 0 auto' : 'auto'};
    font-weight: bold;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  `;

  function handleClick() {
    if (isDropdown) {
      dispatch(updateDropdown());
    }
    if (callback) {
      dispatch(callback());
    }
  }

  return (
    <StyledLink onClick={handleClick} to={to}>
      {text}
    </StyledLink>
  );
}
