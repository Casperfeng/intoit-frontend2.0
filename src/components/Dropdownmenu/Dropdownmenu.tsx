import React from 'react';
import styled, { css } from 'styled-components';
import { logout } from '../../redux/duck/facebookLoginDuck';
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
  background-color: rgb(53, 152, 219);
  ${props =>
    props.animation &&
    css`
      transition: 0.6s;
      top: 0px;
    `}
`;
interface DropdownProps {
  clicked: boolean;
}

export default function Dropdownmenu({ clicked }: DropdownProps) {
  return (
    <DropdownWrapper animation={clicked}>
      <IntoitLink text={'Hjem'} to={'/'} linkType='Dropdown' />
      <IntoitLink text={'Om Intoit'} to={'/om-oss'} linkType='Dropdown' />
      <IntoitLink text={'Teamet bak'} to={'/teamet'} linkType='Dropdown' />
      <IntoitLink
        text={'Logg ut'}
        to={'/login'}
        linkType='Dropdown'
        callback={logout}
      />
    </DropdownWrapper>
  );
}
