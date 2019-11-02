import React from 'react';
import styled from 'styled-components';

const NavbarContent = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  padding: 10px;
  background-color: #4266b2;
`;

const NavbarIcon = styled.img`
  width: 100px;
  height: 60px;
`;

const NavbarContainer = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-around;
`;

const NavbarLink = styled.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  width: 150px;
  color: white;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <NavbarContent>
      <NavbarIcon />
      <NavbarContainer>
        <NavbarLink>Hjem</NavbarLink>
        <NavbarLink>Om Intoit</NavbarLink>
        <NavbarLink>Om oss</NavbarLink>
      </NavbarContainer>
    </NavbarContent>
  );
}
