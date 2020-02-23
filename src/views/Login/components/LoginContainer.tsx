import React from 'react';
import styled from 'styled-components';
import AuthenticationIcon from 'assets/icons/loginIcon.svg';
import Seal from 'assets/levels/sel.png';
import Goldfish from 'assets/level-badges/groovy_goldfish.png';
import FacebookLogin from 'components/Auth/FacebookLogin';
import GuestAuth from 'components/Auth/GuestAuth';

export default function LoginContainer() {
  return (
    <StyledLoginContainer>
      <TextTitle>
        <TextBadge src={Goldfish} />
        Logg inn
        <TextBadge src={Seal} />
      </TextTitle>
      <LoginIcon src={AuthenticationIcon} />
      <LoginButtonContainer>
        <FacebookLogin />
        <GuestAuth />
      </LoginButtonContainer>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  padding: 30px;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  margin: 10px;
  background-color: white;
  @media (max-width: 990px) {
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
`;

const TextTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  flex-wrap: nowrap;
  font-size: 36px;
  font-weight: 400;
  padding: 10px;
  margin: 0px;
  @media (max-width: 556px) {
    font-size: 20px;
  }
`;

const TextBadge = styled.img`
  margin: 0 10px;
  width: 50px;
  height: 50px;
  @media (max-width: 556px) {
    width: 30px;
    height: 30px;
  }
`;

const LoginIcon = styled.img`
  margin: 20px;
  width: 250px;
  height: 250px;
  @media (max-width: 556px) {
    width: 150px;
    height: 150px;
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
`;
