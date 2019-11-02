import React from 'react';
import styled from 'styled-components';
import Burgermenu from '../Burgermenu/Burgermenu';
import IntoitLink from '../IntoitLink/IntoitLink';
import IntoitLogo from '../../assets/icons/long_logo.png';

const NavbarContent = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 20px;
  background-color: white;
  border-bottom: 1px solid gray;
`;

const NavbarIcon = styled.img`
  object-fit: contain;
  width: 175px;
  height: auto;
  @media (max-width: 700px) {
    width: 120px;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  width: 500px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const NavBurgermenuContainer = styled.div`
  align-items: center;
  justify-items: flex-end;
  display: none;
  @media (max-width: 700px) {
    margin-right: 30px;
    display: flex;
  }
`;

export default function Navbar() {
  return (
    <NavbarContent>
      <NavbarIcon src={IntoitLogo} />
      <NavbarLinkContainer>
        <IntoitLink text={'Hjem'} to={'#'} />
        <IntoitLink text={'Om Intoit'} to={'#'} />
        <IntoitLink text={'Teamet bak'} to={'#'} />
      </NavbarLinkContainer>
      <NavBurgermenuContainer>
        <Burgermenu />
      </NavBurgermenuContainer>
    </NavbarContent>
  );
}
