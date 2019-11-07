import React from 'react';
import styled, { css } from 'styled-components';
import { DropdownProps } from '../../shared/props/propTypes';
import IntoitLink from '../IntoitLink/IntoitLink';

const DropdownWrapper = styled.div`
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  place-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 400px;
  top: -700px;
  background-color: #d7d7d7;
  ${props =>
    props.animation &&
    css`
      transition: 0.6s;
      top: 0px;
    `}
`;

export default function Dropdownmenu(props: DropdownProps) {
  return (
    <DropdownWrapper animation={props.clicked}>
      <IntoitLink text={'Hjem'} to={'#'} linkType='Dropdown' />
      <IntoitLink text={'Om Intoit'} to={'#'} linkType='Dropdown' />
      <IntoitLink text={'Teamet bak'} to={'#'} linkType='Dropdown' />
    </DropdownWrapper>
  );
}
