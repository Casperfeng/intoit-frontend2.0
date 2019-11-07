import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  z-index: 2;
  object-fit: contain;
  width: 175px;
  height: auto;
  cursor: pointer;
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
      <Link to='/'>
        <NavbarIcon src={IntoitLogo} />
      </Link>
      <NavbarLinkContainer>
        <IntoitLink text={'Hjem'} to={'/hjem'} />
        <IntoitLink text={'Om Intoit'} to={'/om-oss'} />
        <IntoitLink text={'Teamet bak'} to={'/teamet'} />
      </NavbarLinkContainer>
      <NavBurgermenuContainer>
        <Burgermenu />
      </NavBurgermenuContainer>
    </NavbarContent>
  );
}
