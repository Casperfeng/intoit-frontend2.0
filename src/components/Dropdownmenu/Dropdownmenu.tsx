import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { logout } from 'redux/duck/userDuck';
import IntoitLink from '../IntoitLink/IntoitLink';
interface DropdownProps {
  clicked: boolean;
}

export default function Dropdownmenu({ clicked }: DropdownProps) {
  const token = useSelector((state: ReduxState) => state.user.token);
  return (
    <DropdownWrapper animation={clicked}>
      {token ? (
        <>
          <IntoitLink to={'/'} linkType="Dropdown">
            Hjem
          </IntoitLink>
          <IntoitLink to={'/profile'} linkType="Dropdown">
            Min profil
          </IntoitLink>
          <IntoitLink to={'/om-oss'} linkType="Dropdown">
            Om Intoit
          </IntoitLink>
          <IntoitLink to={'/login'} linkType="Dropdown" callback={logout}>
            Logg ut
          </IntoitLink>
        </>
      ) : (
        <>
          <IntoitLink to={'/om-oss'} linkType="Dropdown">
            Om Intoit
          </IntoitLink>
          <IntoitLink to={'/'} linkType="Dropdown">
            Logg inn
          </IntoitLink>
        </>
      )}
    </DropdownWrapper>
  );
}

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
