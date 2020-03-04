import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Burgermenu from '../Burgermenu/Burgermenu';
import IntoitLink from '../IntoitLink/IntoitLink';
import IntoitLogo from '../../assets/icons/long_logo.png';
import { useDispatch } from 'react-redux';
import { setToken, logout } from 'redux/duck/userDuck';
import PROFILE_ICON from 'assets/icons/profileIcon.svg';

interface Props {
  currentViewIsQuiz?: boolean;
}

const Navbar = ({ currentViewIsQuiz }: Props) => {
  const token = useSelector((state: ReduxState) => state.user.token);

  // * Token should be setted on a component that renders on everypage. In our case, this Navbar.
  const ditpatch = useDispatch();
  if (token) {
    ditpatch(setToken(token));
  }
  const clicked = useSelector((state: ReduxState) => state.dropdown);

  if (currentViewIsQuiz) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <NavbarIcon src={IntoitLogo} />
        </Link>
        <NavbarLinkContainer>
          {token ? (
            <>
              <IntoitLink to={'/'}>Hjem</IntoitLink>
              <IntoitLink to={'/om-oss'}>Om Intoit</IntoitLink>
              <IntoitLink to={'/login'} callback={logout}>
                Logg ut
              </IntoitLink>
              <IntoitLink to={'/profile'}>
                <img src={PROFILE_ICON} alt={'Profil icon'} />
              </IntoitLink>
            </>
          ) : (
            <>
              <IntoitLink to={'/om-oss'}>Om Intoit</IntoitLink>
              <IntoitLink to={'/login'}>Logg inn</IntoitLink>
            </>
          )}
        </NavbarLinkContainer>
        <NavBurgermenuContainer>
          <Burgermenu clicked={clicked} />
        </NavBurgermenuContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 20px;
  border-bottom: 1px solid gray;
  z-index: 1;
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
    display: flex;
  }
`;

export default Navbar;
