import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Burgermenu from '../Burgermenu/Burgermenu';
import IntoitLink from '../IntoitLink/IntoitLink';
import IntoitLogo from '../../assets/icons/long_logo.png';
import { useDispatch } from 'react-redux';
import { setToken, logout } from 'redux/duck/userDuck';

export default function Navbar() {
  const token = useSelector((state: ReduxState) => state.user.token);

  // * Token should be setted on a component that renders on everypage. In our case, this Navbar.
  const ditpatch = useDispatch();
  if (token) {
    ditpatch(setToken(token));
  }
  const clicked = useSelector((state: ReduxState) => state.dropdown);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <NavbarIcon src={IntoitLogo} />
        </Link>
        <NavbarLinkContainer>
          {token ? (
            <>
              <IntoitLink text={'Hjem'} to={'/'} />
              <IntoitLink text={'Om Intoit'} to={'/om-oss'} />
              <IntoitLink text={'Teamet bak'} to={'/teamet'} />
              <IntoitLink text={'Logg ut'} to={'/login'} callback={logout} />
            </>
          ) : (
            <>
              <IntoitLink text={'Om Intoit'} to={'/om-oss'} />
              <IntoitLink text={'Teamet bak'} to={'/teamet'} />
              <IntoitLink text={'Logg inn'} to={'/login'} />
            </>
          )}
        </NavbarLinkContainer>
        <NavBurgermenuContainer>
          <Burgermenu clicked={clicked} />
        </NavBurgermenuContainer>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 20px;
  border-bottom: 1px solid gray;
  z-index: 1;
  margin-bottom: 64px;
`;

const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;
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
